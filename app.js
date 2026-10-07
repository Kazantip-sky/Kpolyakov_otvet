// Theme
const themePills = document.querySelectorAll('.theme-pill');
const html = document.documentElement;
function applyTheme(theme) {
  if (theme === 'auto') {
    html.setAttribute('data-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  } else {
    html.setAttribute('data-theme', theme);
  }
  localStorage.setItem('theme', theme);
  themePills.forEach(p => p.classList.toggle('active', p.dataset.theme === theme));
}
applyTheme(localStorage.getItem('theme') || 'auto');
themePills.forEach(p => p.addEventListener('click', () => applyTheme(p.dataset.theme)));
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'auto') applyTheme('auto');
});

// Drawer
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
function openDrawer() { drawer.classList.add('open'); backdrop.classList.add('show'); }
function closeDrawer() { drawer.classList.remove('open'); backdrop.classList.remove('show'); }
document.getElementById('menuBtn').addEventListener('click', openDrawer);
document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);

// Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.closest('.accordion')?.classList.toggle('open');
  });
});
document.querySelector('[data-acc="bu"]')?.closest('.accordion')?.classList.add('open');

// Settings
const settingsModal = document.getElementById('settingsModal');
document.getElementById('settingsBtn').addEventListener('click', () => settingsModal.classList.add('show'));
document.getElementById('closeSettings').addEventListener('click', () => settingsModal.classList.remove('show'));
settingsModal.addEventListener('click', e => { if (e.target === settingsModal) settingsModal.classList.remove('show'); });

