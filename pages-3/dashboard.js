/* ==========================================
   DASHBOARD
========================================== */

/* ----------------------------------------
   DADOS DOS 21 DIAS
---------------------------------------- */

const DAYS_DATA = [
  {
    day: 1,
    title: 'O primeiro passo',
    text: 'Hoje é sobre começar. Caminhe por 15 minutos no ritmo que for confortável. Não precisa ser rápido. Só precisa acontecer.',
    checklist: [
      'Separei um horário para a missão de hoje',
      'Completei os 15 minutos de caminhada',
      'Tomei água suficiente durante o dia',
    ],
    recipe: {
      id: 'dia01-vitamina-verde',
      title: 'Vitamina verde energizante',
      desc: 'Espinafre, banana, gengibre e água de coco. Pronto em 5 minutos, rico em potássio e magnésio.',
      ingredients: ['1 xícara de espinafre fresco', '1 banana madura', '1 colher de chá de gengibre ralado', '200 ml de água de coco'],
      time: '5 min',
      tag: 'Anti-inflamatória',
    },
  },
  {
    day: 2,
    title: 'Respirar com intenção',
    text: 'Hoje o foco é a respiração. 10 minutos de respiração diafragmática profunda melhoram a oxigenação e reduzem o cortisol.',
    checklist: [
      'Encontrei um lugar tranquilo para praticar',
      'Completei 10 minutos de respiração profunda',
      'Percebi como meu corpo se sentiu depois',
    ],
    recipe: {
      id: 'dia02-cha-camomila',
      title: 'Chá de camomila com mel',
      desc: 'Camomila seca e mel puro. Antiespasmódico natural, ideal para reduzir a tensão muscular do dia.',
      ingredients: ['2 colheres de chá de camomila seca', '1 colher de chá de mel puro', '300 ml de água quente'],
      time: '5 min',
      tag: 'Relaxante',
    },
  },
  {
    day: 3,
    title: 'Mobilidade matinal',
    text: 'Cinco minutos de mobilidade articular ao acordar reduzem a rigidez e preparam o corpo para o dia. Simples e transformador.',
    checklist: [
      'Fiz a sequência de mobilidade ao acordar',
      'Prestei atenção nas articulações que estavam rígidas',
      'Repeti o movimento nos momentos de tensão',
    ],
    recipe: {
      id: 'dia03-smoothie-beterraba',
      title: 'Smoothie de beterraba e laranja',
      desc: 'Beterraba, laranja e gengibre. Rico em nitratos naturais que melhoram a circulação e o desempenho físico.',
      ingredients: ['1 beterraba pequena cozida', '1 laranja descascada', '1 rodela de gengibre', '150 ml de água'],
      time: '8 min',
      tag: 'Circulatória',
    },
  },
  {
    day: 4,
    title: 'Caminhada com presença',
    text: 'Caminhe por 15 minutos prestando atenção no ambiente ao redor. Sem fone, sem celular. Apenas você e o movimento.',
    checklist: [
      'Deixei o celular para trás durante a caminhada',
      'Completei os 15 minutos com atenção plena',
      'Notei três coisas no ambiente que não costumava ver',
    ],
    recipe: {
      id: 'dia04-agua-limon-gengibre',
      title: 'Água detox de limão e gengibre',
      desc: 'Limão, gengibre e hortelã. Hidratação com função anti-inflamatória e digestiva para começar o dia.',
      ingredients: ['Suco de 1 limão', '1 rodela de gengibre fresco', 'Folhas de hortelã', '500 ml de água'],
      time: '3 min',
      tag: 'Detox',
    },
  },
  {
    day: 5,
    title: 'Força do core',
    text: 'Três exercícios de estabilização do core — prancha, ponte e abdominal isométrico — 20 segundos cada. Sem impacto, máximo benefício.',
    checklist: [
      'Fiz os três exercícios de core',
      'Mantive a respiração constante durante os exercícios',
      'Descansai o tempo necessário entre as séries',
    ],
    recipe: {
      id: 'dia05-omelete-espinafre',
      title: 'Omelete de espinafre e cúrcuma',
      desc: 'Ovos, espinafre e cúrcuma. Rico em proteína e curcumina — poderoso anti-inflamatório natural.',
      ingredients: ['2 ovos', '1 xícara de espinafre', '1 colher de chá de cúrcuma', 'Sal e pimenta a gosto'],
      time: '10 min',
      tag: 'Rica em proteína',
    },
  },
  {
    day: 6,
    title: 'Descanso ativo',
    text: 'Hoje é dia de descanso ativo — uma caminhada leve de 10 minutos e alongamento suave. O corpo cresce no repouso.',
    checklist: [
      'Fiz a caminhada leve de 10 minutos',
      'Realizei o alongamento de 5 minutos',
      'Dormi pelo menos 7 horas essa noite',
    ],
    recipe: {
      id: 'dia06-cha-hibisco',
      title: 'Chá de hibisco gelado',
      desc: 'Hibisco seco com hortelã e mel. Rico em antocianinas com propriedades anti-inflamatórias e antioxidantes.',
      ingredients: ['2 colheres de chá de hibisco seco', 'Folhas de hortelã', '1 colher de chá de mel', '400 ml de água quente (para gelar)'],
      time: '5 min',
      tag: 'Antioxidante',
    },
  },
  {
    day: 7,
    title: 'Uma semana inteira',
    text: 'Você chegou ao fim da primeira semana. Hoje é dia de celebrar — e de caminhar por 20 minutos com um sorriso no rosto.',
    checklist: [
      'Completei os 20 minutos de caminhada',
      'Refleti sobre como me sinto comparado ao dia 1',
      'Compartilhei minha conquista com alguém próximo',
    ],
    recipe: {
      id: 'dia07-bowl-iogurte',
      title: 'Bowl de iogurte com aveia e frutas',
      desc: 'Iogurte natural, aveia, banana e mel. Proteína e carboidrato para repor energia após a primeira semana ativa.',
      ingredients: ['150 g de iogurte natural', '3 colheres de aveia em flocos', '1 banana fatiada', '1 colher de chá de mel'],
      time: '8 min',
      tag: 'Rica em proteína',
    },
  },
  {
    day: 8,
    title: 'Subindo a intensidade',
    text: 'Semana 2 começa. Hoje: 20 minutos de caminhada com 3 intervalos de 1 minuto em ritmo ligeiramente mais acelerado.',
    checklist: [
      'Completei os 20 minutos de caminhada',
      'Realizei os 3 intervalos mais intensos',
      'Hidratei antes, durante e após o exercício',
    ],
    recipe: {
      id: 'dia08-vitamina-abacate',
      title: 'Vitamina de abacate com cacau',
      desc: 'Abacate, cacau em pó, banana e leite. Gorduras boas e flavonoides para recuperação muscular.',
      ingredients: ['1/2 abacate maduro', '1 colher de sopa de cacau em pó', '1 banana', '200 ml de leite ou bebida vegetal'],
      time: '5 min',
      tag: 'Recuperação',
    },
  },
  {
    day: 9,
    title: 'Equilíbrio e postura',
    text: 'Exercícios de equilíbrio em apoio unipodal — 30 segundos em cada perna, 3 séries. Ativam músculos estabilizadores profundos.',
    checklist: [
      'Realizei os exercícios de equilíbrio',
      'Mantive o olhar fixo em um ponto para me estabilizar',
      'Notei qual lado estava mais fraco',
    ],
    recipe: {
      id: 'dia09-salada-quinoa',
      title: 'Salada de quinoa com legumes',
      desc: 'Quinoa, pepino, tomate e azeite. Proteína completa com todos os aminoácidos essenciais para o músculo.',
      ingredients: ['1/2 xícara de quinoa cozida', '1/2 pepino picado', '1 tomate picado', 'Azeite, sal e limão a gosto'],
      time: '15 min',
      tag: 'Proteína completa',
    },
  },
  {
    day: 10,
    title: 'Dois dígitos',
    text: 'Dia 10. Seu corpo já criou os primeiros padrões neurológicos do hábito. Hoje: 20 minutos de caminhada contínua em bom ritmo.',
    checklist: [
      'Completei os 20 minutos sem pausas',
      'Mantive um ritmo confortável mas constante',
      'Escrevi no diário como me senti',
    ],
    recipe: {
      id: 'dia10-sopa-lentilha',
      title: 'Sopa de lentilha com cúrcuma',
      desc: 'Lentilha, cenoura, cúrcuma e alho. Ferro, proteína vegetal e curcumina em uma refeição simples e nutritiva.',
      ingredients: ['1 xícara de lentilha', '1 cenoura picada', '1 colher de chá de cúrcuma', '2 dentes de alho', 'Sal e pimenta'],
      time: '20 min',
      tag: 'Anti-inflamatória',
    },
  },
  {
    day: 11,
    title: 'Força dos membros inferiores',
    text: 'Agachamento livre, avanço e elevação de panturrilha — 3 séries de 10 repetições. Ative os maiores grupos musculares do corpo.',
    checklist: [
      'Completei as 3 séries dos exercícios',
      'Mantive os joelhos alinhados com os pés',
      'Senti a ativação muscular corretamente',
    ],
    recipe: {
      id: 'dia11-cha-verde-hortelã',
      title: 'Chá verde com hortelã e limão',
      desc: 'Chá verde, hortelã fresca e limão. Catequinas antioxidantes que aceleram a recuperação celular pós-exercício.',
      ingredients: ['1 sachê de chá verde', 'Folhas de hortelã', 'Suco de 1/2 limão', '300 ml de água quente'],
      time: '4 min',
      tag: 'Antioxidante',
    },
  },
  {
    day: 12,
    title: 'Caminhada progressiva',
    text: 'Hoje: 25 minutos de caminhada com inclinação moderada ou terreno variado. O desafio do ambiente ativa mais músculos.',
    checklist: [
      'Escolhi um percurso com variação de terreno',
      'Completei os 25 minutos sem parar',
      'Notei a diferença na intensidade percebida',
    ],
    recipe: {
      id: 'dia12-panqueca-aveia',
      title: 'Panqueca de aveia e banana',
      desc: 'Aveia, banana e ovo. Carboidrato de baixo índice glicêmico com proteína para energia sustentada.',
      ingredients: ['3 colheres de aveia em flocos', '1 banana amassada', '1 ovo', 'Canela a gosto'],
      time: '10 min',
      tag: 'Energia sustentada',
    },
  },
  {
    day: 13,
    title: 'Descanso consciente',
    text: 'Descanso ativo com foco em sono. Pesquisas do Instituto Nacional de Sono mostram que dormir 7-9 horas melhora o rendimento físico em 21%.',
    checklist: [
      'Dormi ao menos 7 horas na noite passada',
      'Fiz a caminhada leve de 10 minutos',
      'Evitei telas 30 minutos antes de dormir',
    ],
    recipe: {
      id: 'dia13-cha-passionflower',
      title: 'Chá de maracujá com mel',
      desc: 'Maracujá (folha ou polpa) e mel. Passiflora com propriedades ansiolíticas naturais para melhorar a qualidade do sono.',
      ingredients: ['2 colheres de chá de folha de maracujá seca', '1 colher de chá de mel', '300 ml de água quente'],
      time: '5 min',
      tag: 'Sono',
    },
  },
  {
    day: 14,
    title: 'Duas semanas',
    text: 'Quatorze dias. Seu corpo já é diferente do que era no dia 1, mesmo que você ainda não veja no espelho. Continue.',
    checklist: [
      'Realizei 25 minutos de atividade à minha escolha',
      'Reli meu diário dos primeiros dias',
      'Reconheci pelo menos uma mudança positiva',
    ],
    recipe: {
      id: 'dia14-cha-dourado',
      title: 'Chá dourado com leite vegetal',
      desc: 'Cúrcuma, canela, gengibre e leite de amêndoas. Poderoso anti-inflamatório para o fim do dia após duas semanas de movimento.',
      ingredients: ['1 colher de chá de cúrcuma', '1 pitada de canela', '1 rodela de gengibre', '250 ml de leite de amêndoas'],
      time: '6 min',
      tag: 'Anti-inflamatória',
    },
  },
  {
    day: 15,
    title: 'Semana da transformação',
    text: 'Última semana. Hoje: 30 minutos de caminhada em ritmo constante. Você está a 7 dias de completar algo que mudou sua relação com o movimento.',
    checklist: [
      'Completei os 30 minutos de caminhada',
      'Mantive o ritmo constante do início ao fim',
      'Estabeleci o horário dos próximos 7 dias',
    ],
    recipe: {
      id: 'dia15-granola-fruta',
      title: 'Granola artesanal com frutas',
      desc: 'Aveia, mel, castanhas e frutas frescas. Fibras, gorduras boas e micronutrientes para sustentar a semana mais intensa.',
      ingredients: ['1/2 xícara de aveia em flocos', '1 colher de sopa de mel', '2 colheres de castanhas picadas', 'Frutas da estação a gosto'],
      time: '12 min',
      tag: 'Energia',
    },
  },
  {
    day: 16,
    title: 'Treino de força completo',
    text: 'Agachamento, flexão modificada, ponte glútea e prancha — 3 séries de 12 repetições cada. Todos os grupos musculares em um único treino.',
    checklist: [
      'Completei todas as 4 séries de exercícios',
      'Descansai 60 segundos entre as séries',
      'Hidratei adequadamente durante o treino',
    ],
    recipe: {
      id: 'dia16-frango-legumes',
      title: 'Bowl de frango com legumes assados',
      desc: 'Frango, abobrinha, cenoura e pimentão assados com azeite e ervas. Proteína magra e micronutrientes para recuperação.',
      ingredients: ['150 g de frango grelhado', '1 abobrinha fatiada', '1 cenoura fatiada', 'Azeite, alho e ervas finas'],
      time: '25 min',
      tag: 'Rica em proteína',
    },
  },
  {
    day: 17,
    title: 'Cardio e consciência',
    text: '30 minutos de caminhada com variação de ritmo — 5 minutos leve, 3 minutos moderado, alternar. Treino intervalado de baixo impacto.',
    checklist: [
      'Completei os 30 minutos com variação de ritmo',
      'Percebi a diferença de esforço entre os ritmos',
      'Registrei como me senti no diário',
    ],
    recipe: {
      id: 'dia17-smoothie-frutas-vermelhas',
      title: 'Smoothie de frutas vermelhas',
      desc: 'Morango, amora ou mirtilo com iogurte. Antocianinas que reduzem a inflamação muscular pós-exercício.',
      ingredients: ['1 xícara de frutas vermelhas (frescas ou congeladas)', '100 g de iogurte natural', '1 colher de mel', '100 ml de água'],
      time: '5 min',
      tag: 'Recuperação',
    },
  },
  {
    day: 18,
    title: 'Flexibilidade e leveza',
    text: 'Sequência de alongamento completo — 8 posições de 30 segundos cada. Flexibilidade é saúde articular e prevenção de lesões.',
    checklist: [
      'Realizei as 8 posições de alongamento',
      'Mantive a respiração calma em cada posição',
      'Não forcei além do ponto de tensão confortável',
    ],
    recipe: {
      id: 'dia18-salada-folhas',
      title: 'Salada de folhas com sementes',
      desc: 'Rúcula, espinafre, semente de chia, abóbora e limão. Magnésio e ômega-3 vegetais para a saúde muscular.',
      ingredients: ['2 xícaras de folhas verdes mistas', '1 colher de sopa de chia', '1 colher de sopa de semente de abóbora', 'Azeite e limão'],
      time: '8 min',
      tag: 'Anti-inflamatória',
    },
  },
  {
    day: 19,
    title: 'Perto do fim',
    text: 'Você está a dois dias de completar os 21 dias. Hoje: treino livre — escolha a atividade que mais gostou nas últimas semanas.',
    checklist: [
      'Escolhi minha atividade favorita das últimas semanas',
      'Pratiquei por pelo menos 25 minutos',
      'Pensei em como quero continuar após o dia 21',
    ],
    recipe: {
      id: 'dia19-tapioca-coco',
      title: 'Tapioca com coco e mel',
      desc: 'Tapioca, coco ralado e mel. Carboidrato de rápida absorção para repor energia após o treino livre.',
      ingredients: ['3 colheres de sopa de goma de tapioca', '2 colheres de coco ralado seco', '1 colher de chá de mel'],
      time: '8 min',
      tag: 'Energia',
    },
  },
  {
    day: 20,
    title: 'Penúltimo dia',
    text: '30 minutos de caminhada no percurso que você mais gostou durante o programa. Uma última vez antes do dia final.',
    checklist: [
      'Percorri meu trajeto favorito do programa',
      'Completei os 30 minutos com presença total',
      'Preparei minha reflexão para o dia 21',
    ],
    recipe: {
      id: 'dia20-acai-granola',
      title: 'Tigela de açaí com granola',
      desc: 'Açaí, banana, granola e mel. Antioxidantes e energia para a reta final do programa.',
      ingredients: ['100 g de polpa de açaí', '1 banana fatiada', '2 colheres de granola', '1 colher de mel'],
      time: '5 min',
      tag: 'Antioxidante',
    },
  },
  {
    day: 21,
    title: 'Você chegou',
    text: 'Vinte e um dias. Você fez isso. Hoje não existe treino obrigatório — apenas o convite de se mover da forma que sentir vontade. Você merece.',
    checklist: [
      'Celebrei minha conquista de 21 dias',
      'Escrevi sobre como me sinto hoje vs. o Dia 1',
      'Decidi como quero continuar minha jornada',
    ],
    recipe: {
      id: 'dia21-bolo-banana-aveia',
      title: 'Bolo de banana e aveia (sem farinha)',
      desc: 'Banana, aveia, ovo e mel. Uma celebração nutritiva para o último dia — simples, gostoso e sem culpa.',
      ingredients: ['2 bananas maduras', '1 xícara de aveia em flocos', '2 ovos', '2 colheres de mel', '1 colher de chá de canela'],
      time: '30 min',
      tag: 'Celebração',
    },
  },
];

