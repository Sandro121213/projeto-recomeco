/* ==========================================
   APP — INICIALIZAÇÃO PRINCIPAL
========================================== */

/**
 * Ponto de entrada da aplicação.
 * Inicializa todos os módulos na ordem correta.
 */
onReady(() => {

  /* ----------------------------------------
     LAYOUT E NAVEGAÇÃO
  ---------------------------------------- */
  initNavbarScroll();
  initSmoothScroll();
  initNavbarActiveLink();
  initFooterYear();

  /* ----------------------------------------
     ANIMAÇÕES
  ---------------------------------------- */
  initRevealObserver();

  /* ----------------------------------------
     QUIZ
  ---------------------------------------- */
  initQuiz();

  /* ----------------------------------------
     UI INTERATIVA
  ---------------------------------------- */
  initAccordions();

});
