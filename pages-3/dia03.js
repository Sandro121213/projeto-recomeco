/* ==========================================
   DIA 03
========================================== */

const DIA_NUMBER = 3;
const RECIPE_ID  = 'dia03-cha-reidratante';

const initNavProgress = () => {
  const fill = qs('#navProgressFill');
  if (!fill) return;
  const pct = calcProgress();
  fill.style.width = pct + '%';
};

onReady(() => {
  initNavProgress();
});