/* ----------------------------------------
   DIA ATUAL
---------------------------------------- */

/**
 * Retorna o número do dia atual do programa (1–21).
 * Usa o próximo dia não concluído como referência.
 * @returns {number}
 */
const getCurrentDay = () => clamp(nextAvailableDay(), 1, 21);

/**
 * Retorna os dados do dia atual.
 * @returns {object}
 */
const getCurrentDayData = () => DAYS_DATA[getCurrentDay() - 1];

/* ----------------------------------------
   SAUDAÇÃO
---------------------------------------- */

/**
 * Preenche a saudação com base no horário do dia.
 */
const initGreeting = () => {
  const hour = new Date().getHours();
  const timeEl = qs('#greetingTime');
  if (!timeEl) return;

  if (hour < 12)       timeEl.textContent = 'Bom dia';
  else if (hour < 18)  timeEl.textContent = 'Boa tarde';
  else                 timeEl.textContent = 'Boa noite';
};

/* ----------------------------------------
   STREAK
---------------------------------------- */

/**
 * Calcula a sequência de dias consecutivos concluídos.
 * @returns {number}
 */
const calcStreak = () => {
  let streak = 0;
  const currentDay = getCurrentDay();
  for (let d = currentDay - 1; d >= 1; d--) {
    if (isDayDone(d)) streak++;
    else break;
  }
  return streak;
};

