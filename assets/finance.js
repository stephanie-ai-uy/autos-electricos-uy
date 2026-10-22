/* Funciones financieras puras (sin DOM) — probadas en tests.html */
window.EVFIN = (function () {
  // Tasa mensual desde TNA (nominal anual, capitalización mensual) o TEA (efectiva anual).
  function monthlyRate(annualPct, type) {
    const r = annualPct / 100;
    if (type === "TEA") return Math.pow(1 + r, 1 / 12) - 1;
    return r / 12; // TNA
  }
  // Cuota de sistema francés (cuota constante).
  function payment(principal, i, n) {
    if (n <= 0) return NaN;
    if (i === 0) return principal / n;
    return principal * i / (1 - Math.pow(1 + i, -n));
  }
  function simulate(o) {
    const errors = [];
    const price = +o.price, down = +o.down || 0, months = Math.round(+o.months);
    if (!(price > 0)) errors.push("Ingresá el precio del vehículo.");
    if (down < 0 || down > price) errors.push("La entrega inicial debe estar entre 0 y el precio.");
    if (!(months > 0)) errors.push("Ingresá el plazo en meses.");
    if (o.rate === "" || o.rate == null || isNaN(+o.rate) || +o.rate < 0) errors.push("Ingresá la tasa (puede ser 0 %). Si no la conocés, consultá con la entidad: no inventamos una.");
    if (errors.length) return { ok: false, errors };
    const capital = o.financeAmount > 0 ? +o.financeAmount : price - down;
    const i = monthlyRate(+o.rate, o.rateType);
    const cuota = payment(capital, i, months);
    const totalCuotas = cuota * months;
    const intereses = totalCuotas - capital;
    const fees = +o.fees || 0, other = +o.other || 0;
    const totalFinanciado = down + totalCuotas + fees + other;
    const contado = price + other;
    return { ok: true, capital, i, cuota, months, totalCuotas, intereses, fees, other, totalFinanciado, contado, diferencia: totalFinanciado - contado };
  }
  // Coste total de propiedad. Todos los importes en la MISMA moneda.
  function tco(o) {
    const years = Math.max(1, Math.round(+o.years || 1));
    const km = +o.kmYear || 0;
    const kwhYear = km / 100 * (+o.kwh100 || 0);
    const homeShare = Math.min(100, Math.max(0, +o.homePct)) / 100;
    const energyYear = kwhYear * (homeShare * (+o.priceHome || 0) + (1 - homeShare) * (+o.pricePublic || 0));
    const yearly = (+o.insurance || 0) + (+o.patente || 0) + (+o.maint || 0) + (+o.tires || 0) + (+o.otherYear || 0) + energyYear;
    const upfront = (+o.price || 0) + (+o.charger || 0) + (+o.install || 0);
    const rows = [];
    for (let y = 1; y <= years; y++) rows.push({ year: y, annual: yearly, cumulative: upfront + yearly * y });
    const out = { years, kwhYear, energyYear, yearly, upfront, total: upfront + yearly * years, rows };
    if (o.compare) {
      const fuelYear = km / 100 * (+o.cLper100 || 0) * (+o.cFuelPrice || 0);
      const cYearly = fuelYear + (+o.cInsurance || 0) + (+o.cPatente || 0) + (+o.cMaint || 0);
      out.comb = { fuelYear, yearly: cYearly, total: (+o.cPrice || 0) + cYearly * years };
      out.diff = out.comb.total - out.total; // positivo = eléctrico más barato
    }
    return out;
  }
  return { monthlyRate, payment, simulate, tco };
})();
