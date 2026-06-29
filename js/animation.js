/* ==========================================
   ANIMATION
========================================== */

/* ----------------------------------------
   INTERSECTION OBSERVER — REVEAL
---------------------------------------- */

/**
 * Inicializa o observer de reveal por scroll.
 * Elementos com [data-animate] ficam invisíveis
 * até entrar na viewport.
 */
const initRevealObserver = () => {
  const targets = qsa('[data-animate]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
};

/* ----------------------------------------
   NAVBAR — SCROLL SHADOW
---------------------------------------- */

/**
 * Adiciona classe à navbar quando há scroll.
 */
const initNavbarScroll = () => {
  const navbar = qs('.up-navbar');
  if (!navbar) return;

  const toggle = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  on(window, 'scroll', debounce(toggle, 50), { passive: true });
  toggle();
};

/* ----------------------------------------
   SMOOTH SCROLL — LINKS ÂNCORA
---------------------------------------- */

/**
 * Intercepta cliques em links âncora internos
 * e aplica scroll suave.
 */
const initSmoothScroll = () => {
  on(document, 'click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    const navbarHeight = qs('.up-navbar')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

    window.scrollTo({ top, behavior: 'smooth' });

    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
};