/**
 * Renderiza a contagem de streak.
 */
const renderStreak = () => {
  const el = qs('#streakNumber');
  if (el) el.textContent = calcStreak();
};

/* ----------------------------------------
   BARRA DE PROGRESSO
---------------------------------------- */

/**
 * Atualiza todos os elementos de progresso.
 */
const renderProgress = () => {
  const pct = calcProgress();
  const done = totalDaysDone();

  const fill      = qs('#progressFill');
  const pctEl     = qs('#progressPct');
  const bar       = qs('#progressBar');
  const subDone   = qs('#progressDaysDone');

  if (fill)    { fill.style.width = pct + '%'; }
  if (bar)     { bar.setAttribute('aria-valuenow', pct); }
  if (pctEl)   { pctEl.textContent = pct + '%'; }
  if (subDone) { subDone.textContent = done; }
};

/* ----------------------------------------
   NAVBAR — DIA ATUAL
---------------------------------------- */

/**
 * Preenche o indicador de dia na navbar.
 */
const renderNavbarDay = () => {
  const numEl = qs('#navbarDayNumber');
  if (numEl) numEl.textContent = getCurrentDay();
};

/* ----------------------------------------
   MISSÃO DO DIA
---------------------------------------- */

/**
 * Renderiza a missão do dia no card.
 */
