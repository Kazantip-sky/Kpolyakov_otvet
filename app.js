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
document.querySelector('[data-acc="u"]')?.closest('.accordion')?.classList.add('open');

// Settings
const settingsModal = document.getElementById('settingsModal');
document.getElementById('settingsBtn').addEventListener('click', () => settingsModal.classList.add('show'));
document.getElementById('closeSettings').addEventListener('click', () => settingsModal.classList.remove('show'));
settingsModal.addEventListener('click', e => { if (e.target === settingsModal) settingsModal.classList.remove('show'); });

// Tests with answers
const tests = {
  'u-sam-1': {
    title: 'СР №1. Помехоустойчивые коды (У)',
    type: 'assignment',
    body: `<p><b>Глава 1</b> · Учебник (У)</p>
<p>6 вариантов. Ответы совпадают с Б+У.</p>
<details open><summary><b>Ответы по вариантам</b></summary>
<ol>
<li><b>Вар.1:</b> TWITTER · 2 · 10→1011010, 12→0111100 · 1 2 4 9</li>
<li><b>Вар.2:</b> SOLARIS · 1 · 5→0100101, 15→1111111 · 1 3 5 10</li>
<li><b>Вар.3:</b> WINDOWS · 3 · 4→1001100, 11→0110011 · 2 4 8 11</li>
<li><b>Вар.4:</b> GOOGLE · 2 · 6→1100110, 10→1011010 · 15 12 9 1</li>
<li><b>Вар.5:</b> YANDEX · 3 · 7→0001111, 13→1010101 · 10 8 6 3</li>
<li><b>Вар.6:</b> AMAZON · 2 · 8→1110000, 14→0010110 · 9 7 5 2</li>
</ol></details>
<p class="hint">Подробности — в otvety-praktikum-bu11.txt</p>`
  },
  'u-sam-3': {
    title: 'СР №2. Проектирование БД (У)',
    type: 'assignment',
    body: `<p><b>Глава 3</b> · 10 вариантов</p>
<details open><summary><b>Схемы таблиц</b></summary>
<ol>
<li><b>Рыбалка:</b> Рыбалки(id, дата, место, погода, вес); Виды(id, имя); Улов(рыбалка_id, вид_id, кол-во)</li>
<li><b>Стройка:</b> Бригады(id, бригадир); Рабочие(id, бригада_id); Заказы(id, место, работы, цена); Выполнение(бригада_id, заказ_id)</li>
<li><b>Альпинисты:</b> Альпинисты(id, ФИО, звание); Вершины(id, название); Восхождения(альпинист_id, вершина_id, год)</li>
<li><b>Блог:</b> Пользователи(id, роль); Посты(id, автор_id, текст); Комментарии(id, пост_id, автор_id, текст)</li>
<li><b>Издательство:</b> Книги(id, название, редактор_id); Авторы(id, ФИО); Книга_Автор(книга_id, автор_id); Редакторы(id, ФИО)</li>
<li><b>Недвижимость:</b> Квартиры(id, категория); Продавцы(id); Агенты(id); Продажа(квартира_id, продавец_id, агент_id)</li>
<li><b>Статьи:</b> Пользователи; Разделы; Статьи(автор_id, раздел_id); Комментарии(статья_id, автор_id)</li>
<li><b>Зоопарк:</b> Виды; Животные(вид_id); Сотрудники; Доступ(сотрудник_id, животное_id)</li>
<li><b>Театр:</b> Актёры(звание); Спектакли; Участие(актёр_id, спектакль_id)</li>
<li><b>Гостиница:</b> Категории; Номера(категория_id); Постояльцы; Брони(номер_id, постоялец_id, даты)</li>
</ol></details>`
  },

  'bu-pr-1': {
    title: 'Практические работы · Глава 1',
    type: 'assignment',
    body: `<p><b>Информация и информационные процессы</b></p>
<p>Материалы из архива <code>practice11-1bu.zip</code>.</p>
<details open><summary><b>Работа: алгоритм RLE</b></summary>
<ul>
<li>Кодирование последовательностей, коэффициент сжатия</li>
<li>Работа с файлами <code>grad_*.bmp/jpg</code> через программу RLE</li>
<li>Почему JPEG почти не сжимается RLE; сравнение BMP</li>
</ul></details>
<details open><summary><b>Работа: сравнение алгоритмов сжатия</b></summary>
<ul>
<li>Программа Huffman, дерево кодов, анализ файла</li>
<li>Файлы <code>a.txt</code>, <code>enot.txt</code></li>
<li>Сравнение RLE и Хаффмана</li>
</ul></details>
<details open><summary><b>Работа: архиваторы и сжатие с потерями</b></summary>
<ul>
<li>Каталог Archive: wav, bmp, zip, exe, dat, mp3, jpg, txt</li>
<li>Каталог Lossy: bears.mp3, valaam.bmp</li>
<li>ShipControl.exe — помехоустойчивость / передача</li>
</ul></details>
<p class="hint">Полные задания и файлы — в practice11-1bu.zip (оригинал с сайта Полякова).</p>`
  },
  'bu-pr-2': {
    title: 'Практические работы · Глава 2',
    type: 'assignment',
    body: `<p><b>Моделирование</b></p>
<p>Материалы из архива <code>practice11-2bu.zip</code>.</p>
<details open><summary><b>Модель процессора / вычисления</b></summary>
<ul>
<li>Регистры R0–R3, трассировка программ</li>
<li>Задачи уровней A–D</li>
</ul></details>
<details open><summary><b>Сервисы ИИ (нейросети)</b></summary>
<ul>
<li>Quick, Draw!; colorize.cc; facialage; Perplexity/ChatGPT</li>
<li>Удаление фона (dog.jpg), объектов (keys.jpg)</li>
<li>Генерация кода (Go, медиана массива)</li>
</ul></details>
<details open><summary><b>Математическое моделирование</b></summary>
<ul>
<li>Кредит (аннуитет / дифференцированный) — Кредит.xls</li>
<li>Парашютист — Парашютист.xls</li>
<li>Полёт мяча, системы массового обслуживания</li>
<li>Работы 6–15: популяции, эпидемии, хищник–жертва и др.</li>
</ul></details>
<p class="hint">Полные задания, xls и картинки — в practice11-2bu.zip.</p>`
  },

  
  'bu-sam-1': {
    title: 'СР №1. Помехоустойчивые коды',
    type: 'assignment',
    body: `<p><b>Глава 1. Информация и информационные процессы</b></p>
<p>Самостоятельная работа по помехоустойчивым кодам (код с чётностью, код Хэмминга). 6 вариантов.</p>
<details open><summary><b>Вариант 1</b></summary>
<ol>
<li>11010100 01010111 11001001 11010100 11010100 01000101 11010010</li>
<li>А – 11111, Б – 11000, В – 00100, Г – ? → 1) 00000 2) 00011 3) 11100 4) ни одно</li>
<li>10, 12</li>
<li>1100001 0101110 1001101 0001001</li>
</ol></details>
<details><summary><b>Вариант 2</b></summary>
<ol>
<li>01010011 01001111 11001100 01000001 01010010 11001001 01010011</li>
<li>А – 00110, Б – 11000, В – 10011, Г – ? → 1) 01101 2) 01001 3) 00011 4) ни одно</li>
<li>5, 15</li>
<li>0101001 1010011 0100111 1011000</li>
</ol></details>
<details><summary><b>Вариант 3</b></summary>
<ol>
<li>11010111 11001001 11001110 01000100 01001111 11010111 01010011</li>
<li>А – 11100, Б – 00110, В – 01011, Г – ? → 1) 11001 2) 10010 3) 10001 4) ни одно</li>
<li>4, 11</li>
<li>1101010 0001100 1111000 0110111</li>
</ol></details>
<details><summary><b>Вариант 4</b></summary>
<ol>
<li>01000111 01001111 11001111 11000111 11001100 11000101</li>
<li>А – 01101, Б – 00110, В – 10001, Г – ? → 1) 11111 2) 11010 3) 01000 4) ни одно</li>
<li>6, 10</li>
<li>1111011 0011100 0011000 1101101</li>
</ol></details>
<details><summary><b>Вариант 5</b></summary>
<ol>
<li>11011001 01000001 01001110 11000100 11000101 11011000</li>
<li>А – 00101, Б – 01011, В – 10110, Г – ? → 1) 10000 2) 01110 3) 11000 4) ни одно</li>
<li>7, 13</li>
<li>0011010 1100000 1100100 0000011</li>
</ol></details>
<details><summary><b>Вариант 6</b></summary>
<ol>
<li>01000001 11001101 01000001 01011010 11001111 11001110</li>
<li>А – 01010, Б – 11001, В – 10100, Г – ? → 1) 00000 2) 00111 3) 01101 4) ни одно</li>
<li>8, 14</li>
<li>0001001 0001011 0101101 0101011</li>
</ol></details>
<p class="hint">Полные условия — в samdo11-1bu.doc. <b>Ответы:</b> см. файл <code>otvety-praktikum-bu11.txt</code> в архиве сайта.</p>`
  },
  'bu-sam-2': {
    title: 'СР №2. Игровые модели',
    type: 'assignment',
    body: `<p><b>Глава 2. Моделирование</b></p>
<p>Самостоятельная работа: игровые стратегии (Петя и Ваня, кучи камней). 20 задач.</p>
<details open><summary><b>Задачи 1–8</b> — одна куча</summary>
<p>Для каждой: 1а) S, при которых Петя выигрывает 1-м ходом; 1б) Ваня 1-м ходом; 2) S для выигрыша Пети 2-м ходом; 3) S для стратегии Вани (1-й или 2-й ход).</p>
<ul>
<li><b>1)</b> +1 или ×3−2, победа ≥31, S∈[1;30]</li>
<li><b>2)</b> +2 или ×2−1, победа ≥40, S∈[1;39]</li>
<li><b>3)</b> +3 или ×3−1, победа ≥50, S∈[1;49]</li>
<li><b>4)</b> +3 или ×2−1, победа ≥38, S∈[1;37]</li>
<li><b>5)</b> +1 или ×3+1, победа ≥34, S∈[1;33]</li>
<li><b>6)</b> +2 или ×2+1, победа ≥44, S∈[1;43]</li>
<li><b>7)</b> +2 или ×3+2, победа ≥60, S∈[1;59]</li>
<li><b>8)</b> +3 или ×2+1, победа ≥85, S∈[1;84]</li>
</ul></details>
<details><summary><b>Задачи 9–16</b> — две кучи</summary>
<p>Ходы: +1 (или +2) в одну кучу / умножить кучу. Указать, кто имеет выигрышную стратегию; для части — дерево партий.</p>
<ul>
<li><b>9)</b> +1 или ×2, сумма ≥38</li>
<li><b>10)</b> +1 или ×3, сумма ≥45</li>
<li><b>11)</b> +1 или ×2, сумма ≥58</li>
<li><b>12)</b> +1 или ×2, сумма ≥70</li>
<li><b>13)</b> +2 или ×2, сумма ≥75</li>
<li><b>14)</b> +2 или ×2, сумма ≥55</li>
<li><b>15)</b> +2 или ×3, сумма ≥67</li>
<li><b>16)</b> +2 или ×3, сумма ≥48</li>
</ul></details>
<details><summary><b>Задачи 17–20</b> — особые правила</summary>
<ul>
<li><b>17)</b> +1 или ×2, ≥28; если >46 — побеждает противник</li>
<li><b>18)</b> +1/+2/+3 или ×2, >33 (победа ≥34)</li>
<li><b>19)</b> +1/+2/+3 или ×2, >37 (победа ≥38)</li>
<li><b>20)</b> +1/+2 или ×3, >64 (победа ≥65)</li>
</ul></details>
<p class="hint">Полные формулировки — в файле samdo11-2bu.doc</p>`
  },
  'bu-sam-3': {
    title: 'СР №3. Проектирование базы данных',
    type: 'assignment',
    body: `<p><b>Глава 3. Базы данных</b></p>
<p>Самостоятельная работа: спроектировать многотабличную БД. 15 вариантов.</p>
<ol>
<li>Рыбалка: дата, место, погода, вес, количество рыб по видам</li>
<li>Строительная фирма: бригады, бригадир, заказы (место, работы, цена)</li>
<li>Альпинисты: звания, вершины, кто когда поднимался</li>
<li>Блог: пользователи (роли), посты, комментарии</li>
<li>Издательство: книги, авторы (многие-ко-многим), редактор</li>
<li>Недвижимость: квартиры (категории), продавцы, агенты</li>
<li>Сайт статей: пользователи, разделы, статьи, комментарии</li>
<li>Зоопарк: животные (виды), сотрудники и доступ к животным</li>
<li>Театр: спектакли, актёры (звания), занятость в спектаклях</li>
<li>Гостиница: номера (категории), постояльцы, бронирование</li>
<li>Конюшня: кони, владельцы (статус), оплата, уход сотрудников</li>
<li>Автохозяйство: авто, водители, заказы, заказчики</li>
<li>Киностудия: фильмы, актёры, режиссёр, места съёмок</li>
<li>IT-фирма: сотрудники, проекты, языки программирования, заказчик</li>
<li>Турфирма: маршруты, группы, инструкторы, туристы</li>
</ol>
<p class="hint">Полные условия — в файле samdo11-3bu.doc</p>`
  },

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

  
  'bu-prakt-otv': 'Ответы к задачам из учебника 11 класса (Б+У)',
  'u-prakt-otv': 'Ответы к задачам из учебника 11 класса (У)',
  
  
  'bu-pr-1': 'ПР Гл.1 — RLE, сжатие, архивы',
  'bu-pr-2': 'ПР Гл.2 — Моделирование, ИИ',
  'bu-sam-1': 'СР №1. Помехоустойчивые коды',
  'bu-sam-2': 'СР №2. Игровые модели',
  'bu-sam-3': 'СР №3. Проектирование базы данных',
  'bu-prakt-pr': 'Практические работы (Б+У)',
  'bu-prakt-sam': 'Самостоятельные работы (Б+У)',
  
  'u-sam-1': 'СР №1. Помехоустойчивые коды (У)',
  'u-sam-3': 'СР №2. Проектирование БД (У)',
  'u-prakt-pr': 'Практические работы (У)',
  'u-prakt-sam': 'Самостоятельные работы (У)',
  'u10-placeholder': 'Тесты 10 класса (У)', 'u11-placeholder': 'Тесты 11 класса (У)'
};

function renderTest(id) {
  const test = tests[id];
  const titleEl = document.getElementById('pageTitle');
  if (test && test.type === 'assignment') {
    titleEl.textContent = test.title;
    const dl = `<p class="dl-box"><a class="dl-btn" href="otvety-praktikum-bu11.txt" download>⬇ Скачать ответы (TXT)</a></p>`;
    document.getElementById('content').innerHTML = `<div class="test-card assignment">${test.body}${dl}</div>`;
    return;
  }
  if (test && test.answers) {
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
    // real download links (no data-test)
    if (!link.dataset.test) {
      closeDrawer();
      return; // allow default download
    }
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    renderTest(link.dataset.test);
    closeDrawer();
  });
});

renderTest('u11-10');
