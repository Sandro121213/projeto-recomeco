/* ==========================================
   DIA 01
========================================== */

const DIA_NUMBER = 1;
const RECIPE_ID  = 'dia01-vitamina-verde';

/* ----------------------------------------
   PROGRESSO NA NAVBAR
---------------------------------------- */

/**
 * Atualiza a mini barra de progresso na navbar.
 */
const initNavProgress = () => {
  const fill = qs('#navProgressFill');
  const bar  = qs('#navProgressBar');
  if (!fill) return;

  const pct = calcProgress();
  fill.style.width = pct + '%';
  if (bar) bar.setAttribute('aria-valuenow', pct);
};

/* ----------------------------------------
   STATUS DO HERO
---------------------------------------- */

/**
 * Atualiza o indicador de status da missão no hero.
 */
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

/* ----------------------------------------
   CHECKLIST
---------------------------------------- */

/**
 * Restaura o estado salvo do checklist e inicializa eventos.
 */
const initDiaChecklist = () => {
  const inputs = qsa('[data-day="1"][data-check]');
  const saved  = getChecklist(DIA_NUMBER);

  inputs.forEach((input) => {
    const id = input.getAttribute('data-check');
    if (saved.includes(id)) {
      input.checked = true;
      const path = input.nextElementSibling?.querySelector('path');
      if (path) path.style.strokeDashoffset = '0';
    }

    on(input, 'change', () => {
      const checked = qsa('[data-day="1"][data-check]:checked')
        .map((el) => el.getAttribute('data-check'));
      saveChecklist(DIA_NUMBER, checked);

      const path = input.nextElementSibling?.querySelector('path');
      if (path) {
        path.style.strokeDashoffset = input.checked ? '0' : '12';
        path.style.transition = 'stroke-dashoffset 250ms ease';
      }
    });
  });
};

/* ----------------------------------------
   RECEITA — FAVORITO
---------------------------------------- */

/**
 * Inicializa o botão de favorito da receita.
 */
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
    showToast(
      isFavorite(RECIPE_ID) ? 'Receita salva nos favoritos.' : 'Receita removida dos favoritos.',
      'success'
    );
  });
};

/* ----------------------------------------
   DIÁRIO
---------------------------------------- */

/**
 * Inicializa o diário do dia — emojis, textarea e salvar.
 */
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

/* ----------------------------------------
   BOTÃO CONCLUIR DIA
---------------------------------------- */

/**
 * Inicializa o botão de conclusão do dia.
 */
const initConcluirBtn = () => {
  const btn = qs('#diaConcluirBtn');
  if (!btn) return;

  if (isDayDone(DIA_NUMBER)) {
    btn.textContent = 'Dia 1 concluído ✓';
    btn.disabled = true;
  }

  on(btn, 'click', () => {
    markDayDone(DIA_NUMBER);
    btn.textContent = 'Dia 1 concluído ✓';
    btn.disabled = true;
    renderDiaStatus();
    showToast('Parabéns! Dia 1 concluído. Até amanhã! 🌱', 'success');

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 2000);
  });
};

/* ----------------------------------------
   INICIALIZAÇÃO
---------------------------------------- */

onReady(() => {
  initNavProgress();
  renderDiaStatus();
  initDiaChecklist();
  initRecipeFav();
  initDiaDiary();
  initConcluirBtn();
  initNavbarScroll();
  initRevealObserver();
});