const renderMission = () => {
  const data = getCurrentDayData();
  const day  = getCurrentDay();

  const badgeEl  = qs('#missionDayBadge');
  const titleEl  = qs('#missionTitle') || qs('.up-dash-mission__title');
  const textEl   = qs('#missionText');
  const linkEl   = qs('#missionDayLink');

  if (badgeEl)  badgeEl.textContent = 'Dia ' + day;
  if (titleEl)  titleEl.textContent = data.title;
  if (textEl)   textEl.textContent  = data.text;
  if (linkEl) {
    const pad = String(day).padStart(2, '0');
    linkEl.href = 'dia' + pad + '.html';
    linkEl.setAttribute('aria-label', 'Ir para a página completa do Dia ' + day);
  }

  renderChecklist(day, data.checklist);
  renderMissionStatus(day);
};

/**
 * Renderiza os itens do checklist da missão.
 * @param {number} day
 * @param {string[]} items
 */
const renderChecklist = (day, items) => {
  const container = qs('#missionChecklist');
  if (!container) return;

  const saved = getChecklist(day);
  container.innerHTML = '';

  items.forEach((label, idx) => {
    const checkId  = 'check-' + (idx + 1);
    const dataId   = String(idx + 1);
    const isChecked = saved.includes(dataId);

    const labelEl = document.createElement('label');
    labelEl.className = 'up-checklist-item';
    labelEl.setAttribute('for', checkId);

    labelEl.innerHTML = `
      <input
        class="up-checklist-item__input sr-only"
        type="checkbox"
        id="${checkId}"
        data-check="${dataId}"
        ${isChecked ? 'checked' : ''}
        aria-label="${label}"
      />
      <span class="up-checklist-item__box" aria-hidden="true">
        <svg class="up-checklist-item__check" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="12"
            stroke-dashoffset="${isChecked ? 0 : 12}"
          />
        </svg>
      </span>
      <span class="up-checklist-item__label">${label}</span>
    `;

    container.appendChild(labelEl);
  });

  initChecklistEvents(day);
};

