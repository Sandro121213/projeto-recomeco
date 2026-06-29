/* ==========================================
   UI
========================================== */

/* ----------------------------------------
   ACCORDION
---------------------------------------- */

/**
 * Inicializa todos os accordions da página.
 */
const initAccordions = () => {
  const triggers = qsa('.up-accordion__trigger');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    on(trigger, 'click', () => toggleAccordion(trigger));

    on(trigger, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion(trigger);
      }
    });
  });
};

/**
 * Alterna o estado aberto/fechado de um accordion.
 * @param {Element} trigger
 */
const toggleAccordion = (trigger) => {
  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
  const bodyId = trigger.getAttribute('aria-controls');
  const body = document.getElementById(bodyId);
  if (!body) return;

  if (isExpanded) {
    trigger.setAttribute('aria-expanded', 'false');
    body.hidden = true;
  } else {
    trigger.setAttribute('aria-expanded', 'true');
    body.hidden = false;
  }
};

/* ----------------------------------------
   TOAST
---------------------------------------- */

const TOAST_DURATION = 3500;
let toastTimer = null;

/**
 * Exibe uma mensagem toast.
 * @param {string} message
 * @param {'success'|'info'|'warning'} [type='success']
 */
const showToast = (message, type = 'success') => {
  removeToast();

  const toast = document.createElement('div');
  toast.className = `up-toast up-toast--${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;

  document.body.appendChild(toast);

  toastTimer = setTimeout(() => removeToast(), TOAST_DURATION);
};

/**
 * Remove o toast ativo.
 */
const removeToast = () => {
  const existing = qs('.up-toast');
  if (!existing) return;

  existing.classList.add('is-leaving');
  clearTimeout(toastTimer);

  setTimeout(() => existing.remove(), 400);
};

/* ----------------------------------------
   MODAL
---------------------------------------- */

/**
 * Abre um modal pelo ID.
 * @param {string} modalId
 */
const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.hidden = false;
  modal.removeAttribute('hidden');
  modal.setAttribute('aria-modal', 'true');
  document.body.style.overflow = 'hidden';

  const firstFocusable = modal.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (firstFocusable) firstFocusable.focus();

  on(document, 'keydown', handleModalKeydown);
};

/**
 * Fecha um modal pelo ID.
 * @param {string} modalId
 */
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.hidden = true;
  document.body.style.overflow = '';
  off(document, 'keydown', handleModalKeydown);
};

/**
 * Fecha modal ao pressionar Escape.
 * @param {KeyboardEvent} e
 */
const handleModalKeydown = (e) => {
  if (e.key !== 'Escape') return;
  const modal = qs('[aria-modal="true"]');
  if (modal) closeModal(modal.id);
};

/* ----------------------------------------
   FOOTER — ANO ATUAL
---------------------------------------- */

/**
 * Preenche o ano no rodapé.
 */
const initFooterYear = () => {
  const el = qs('#footerAno');
  if (el) el.textContent = currentYear();
};

/* ----------------------------------------
   NAVBAR — LINK ATIVO
---------------------------------------- */

/**
 * Marca o link da navbar correspondente à seção visível.
 */
const initNavbarActiveLink = () => {
  const sections = qsa('section[id]');
  const navLinks = qsa('.up-navbar a[href^="#"], .up-footer__nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const matches = link.getAttribute('href') === '#' + id;
          link.classList.toggle('is-active', matches);
          link.setAttribute('aria-current', matches ? 'true' : 'false');
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
};
