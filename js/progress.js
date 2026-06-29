/* ==========================================
   PROGRESS
========================================== */

const TOTAL_DAYS = 21;

/**
 * Calcula o percentual de progresso.
 * @returns {number} 0 a 100
 */
const calcProgress = () => {
  const done = totalDaysDone();
  return Math.round((done / TOTAL_DAYS) * 100);
};

/**
 * Atualiza a barra de progresso no dashboard.
 * @param {Element} barEl — elemento .up-progress__fill
 * @param {Element} labelEl — elemento com o texto percentual
 */
const updateProgressBar = (barEl, labelEl) => {
  if (!barEl) return;
  const pct = calcProgress();
  barEl.style.width = pct + '%';
  barEl.setAttribute('aria-valuenow', pct);
  if (labelEl) labelEl.textContent = pct + '%';
};

/**
 * Retorna o próximo dia disponível (não concluído).
 * @returns {number} 1 a 21, ou 21 se tudo concluído
 */
const nextAvailableDay = () => {
  for (let d = 1; d <= TOTAL_DAYS; d++) {
    if (!isDayDone(d)) return d;
  }
  return TOTAL_DAYS;
};