// Tests with answers
const tests = {
  'bu11-6': {
    title: '6. Диаграммы в электронных таблицах (ЕГЭ)',
    answers: [
      { num: 1, value: '7', label: '' },
      { num: 2, value: '5', label: '' },
      { num: 3, value: '2', label: '' },
      { num: 4, value: '7', label: '' },
      { num: 5, value: '6', label: '' },
      { num: 6, value: '3', label: '' },
      { num: 7, value: '7', label: '' }
    ],
    explanations: [
      { num: 1, title: '', text: 'Ответ: <strong>7</strong>' },
      { num: 2, title: '', text: 'Ответ: <strong>5</strong>' },
      { num: 3, title: '', text: 'Ответ: <strong>2</strong>' },
      { num: 4, title: '', text: 'Ответ: <strong>7</strong>' },
      { num: 5, title: '', text: 'Ответ: <strong>6</strong>' },
      { num: 6, title: '', text: 'Ответ: <strong>3</strong>' },
      { num: 7, title: '', text: 'Ответ: <strong>7</strong>' }
    ]
  },

  'u11-9': {
    title: '9. Задачи на графы',
    answers: [
      { num: 1, value: '12', label: '' },
      { num: 2, value: '14', label: '' },
      { num: 3, value: '11', label: '' },
      { num: 4, value: '18', label: '' },
      { num: 5, value: '9', label: '' },
      { num: 6, value: '6', label: '' },
      { num: 7, value: '8', label: '' },
      { num: 8, value: '6', label: '' },
      { num: 9, value: '5', label: '' },
      { num: 10, value: '22', label: '' }
    ],
    explanations: [
      { num: 1, title: '', text: 'Ответ: <strong>12</strong>' },
      { num: 2, title: '', text: 'Ответ: <strong>14</strong>' },
      { num: 3, title: '', text: 'Ответ: <strong>11</strong>' },
      { num: 4, title: '', text: 'Ответ: <strong>18</strong>' },
      { num: 5, title: '', text: 'Ответ: <strong>9</strong>' },
      { num: 6, title: '', text: 'Ответ: <strong>6</strong>' },
      { num: 7, title: '', text: 'Ответ: <strong>8</strong>' },
      { num: 8, title: '', text: 'Ответ: <strong>6</strong>' },
      { num: 9, title: '', text: 'Ответ: <strong>5</strong>' },
      { num: 10, title: '', text: 'Ответ: <strong>22</strong>' }
    ]
  },
  'u11-8': {
    title: '8. Анализ моделей',
    answers: [
      { num: 1, value: '4', label: '12:15' },
      { num: 2, value: '2', label: '16:20' },
      { num: 3, value: '3', label: '11:40' },
      { num: 4, value: '1', label: '' },
      { num: 5, value: '1, 3', label: '' },
      { num: 6, value: '2', label: '' },
      { num: 7, value: '3', label: '' },
      { num: 8, value: '2', label: '' },
      { num: 9, value: '2', label: '' },
      { num: 10, value: '4', label: '' },
      { num: 11, value: '1', label: '' }
    ],
    explanations: [
      { num: 1, title: '', text: 'Правильный: <strong>4</strong> (12:15)' },
      { num: 2, title: '', text: 'Правильный: <strong>2</strong> (16:20)' },
      { num: 3, title: '', text: 'Правильный: <strong>3</strong> (11:40)' },
      { num: 4, title: '', text: 'Правильный: <strong>1</strong>' },
      { num: 5, title: '', text: 'Правильные: <strong>1, 3</strong>' },
      { num: 6, title: '', text: 'Правильный: <strong>2</strong>' },
      { num: 7, title: '', text: 'Правильный: <strong>3</strong>' },
      { num: 8, title: '', text: 'Правильный: <strong>2</strong>' },
      { num: 9, title: '', text: 'Правильный: <strong>2</strong>' },
      { num: 10, title: '', text: 'Правильный: <strong>4</strong>' },
      { num: 11, title: '', text: 'Правильный: <strong>1</strong>' }
    ]
  },

  'u11-10': {
    title: '10. Моделирование',
    answers: [
      { num: 1, value: '1, 2, 5', label: '' },
      { num: 2, value: '2, 3, 5', label: '' },
      { num: 3, value: '2, 3, 5', label: '' },
      { num: 4, value: '1, 2, 3, 4, 5', label: '' },
      { num: 5, value: 'вербальная', label: '' },
      { num: 6, value: 'имитационная', label: '' },
      { num: 7, value: 'вероятностная', label: '' },
      { num: 8, value: 'динамическая', label: '' },
      { num: 9, value: 'тестирование', label: '' },
      { num: 10, value: 'алгоритм', label: '' },
      { num: 11, value: '1, 4, 5', label: '' },
      { num: 12, value: '2', label: '' },
      { num: 13, value: '3, 4', label: '' },
      { num: 14, value: '3', label: '' },
      { num: 15, value: '2', label: '' },
      { num: 16, value: '3', label: '' }
    ],
    explanations: [
      { num: 1, title: '', text: `Правильные: <strong>1, 2, 5</strong>` },
      { num: 2, title: '', text: `Правильные: <strong>2, 3, 5</strong>` },
      { num: 3, title: '', text: `Правильные: <strong>2, 3, 5</strong>` },
      { num: 4, title: '', text: `Правильные: <strong>1, 2, 3, 4, 5</strong> (все пары)` },
      { num: 5, title: '', text: `Ответ: <strong>вербальная</strong>` },
      { num: 6, title: '', text: `Ответ: <strong>имитационная</strong>` },
      { num: 7, title: '', text: `Ответ: <strong>вероятностная</strong> (допускается «стохастическая»)` },
      { num: 8, title: '', text: `Ответ: <strong>динамическая</strong>` },
      { num: 9, title: '', text: `Ответ: <strong>тестирование</strong>` },
      { num: 10, title: '', text: `Ответ: <strong>алгоритм</strong>` },
      { num: 11, title: '', text: `Правильные: <strong>1, 4, 5</strong>` },
      { num: 12, title: '', text: `Правильный: <strong>2</strong>` },
      { num: 13, title: '', text: `Правильные: <strong>3, 4</strong>` },
      { num: 14, title: '', text: `Правильный: <strong>3</strong>` },
      { num: 15, title: '', text: `Правильный: <strong>2</strong>` },
      { num: 16, title: '', text: `Правильный: <strong>3</strong>` }
    ]
  },

  'bu-19': {
    title: '19. Запросы для поисковых систем',
    answers: [
      { num: 1, value: '1200', label: 'пирожное & выпечка' },
      { num: 2, value: '1500', label: 'фрегат & эсминец' },
      { num: 3, value: '2300', label: 'крейсер & линкор' },
      { num: 4, value: '600',  label: '(сомики & меченосцы) | гуппи' },
      { num: 5, value: '140',  label: 'ландыши & васильки & лютики' },
      { num: 6, value: '250',  label: 'март & июнь' },
      { num: 7, value: '300',  label: 'кроманьонец & (мезозой | неандерталец)' }
    ],
    explanations: [
      { num: 1, title: 'пирожное & выпечка', text: `Формула: <code>|A ∪ B| = |A| + |B| − |A ∩ B|</code><br>15000 = 8700 + 7500 − x → <strong>x = 1200</strong>` },
      { num: 2, title: 'фрегат & эсминец', text: `3000 = 2000 + 2500 − x → <strong>x = 1500</strong>` },
      { num: 3, title: 'крейсер & линкор', text: `7000 = 4800 + 4500 − x → <strong>x = 2300</strong>` },
      { num: 4, title: '(сомики & меченосцы) | гуппи', text: `меченосцы & гуппи = 0 → тройное = 0<br>100 + 500 − 0 = <strong>600</strong>` },
      { num: 5, title: 'ландыши & васильки & лютики', text: `740 = 650 + 230 − x → <strong>x = 140</strong>` },
      { num: 6, title: 'март & июнь', text: `520 = 420 + x − 150 → <strong>x = 250</strong>` },
      { num: 7, title: 'кроманьонец & (мезозой | неандерталец)', text: `|A ∩ B| = 300 → искомое = <strong>300</strong>` }
    ]
  }
};