/**
 * Inicializa eventos dos checkboxes do checklist.
 * @param {number} day
 */
const initChecklistEvents = (day) => {
  const inputs = qsa('#missionChecklist input[type="checkbox"]');
  inputs.forEach((input) => {
    on(input, 'change', () => {
      const checked = qsa('#missionChecklist input[type="checkbox"]:checked')
        .map((el) => el.getAttribute('data-check'));
      saveChecklist(day, checked);

      const path = input.nextElementSibling?.querySelector('path');
      if (path) {
        path.style.strokeDashoffset = input.checked ? '0' : '12';
      }
    });
  });
};

/**
 * Atualiza o ícone de status da missão (concluída ou não).
 * @param {number} day
 */
const renderMissionStatus = (day) => {
  const statusEl = qs('#missionStatus');
  if (!statusEl) return;

  if (isDayDone(day)) {
    statusEl.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-label="Dia concluído">
        <circle cx="11" cy="11" r="9.5" fill="var(--color-accent-bg)" stroke="var(--color-accent)" stroke-width="1.4"/>
        <path d="M7 11l3 3 5-5" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    statusEl.classList.add('is-done');
  }
};

/* ----------------------------------------
   BOTÃO — MARCAR DIA COMO CONCLUÍDO
---------------------------------------- */

