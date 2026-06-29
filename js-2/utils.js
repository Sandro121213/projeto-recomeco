/* ==========================================
   UTILS
========================================== */

/**
 * Seleciona um elemento do DOM.
 * @param {string} selector
 * @param {Element} [context=document]
 * @returns {Element|null}
 */
const qs = (selector, context = document) => context.querySelector(selector);

/**
 * Seleciona múltiplos elementos do DOM.
 * @param {string} selector
 * @param {Element} [context=document]
 * @returns {Element[]}
 */
const qsa = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

/**
 * Adiciona um event listener.
 * @param {Element|Window|Document} el
 * @param {string} event
 * @param {Function} handler
 * @param {object} [options={}]
 */
const on = (el, event, handler, options = {}) => {
  if (!el) return;
  el.addEventListener(event, handler, options);
};

/**
 * Remove um event listener.
 * @param {Element|Window|Document} el
 * @param {string} event
 * @param {Function} handler
 */
const off = (el, event, handler) => {
  if (!el) return;
  el.removeEventListener(event, handler);
};

/**
 * Executa callback quando o DOM estiver pronto.
 * @param {Function} callback
 */
const onReady = (callback) => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

/**
 * Debounce: adia execução até inatividade.
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Clamp: limita valor entre min e max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * Retorna o ano atual.
 * @returns {number}
 */
const currentYear = () => new Date().getFullYear();