// All titles
const allTitles = {
  'bu-1': '1. Техника безопасности', 'bu-2': '2. Информация и инф. процессы',
  'bu-3': '3. Графы: кратчайшие пути', 'bu-4': '4. Графы: количество путей (ЕГЭ)',
  'bu-prepost': 'Префиксная и постфиксная формы',
  'bu-5': '5. Дискретизация', 'bu-6': '6. Равномерное кодирование',
  'bu-7': '7. Неравномерное кодирование', 'bu-7a': '7а. Равномерное и неравномерное',
  'bu-8': '8. Условие Фано (ЕГЭ)', 'bu-9': '9. Количество информации',
  'bu-9x': 'Вычисление количества информации (ЕГЭ)',
  'bu-10': '10. Позиционные системы счисления', 'bu-10x': 'Позиционные системы (ЕГЭ)',
  'bu-11': '11. Двоичная система счисления', 'bu-12': '12. Восьмеричная система',
  'bu-13': '13. Шестнадцатеричная система', 'bu-13x': 'Двоичное кодирование (ЕГЭ)',
  'bu-14': '14. Кодирование символов', 'bu-15': '15. Кодирование графики',
  'bu-15x': 'Кодирование изображений (ЕГЭ)', 'bu-16': '16. Кодирование звука и видео',
  'bu-16x': 'Кодирование звука (ЕГЭ)',
  'bu-17': '17. Логические операции', 'bu-18': '18. Таблицы истинности',
  'bu-19': '19. Запросы для поисковых систем', 'bu-20': '20. Упрощение логических выражений',
  'bu-21': '21. Логические уравнения', 'bu-21a': '21а. Системы лог. уравнений (ЕГЭ)',
  'bu-22': '22. Множества и логика (ЕГЭ)',
  'bu-23': '23. Принципы устройства компьютеров', 'bu-24': '24. Магистрально-модульная орг.',
  'bu-25': '25. Процессор', 'bu-26': '26. Память', 'bu-26a': '26а. Процессор и память',
  'bu-27': '27. Устройства ввода и вывода',
  'bu-28': '28. Системное ПО', 'bu-29': '29. Файловая система. Маски (ЕГЭ)',
  'bu-30': '30. Программное обеспечение',
  'bu-31': '31. Компьютерные сети', 'bu-32': '32. Поисковые запросы (ЕГЭ)',
  'bu-33': '33. Адреса в Интернете', 'bu-33x': 'Адресация TCP/IP (ЕГЭ)',
  'bu-34': '34. Сеть Интернет',
  'bu-47': '47. Точность вычислений', 'bu-48': '48. Вредоносные программы',
  'bu11-0': '0. Техника безопасности', 'bu11-1': '1. Количество информации (ЕГЭ)',
  'bu11-2': '2. Информация и вероятность', 'bu11-3': '3. Передача информации (ЕГЭ)',
  'bu11-4': '4. Сжатие данных', 'bu11-5': '5. Системы. Информация и управление',
  'bu11-6': '6. Диаграммы (ЕГЭ)',
  'bu11-7': '7. Основные понятия баз данных', 'bu11-8': '8. Многотабличные БД (ЕГЭ)',
  'bu11-9': '9. Веб-сайты и веб-страницы', 'bu11-10': '10. Каскадные таблицы стилей',
  'bu11-11p': '11. Паскаль: сложность вычислений', 'bu11-11cpp': '11. C++: сложность вычислений',
  'bu11-11py': '11. Python: сложность вычислений',
  'bu11-12': '12. Деревья', 'bu11-13': '13. Графы: кол-во путей (ЕГЭ)',
  'bu11-14': '14. Динамическое программирование (ЕГЭ)',
  'bu11-15p': '15. Паскаль: ООП', 'bu11-15cpp': '15. C++: ООП', 'bu11-15py': '15. Python: ООП',
  'bu11-16': '16. Кодирование изображений (ЕГЭ)',

  'u10-17': '17. Логические операции', 'u10-18': '18. Таблицы истинности',
  'u10-19': '19. Запросы для поисковых систем', 'u10-20': '20. Упрощение логических выражений',
  'u10-21': '21. Логические задачи',
  'u10-22': '22. История развития ВТ', 'u10-23': '23. Принципы устройства компьютеров',
  'u10-24': '24. Магистрально-модульная орг.', 'u10-25': '25. Процессор',
  'u10-26': '26. Память', 'u10-27': '27. Устройства ввода', 'u10-28': '28. Устройства вывода',
  'u10-29': '29. Прикладные программы', 'u10-30': '30. Системное ПО',
  'u10-31': '31. Системы программирования', 'u10-32': '32. Правовая охрана программ',
  'u10-33': '33. Компьютерные сети', 'u10-34': '34. Локальные сети', 'u10-35': '35. Адреса в Интернете',
  'u10-46': '46. Вредоносные программы', 'u10-47': '47. Шифрование и хэширование',
  'u11-1': '1. Техника безопасности', 'u11-2': '2. Количество информации',
  'u11-3': '3. Информация и вероятность', 'u11-4': '4. Передача информации',
  'u11-5': '5. Кодирование и декодирование', 'u11-6': '6. Сжатие данных',
  'u11-7': '7. Информация и управление',
  'u11-8': '8. Анализ моделей', 'u11-9': '9. Задачи на графы', 'u11-10': '10. Моделирование',
  'u11-11': '11. Основные понятия баз данных',
  'u11-12': '12. Веб-сайты и веб-страницы', 'u11-13': '13. Каскадные таблицы стилей',
  'u11-14': '14. Сложность вычислений',
  'u11-15': '15. Деревья', 'u11-16': '16. Графы', 'u11-17': '17. Динамическое программирование',
  'u11-18': '18. Растровая графика',
  'u10-placeholder': 'Тесты 10 класса (У)', 'u11-placeholder': 'Тесты 11 класса (У)'
};

