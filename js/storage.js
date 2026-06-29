/* ==========================================
   STORAGE
========================================== */

const STORAGE_PREFIX = 'recomeco_';

/**
 * Salva um valor no localStorage com prefixo.
 * @param {string} key
 * @param {*} value
 */
const storageSet = (key, value) => {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.warn('[Storage] Erro ao salvar:', key, e);
  }
};

/**
 * Lê um valor do localStorage com prefixo.
 * @param {string} key
 * @param {*} [fallback=null]
 * @returns {*}
 */
const storageGet = (key, fallback = null) => {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item !== null ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn('[Storage] Erro ao ler:', key, e);
    return fallback;
  }
};

/**
 * Remove um valor do localStorage com prefixo.
 * @param {string} key
 */
const storageRemove = (key) => {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
  } catch (e) {
    console.warn('[Storage] Erro ao remover:', key, e);
  }
};

/**
 * Verifica se localStorage está disponível.
 * @returns {boolean}
 */
const storageAvailable = () => {
  try {
    const test = '__recomeco_test__';
    localStorage.setItem(test, '1');
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

/* ----------------------------------------
   CHAVES DO PROGRESSO
---------------------------------------- */

const KEYS = {
  CHECKLIST:  'checklist',
  CALENDAR:   'calendar',
  DIARY:      'diary',
  FAVORITES:  'favorites',
  PROGRESS:   'progress',
  QUIZ:       'quiz_result',
};

/**
 * Marca um dia como concluído no calendário.
 * @param {number} day — 1 a 21
 */
const markDayDone = (day) => {
  const calendar = storageGet(KEYS.CALENDAR, {});
  calendar[day] = { done: true, date: new Date().toISOString() };
  storageSet(KEYS.CALENDAR, calendar);
};

/**
 * Verifica se um dia está concluído.
 * @param {number} day
 * @returns {boolean}
 */
const isDayDone = (day) => {
  const calendar = storageGet(KEYS.CALENDAR, {});
  return !!(calendar[day] && calendar[day].done);
};

/**
 * Retorna o total de dias concluídos.
 * @returns {number}
 */
const totalDaysDone = () => {
  const calendar = storageGet(KEYS.CALENDAR, {});
  return Object.values(calendar).filter((d) => d.done).length;
};

/**
 * Salva entrada do diário para um dia.
 * @param {number} day
 * @param {{ humor: string, texto: string }} entry
 */
const saveDiaryEntry = (day, entry) => {
  const diary = storageGet(KEYS.DIARY, {});
  diary[day] = { ...entry, savedAt: new Date().toISOString() };
  storageSet(KEYS.DIARY, diary);
};

/**
 * Lê entrada do diário para um dia.
 * @param {number} day
 * @returns {{ humor: string, texto: string }|null}
 */
const getDiaryEntry = (day) => {
  const diary = storageGet(KEYS.DIARY, {});
  return diary[day] || null;
};

/**
 * Salva o estado de checklist de um dia.
 * @param {number} day
 * @param {string[]} checked — array de IDs marcados
 */
const saveChecklist = (day, checked) => {
  const checklists = storageGet(KEYS.CHECKLIST, {});
  checklists[day] = checked;
  storageSet(KEYS.CHECKLIST, checklists);
};

/**
 * Lê o estado de checklist de um dia.
 * @param {number} day
 * @returns {string[]}
 */
const getChecklist = (day) => {
  const checklists = storageGet(KEYS.CHECKLIST, {});
  return checklists[day] || [];
};

/**
 * Alterna receita nos favoritos.
 * @param {string} recipeId
 */
const toggleFavorite = (recipeId) => {
  const favorites = storageGet(KEYS.FAVORITES, []);
  const idx = favorites.indexOf(recipeId);
  if (idx === -1) {
    favorites.push(recipeId);
  } else {
    favorites.splice(idx, 1);
  }
  storageSet(KEYS.FAVORITES, favorites);
};

/**
 * Verifica se uma receita é favorita.
 * @param {string} recipeId
 * @returns {boolean}
 */
const isFavorite = (recipeId) => {
  const favorites = storageGet(KEYS.FAVORITES, []);
  return favorites.includes(recipeId);
};

/**
 * Salva o resultado do quiz.
 * @param {string} value — 'a' | 'b' | 'c' | 'd'
 */
const saveQuizResult = (value) => {
  storageSet(KEYS.QUIZ, { value, savedAt: new Date().toISOString() });
};

/**
 * Lê o resultado do quiz.
 * @returns {{ value: string }|null}
 */
const getQuizResult = () => storageGet(KEYS.QUIZ, null);