/**
 * Inicializa o botão de conclusão do dia.
 */
const initMissionDoneBtn = () => {
  const btn = qs('#missionDoneBtn');
  if (!btn) return;

  const day = getCurrentDay();

  if (isDayDone(day)) {
    btn.textContent = 'Dia concluído ✓';
    btn.disabled = true;
  }

  on(btn, 'click', () => {
    markDayDone(day);
    btn.textContent = 'Dia concluído ✓';
    btn.disabled = true;
    renderMissionStatus(day);
    renderProgress();
    renderStreak();
    renderCalendar();
    showToast('Parabéns! Dia ' + day + ' concluído.', 'success');
  });
};

/* ----------------------------------------
   CALENDÁRIO
---------------------------------------- */

/**
 * Renderiza o calendário de 21 dias.
 */
const renderCalendar = () => {
  const grid    = qs('#dashCalendar');
  const badgeEl = qs('#calendarBadge');
  if (!grid) return;

  const currentDay = getCurrentDay();
  const done       = totalDaysDone();

  if (badgeEl) badgeEl.textContent = done + ' / 21';

  grid.innerHTML = '';

  for (let d = 1; d <= 21; d++) {
    const pad     = String(d).padStart(2, '0');
    const isActive = d === currentDay;
    const isDone   = isDayDone(d);
    const isLocked = d > currentDay && !isDone;

    const el = document.createElement(isLocked ? 'span' : 'a');

    if (!isLocked) {
      el.href = 'dia' + pad + '.html';
    }

    el.className = [
      'up-dash-cal-day',
      isDone    ? 'up-dash-cal-day--done'   : '',
      isActive  ? 'up-dash-cal-day--active' : '',
      isLocked  ? 'up-dash-cal-day--locked' : '',
    ].filter(Boolean).join(' ');

    el.setAttribute('role', 'gridcell');
    el.setAttribute(
      'aria-label',
      'Dia ' + d + (isDone ? ' — concluído' : isActive ? ' — hoje' : '')
    );

    if (isActive) el.setAttribute('aria-current', 'date');
    if (isDone)   el.setAttribute('aria-pressed', 'true');

    el.textContent = d;
    grid.appendChild(el);
  }
};