function renderTest(id) {
  const test = tests[id];
  const titleEl = document.getElementById('pageTitle');
  if (test) {
    titleEl.textContent = test.title;
    document.getElementById('content').innerHTML = `
      <div class="test-card">
        <div class="answers-list">${test.answers.map(a => `
          <div class="answer-item">
            <span class="answer-num">${a.num}.</span>
            <span class="answer-value">${a.value}</span>
            <span class="answer-label">${a.label}</span>
          </div>`).join('')}</div>
        <button class="toggle-btn" id="toggleBtn">
          <span>Показать объяснение</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="explanations" id="expl">${test.explanations.map(e => `
          <div class="explanation-item"><h4>${e.num}. ${e.title}</h4><p>${e.text}</p></div>`).join('')}
        </div>
      </div>`;
    const btn = document.getElementById('toggleBtn');
    const expl = document.getElementById('expl');
    btn.addEventListener('click', () => {
      const open = expl.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.querySelector('span').textContent = open ? 'Скрыть объяснение' : 'Показать объяснение';
    });
    return;
  }
  const title = allTitles[id] || id;
  titleEl.textContent = title;
  document.getElementById('content').innerHTML = `
    <div class="test-card"><div class="empty-state">
      <h3>${title}</h3>
      <p style="margin-top:12px">Ответы пока не добавлены.<br>Пришли скриншоты — добавлю сразу.</p>
    </div></div>`;
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    renderTest(link.dataset.test);
    closeDrawer();
  });
});

renderTest('bu-19');
