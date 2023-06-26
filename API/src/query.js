
// FILTROS DA SEGUNDA CONSULTA
const noVacOutrosSrag = { $and: [{ VACINA_COV: 2}, {CLASSI_FIN: {$in :[1,2,3,4]}}]};
const noVacCovSrag = { $and: [{ VACINA_COV: 2}, {CLASSI_FIN: 5}]}
const noVacNoEspcSrag = { $and: [{ VACINA_COV: 2}, {CLASSI_FIN: null}]}
const vac = { VACINA_COV: 1}
const noEspcVac = { VACINA_COV: {$in :[null,9] }}

module.exports = noEspcVac;