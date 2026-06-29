/* ==========================================
   QUIZ
========================================== */

/* ----------------------------------------
   RESULTADOS POR PERFIL
---------------------------------------- */

const QUIZ_RESULTS = {
  a: {
    title: 'Você já tem o impulso. Falta o método.',
    text: 'Você se move de vez em quando, mas ainda não criou uma rotina consistente. O Projeto Recomeço vai te dar a estrutura que falta para transformar intenção em hábito real — sem pressão, no seu ritmo.',
  },
  b: {
    title: 'Seu corpo está esperando por isso.',
    text: 'Faz tempo que o movimento sumiu da sua rotina — e o corpo sente. A boa notícia é que 15 minutos por dia são suficientes para começar a mudança. O Projeto Recomeço foi desenhado exatamente para quem está nesse momento.',
  },
  c: {
    title: 'Desta vez vai ser diferente. Aqui está o porquê.',
    text: 'Você já tentou antes — e isso conta. O que faltou não foi vontade, foi um método progressivo e gentil que não te exige tudo de uma vez. O Projeto Recomeço começa pequeno e cresce com você.',
  },
  d: {
    title: 'Você encontrou o guia que estava procurando.',
    text: 'Sem decidir o que fazer, nada começa. O Projeto Recomeço tira esse peso de você: cada dia tem uma missão clara, simples e possível. Você só precisa aparecer.',
  },
};

/* ----------------------------------------
   INICIALIZAÇÃO DO QUIZ
---------------------------------------- */

/**
 * Habilita o botão de submit quando uma opção é selecionada.
 */
const initQuizOptions = () => {
  const radios = qsa('input[name="situacao"]');
  const submitBtn = qs('#quizSubmit');
  if (!radios.length || !submitBtn) return;

  radios.forEach((radio) => {
    on(radio, 'change', () => {
      submitBtn.disabled = false;
      submitBtn.removeAttribute('disabled');
    });
  });
};

/**
 * Processa o submit do quiz.
 */
const initQuizSubmit = () => {
  const submitBtn = qs('#quizSubmit');
  if (!submitBtn) return;

  on(submitBtn, 'click', () => {
    const selected = qs('input[name="situacao"]:checked');
    if (!selected) return;

    const value = selected.value;
    saveQuizResult(value);
    showQuizResult(value);
  });
};

/**
 * Exibe o card de resultado com animação.
 * @param {string} value — 'a' | 'b' | 'c' | 'd'
 */
const showQuizResult = (value) => {
  const resultado = qs('#resultado');
  const title = qs('#resultado .up-resultado__title');
  const text = qs('#resultado .up-resultado__text');

  if (!resultado || !title || !text) return;

  const data = QUIZ_RESULTS[value];
  if (!data) return;

  title.textContent = data.title;
  text.textContent = data.text;

  resultado.hidden = false;
  resultado.removeAttribute('hidden');

  const navbarHeight = qs('.up-navbar')?.offsetHeight || 0;
  const top = resultado.getBoundingClientRect().top + window.scrollY - navbarHeight - 24;
  window.scrollTo({ top, behavior: 'smooth' });
};

/**
 * Restaura resultado salvo no localStorage ao carregar a página.
 */
const restoreQuizResult = () => {
  const saved = getQuizResult();
  if (saved && saved.value) {
    showQuizResult(saved.value);

    const radio = qs(`input[name="situacao"][value="${saved.value}"]`);
    if (radio) {
      radio.checked = true;
      const submitBtn = qs('#quizSubmit');
      if (submitBtn) submitBtn.disabled = false;
    }
  }
};

/**
 * Inicializa todo o módulo de quiz.
 */
const initQuiz = () => {
  initQuizOptions();
  initQuizSubmit();
  restoreQuizResult();
};
