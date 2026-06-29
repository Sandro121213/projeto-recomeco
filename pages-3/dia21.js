/* ==========================================
   DIA 21
========================================== */

const DIA_NUMBER = 21;
const RECIPE_ID  = 'dia21-bolo-banana';

const initNavProgress = () => {
  const fill = qs('#navProgressFill');
  const bar  = qs('#navProgressBar');
  if (!fill) return;
  const pct = calcProgress();
  fill.style.width = pct + '%';
  if (bar) bar.setAttribute('aria-valuenow', pct);
};

const renderDiaStatus = () => {
  const dot   = qs('.up-dia-hero__status-dot');
  const label = qs('#diaStatusLabel');
  if (!dot || !label) return;
  if (isDayDone(DIA_NUMBER)) {
    dot.classList.add('is-done');
    label.textContent = 'Missão concluída';
    label.classList.add('is-done');
  } else {
    dot.classList.remove('is-done');
    label.textContent = 'Missão pendente';
    label.classList.remove('is-done');
  }
};

const loadDayContent = () => {
  if (typeof DAYS_DATA === 'undefined') return;
  const data = DAYS_DATA[DIA_NUMBER - 1];
  if (!data) return;

  const objEl  = qs('#diaObjetivoText');
  const missEl = qs('#diaMissaoText');
  if (objEl)  objEl.textContent  = data.text;
  if (missEl) missEl.textContent = data.text;

  renderDayChecklist(data.checklist);
  renderDayRecipe(data.recipe);
};

const renderDayChecklist = (items) => {
  if (!items) return;
  const container = qs('#diaChecklist');
  if (!container) return;
  const saved = getChecklist(DIA_NUMBER);
  container.innerHTML = '';
  items.forEach((label, idx) => {
    const checkId   = 'dia21-check' + (idx + 1);
    const dataId    = String(idx + 1);
    const isChecked = saved.includes(dataId);
    const labelEl   = document.createElement('label');
    labelEl.className = 'up-checklist-item';
    labelEl.setAttribute('for', checkId);
    labelEl.innerHTML =
      '<input class="up-checklist-item__input sr-only" type="checkbox" id="' + checkId +
      '" data-day="21" data-check="' + dataId + '"' + (isChecked ? ' checked' : '') +
      ' aria-label="' + label + '" />' +
      '<span class="up-checklist-item__box" aria-hidden="true"><svg class="up-checklist-item__check" width="12" height="12" viewBox="0 0 12 12" fill="none">' +
      '<path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12" stroke-dashoffset="' + (isChecked ? '0' : '12') + '"/></svg></span>' +
      '<span class="up-checklist-item__label">' + label + '</span>';
    container.appendChild(labelEl);
    const input = labelEl.querySelector('input');
    on(input, 'change', () => {
      const checked = qsa('[data-day="21"][data-check]:checked').map((el) => el.getAttribute('data-check'));
      saveChecklist(DIA_NUMBER, checked);
      const path = input.nextElementSibling?.querySelector('path');
      if (path) { path.style.strokeDashoffset = input.checked ? '0' : '12'; path.style.transition = 'stroke-dashoffset 250ms ease'; }
    });
  });
};

const renderDayRecipe = (recipe) => {
  if (!recipe) return;
  const titleEl = qs('#diaRecipeTitle');
  const descEl  = qs('#diaRecipeDesc');
  const ingEl   = qs('#diaRecipeIngredients');
  const badgeEl = qs('#diaRecipeBadge');
  const tagsEl  = qs('#diaRecipeTags');
  if (titleEl) titleEl.textContent = recipe.title;
  if (descEl)  descEl.textContent  = recipe.desc;
  if (badgeEl) badgeEl.textContent = recipe.tag + ' · ' + recipe.time;
  if (ingEl)   ingEl.innerHTML     = recipe.ingredients.map((item) => '<li>' + item + '</li>').join('');
  if (tagsEl)  tagsEl.innerHTML    = '<span class="up-recipe__tag">' + recipe.tag + '</span><span class="up-recipe__tag">' + recipe.time + '</span>';
};

const initRecipeFav = () => {
  const btn = qs('#diaRecipeFav');
  if (!btn) return;
  const update = () => {
    const fav = isFavorite(RECIPE_ID);
    btn.setAttribute('aria-pressed', String(fav));
    btn.setAttribute('aria-label', fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
  };
  update();
  on(btn, 'click', () => {
    toggleFavorite(RECIPE_ID);
    update();
    showToast(isFavorite(RECIPE_ID) ? 'Receita salva nos favoritos.' : 'Receita removida dos favoritos.', 'success');
  });
};

const initDiaDiary = () => {
  const emojiBtns  = qsa('#diaDiaryEmojis .up-diary-emoji');
  const textarea   = qs('#diaDiaryText');
  const saveBtn    = qs('#diaDiarySave');
  const savedLabel = qs('#diaDiarySavedLabel');
  const saved      = getDiaryEntry(DIA_NUMBER);
  let selectedHumor = null;
  if (saved) {
    if (textarea && saved.texto) textarea.value = saved.texto;
    selectedHumor = saved.humor || null;
    emojiBtns.forEach((btn) => {
      const match = btn.getAttribute('data-humor') === saved.humor;
      btn.setAttribute('aria-pressed', String(match));
      if (match) btn.classList.add('is-selected');
    });
  }
  emojiBtns.forEach((btn) => {
    on(btn, 'click', () => {
      selectedHumor = btn.getAttribute('data-humor');
      emojiBtns.forEach((b) => {
        const match = b === btn;
        b.setAttribute('aria-pressed', String(match));
        b.classList.toggle('is-selected', match);
      });
    });
  });
  if (saveBtn) {
    on(saveBtn, 'click', () => {
      const texto = textarea ? textarea.value.trim() : '';
      saveDiaryEntry(DIA_NUMBER, { humor: selectedHumor, texto });
      if (savedLabel) {
        savedLabel.hidden = false;
        savedLabel.removeAttribute('hidden');
        setTimeout(() => { savedLabel.hidden = true; }, 2500);
      }
      showToast('Reflexão salva com sucesso.', 'success');
    });
  }
};

const initConcluirBtn = () => {
  const btn = qs('#diaConcluirBtn');
  if (!btn) return;
  if (isDayDone(DIA_NUMBER)) { btn.textContent = 'Dia 21 concluído ✓'; btn.disabled = true; }
  on(btn, 'click', () => {
    markDayDone(DIA_NUMBER);
    btn.textContent = 'Dia 21 concluído ✓';
    btn.disabled = true;
    renderDiaStatus();
    showToast('Dia 21 concluído! Continue assim. 🏆', 'success');
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 2000);
  });
};

onReady(() => {
  initNavProgress();
  renderDiaStatus();
  loadDayContent();
  initRecipeFav();
  initDiaDiary();
  initConcluirBtn();
  initNavbarScroll();
  initRevealObserver();
});