/* ----------------------------------------
   RECEITA DO DIA
---------------------------------------- */

/**
 * Renderiza a receita do dia no card.
 */
const renderRecipe = () => {
  const data   = getCurrentDayData();
  const recipe = data.recipe;

  const titleEl       = qs('#recipeTitle') || qs('.up-dash-recipe__title');
  const descEl        = qs('#recipeDesc');
  const ingredientsEl = qs('#recipeIngredients');
  const timeEl        = qs('.up-dash-recipe__time');
  const tagEl         = qs('#recipeTag');
  const favBtn        = qs('#recipeFavBtn');

  if (titleEl)  titleEl.textContent = recipe.title;
  if (descEl)   descEl.textContent  = recipe.desc;
  if (tagEl)    tagEl.textContent   = recipe.tag;

  if (timeEl) {
    timeEl.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>
        <path d="M7 4v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
      ${recipe.time}
    `;
  }

  if (ingredientsEl) {
    ingredientsEl.innerHTML = recipe.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join('');
  }

  if (favBtn) {
    const pressed = isFavorite(recipe.id);
    favBtn.setAttribute('aria-pressed', String(pressed));
    favBtn.setAttribute('aria-label', pressed ? 'Remover dos favoritos' : 'Adicionar aos favoritos');

    on(favBtn, 'click', () => {
      toggleFavorite(recipe.id);
      const nowFav = isFavorite(recipe.id);
      favBtn.setAttribute('aria-pressed', String(nowFav));
      favBtn.setAttribute('aria-label', nowFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
      showToast(nowFav ? 'Receita salva nos favoritos.' : 'Receita removida dos favoritos.', 'success');
    });
  }
};

/* ----------------------------------------
   DIÁRIO
---------------------------------------- */

/**
 * Inicializa o diário — emojis, textarea e salvar.
 */
const initDiary = () => {
  const day        = getCurrentDay();
  const saved      = getDiaryEntry(day);
  const emojiBtns  = qsa('#diaryEmojis .up-diary-emoji');
  const textarea   = qs('#diaryText');
  const saveBtn    = qs('#diarySaveBtn');
  const savedLabel = qs('#diarySavedLabel');
  const badgeEl    = qs('#diaryDayBadge');

  if (badgeEl) badgeEl.textContent = 'Dia ' + day;

  let selectedHumor = saved ? saved.humor : null;

  if (saved) {
    if (textarea) textarea.value = saved.texto || '';
    emojiBtns.forEach((btn) => {
      const isSelected = btn.getAttribute('data-humor') === saved.humor;
      btn.setAttribute('aria-pressed', String(isSelected));
      if (isSelected) btn.classList.add('is-selected');
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
      saveDiaryEntry(day, { humor: selectedHumor, texto });

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
   MODAL DE PERFIL
---------------------------------------- */

/**
 * Inicializa o modal de perfil.
 */
const initProfileModal = () => {
  const openBtn  = qs('#profileBtn');
  const closeBtn = qs('#profileModalClose');
  const overlay  = qs('#profileModalOverlay');

  if (openBtn) {
    on(openBtn, 'click', () => {
      renderProfileModal();
      openModal('profileModal');
    });
  }

  if (closeBtn) {
    on(closeBtn, 'click', () => closeModal('profileModal'));
  }

  if (overlay) {
    on(overlay, 'click', () => closeModal('profileModal'));
  }
};

/**
 * Preenche os dados do modal de perfil.
 */
const renderProfileModal = () => {
  const done    = totalDaysDone();
  const streak  = calcStreak();
  const pct     = calcProgress();

  const doneEl   = qs('#modalDaysDone');
  const streakEl = qs('#modalStreak');
  const pctEl    = qs('#modalPct');
  const fillEl   = qs('#modalProgressFill');
  const barEl    = qs('#modalProgressBar');

  if (doneEl)   doneEl.textContent   = done;
  if (streakEl) streakEl.textContent = streak;
  if (pctEl)    pctEl.textContent    = pct + '%';
  if (fillEl)   fillEl.style.width   = pct + '%';
  if (barEl)    barEl.setAttribute('aria-valuenow', pct);
};

/* ----------------------------------------
   INICIALIZAÇÃO
---------------------------------------- */

onReady(() => {
  initGreeting();
  renderNavbarDay();
  renderProgress();
  renderStreak();
  renderMission();
  initMissionDoneBtn();
  renderCalendar();
  renderRecipe();
  initDiary();
  initProfileModal();
  initNavbarScroll();
  initAccordions();
});
