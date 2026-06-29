/* ==========================================
   PROJETO RECOMEÇO · LOGICA DO DIA 2
========================================== */

const DIA_NUMBER = 2;

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
  if (objEl)  objEl.textContent  = `Dia 02 — ${data.title}`;
  if (missEl) missEl.textContent = data.text;

  renderDayChecklist(data.checklist);

  if (data.recipe) {
    const rTitle = qs('#recipeTitle');
    const rDesc  = qs('#recipeDesc');
    const rTag   = qs('#recipeTag');
    const rTime  = qs('#recipeTime');
    const rList  = qs('#recipeIngredientsList');

    if (rTitle) rTitle.textContent = data.recipe.title;
    if (rDesc)  rDesc.textContent  = data.recipe.desc;
    if (rTag)   rTag.textContent   = data.recipe.tag;
    if (rTime)  rTime.textContent  = data.recipe.time;

    if (rList && data.recipe.ingredients) {
      rList.innerHTML = data.recipe.ingredients
        .map(ing => `<li><span class="up-recipe__ingredient-bullet" aria-hidden="true">•</span> ${ing}</li>`)
        .join('');
    }
  }
};

const renderDayChecklist = (checklistArray) => {
  const container = qs('#diaChecklistContainer');
  if (!container || !checklistArray) return;

  const savedChecked = getChecklist(DIA_NUMBER);

  container.innerHTML = checklistArray.map((item, idx) => {
    const id = `chk-${DIA_NUMBER}-${idx}`;
    const isChecked = savedChecked.includes(id) ? 'checked' : '';
    return `
      <li class="up-dia-checklist__item">
        <label class="up-checkbox__label" for="${id}">
          <input type="checkbox" class="up-checkbox__input" id="${id}" ${isChecked} />
          <span class="up-checkbox__box" aria-hidden="true"></span>
          <span class="up-checkbox__text">${item}</span>
        </label>
      </li>
    `;
  }).join('');

  qsa('.up-checkbox__input', container).forEach(input => {
    on(input, 'change', () => {
      const checkedIds = qsa('.up-checkbox__input', container)
        .filter(i => i.checked)
        .map(i => i.id);
      saveChecklist(DIA_NUMBER, checkedIds);
    });
  });
};

const initDiaDiario = () => {
  const emojiBtns  = qsa('.up-dash-diary__emoji-btn');
  const textarea   = qs('#diaDiaryText');
  const saveBtn    = qs('#diaDiarySave');
  const savedLabel = qs('#diaDiarySavedLabel');

  const saved = getDiaryEntry(DIA_NUMBER);
  let selectedHumor = null;

  if (saved) {
    if (saved.texto && textarea) textarea.value = saved.texto;
    if (saved.humor) {
      selectedHumor = saved.humor;
      emojiBtns.forEach(btn => {
        const match = btn.getAttribute('data-humor') === selectedHumor;
        btn.setAttribute('aria-pressed', String(match));
        if (match) btn.classList.add('is-selected');
      });
    }
  }

  emojiBtns.forEach(btn => {
    on(btn, 'click', () => {
      selectedHumor = btn.getAttribute('data-humor');
      emojiBtns.forEach(b => {
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
    });
  }
};

const initConcluirBtn = () => {
  const btn = qs('#diaConcluirBtn');
  if (!btn) return;

  if (isDayDone(DIA_NUMBER)) {
    btn.textContent = `Dia ${DIA_NUMBER} concluído ✓`;
    btn.disabled = true;
  }

  on(btn, 'click', () => {
    markDayDone(DIA_NUMBER);
    btn.textContent = `Dia ${DIA_NUMBER} concluído ✓`;
    btn.disabled = true;
    renderDiaStatus();

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 2000);
  });
};

onReady(() => {
  loadDayContent();
  initNavProgress();
  renderDiaStatus();
  initDiaDiario();
  initConcluirBtn();
});
