/* ==========================================
   DIA 13
========================================== */

const DIA_NUMBER = 13;
const RECIPE_ID  = 'dia13-omelete-ervas';

const initNavProgress = () => {
  const fill = qs('#navProgressFill');
  if (!fill) return;
  const pct = calcProgress();
  fill.style.width = pct + '%';
};

const renderDiaStatus = () => {
  const dot   = qs('.up-dia-hero__status-dot');
  const label = qs('#diaStatusLabel');
  if (!dot || !label) return;
  if (isDayDone(DIA_NUMBER)) {
    dot.classList.add('is-done');
    label.textContent = 'Missão concluída';
  } else {
    dot.classList.remove('is-done');
    label.textContent = 'Missão pendente';
  }
};

onReady(() => {
  initNavProgress();
  renderDiaStatus();
  
  const btn = qs('#diaConcluirBtn');
  if (btn) {
    if (isDayDone(DIA_NUMBER)) {
      btn.textContent = 'Dia 13 concluído ✓';
      btn.disabled = true;
    }
    on(btn, 'click', () => {
      markDayDone(DIA_NUMBER);
      btn.textContent = 'Dia 13 concluído ✓';
      btn.disabled = true;
      renderDiaStatus();
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
    });
  }
});
