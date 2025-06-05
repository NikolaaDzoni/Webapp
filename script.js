// Sample question data structure
const questionData = [
    {
        id: 1,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање'],
        question: 'Заокружите број испред кључне речи којом се при кодирању у програмском језику Ц, у наредби вишеструког гранања обележавају вредности за које се улази у поједине гране:',
        options: [
            'switch',
            'break',
            'return',
            'case'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 2,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање', 'Datoteke'],
        question: 'У програмском језику Ц декларисане су променљивe и дат је део кода програма:<br><pre><code><span class="code-keyword">FILE</span> *fp;<br><span class="code-keyword">char</span> str[150];<br>fgets(str, 80, fp);</code></pre><br>Одредити шта је последица извршавања датог кода. Заокружити број испред очекиваног одговора:',
        options: [
            'Учитава 80 карактера из датотеке и смешta у стринг str.',
            'Учитава максимално 150 карактера из датотеке и смешta у стринг str.',
            'Учитава стринг из датотеке све док се не учита знак за нови ред или 80 карактера',
            'Учитава стринг из датотеке све док се не учита знак за нови ред или 150 карактера'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 3,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        tags: ['C', 'Програмирање', 'I/O'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива <span class="code-bold">pod</span> типа <span class="code-bold">int</span>. Употребом функције <span class="code-bold">fprintf(...)</span> уписати декларисан податак у <span class="code-bold">стандардну излазну датотеку</span>.\nЗаокружите број испред исправно написане наредбе:',
        options: [
            '<span class="code-bold">fprintf(pod);</span>',
            '<span class="code-bold">fprintf("<span class="code-format-specifier">%d</span>", pod);</span>',
            '<span class="code-bold">fprintf("<span class="code-format-specifier">%d</span>", pod, stdin);</span>',
            '<span class="code-bold">fprintf(stdout, "<span class="code-format-specifier">%d</span>", pod);</span>',
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 4,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре',
        tags: ['C', 'Програмирање', 'Структуре'],
        question: 'У програмском језику Ц декларисани су структурни типови података Tacka3D (који дефинише тачку у простору) и Lopta (одређена центром и полупречником):\n<div class="code-blocks-container">\n  <div class="code-block">\n    <pre><code><span class="code-bold code-keyword">typedef struct</span>\n{\n  <span class="code-keyword">float</span> x, y, z;\n}<span class="code-bold">Tacka3D;</span></code></pre>\n  </div>\n  <div class="code-block">\n    <pre><code><span class="code-bold code-keyword">typedef struct</span>\n{\n  Tacka3D centar;\n  <span class="code-keyword">float</span> R;\n}<span class="code-bold">Lopta;</span></code></pre>\n  </div>\n</div>\nЗаокружите број испред исправно написане наредбе декларације и иницијализације променљиве x типа Lopta, тако да јој центар буде у тачки O(2,2,2), а полупречник 10цм:',
        options: [
            'Lopta x={10, {2, 2, 2}};',
            'Lopta x={2, 2, 2, 10};',
            'Lopta x={2, 2, 2}, {10};',
            'Lopta x={{2, 2, 2}, 10};'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 5,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке',
        tags: ['C', 'Програмирање', 'Бинарне датотеке'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива fp која представља показивач на бинарну датотеку и променљива podatak у коју ће се уписати прочитани подаци из дефинисане бинарне датотеке. Заокружити редни број испред наредбе која омогућава учитавање три бајта са тренутне позиције из бинарне датотеке:',
        options: [
            'fread(&podatak, 24, 1, fp);',
            'fread(&podatak, 24, 0, fp);',
            'fread(&podatak, 3, 1, fp);',
            'fscanf(&podatak, 3, 1, fp);',
            'fscanf(fp, 3, %podatak);'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 6,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке',
        tags: ['C', 'Програмирање', 'Бинарне датотеке'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива fp која представља показивач на бинарну датотеку и променљива podatak чија вредност ће се уписати у дефинисану бинарну датотеку. Заокружити редни број испред наредбе која омогућава упис три бајта у бинарну датотеку:',
        options: [
            'fprintf(&podatak, 3, 1, fp);',
            'fprintf(fp, 3, &podatak);',
            'fwrite(podatak, 24, 1, fp);',
            'fwrite(&podatak, 24, 0, fp);',
            'fwrite(&podatak, 3, 1, fp);'
        ],
        correctAnswer: 4,
        points: 1
    },
    {
        id: 7,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Форматирани излаз',
        tags: ['C', 'Програмирање', 'Форматирани излаз'],
        question: 'У програмском језику Ц дата је наредба декларације, а затим и наредба форматираног излаза:' +
            '<div class="question-code"><span class="code-keyword">float</span> x = 5.56;<br>printf(<span class="code-string">" x = <span=\'code-format-specifier\'>%f</span> x = <span=\'code-format-specifier\'>%g</span>\\n"</span>, x, x);</div>' +
            'Након извршења ових наредби на екрану ће се приказати вредности променљивих у задатом формату.<br><br>Заокружити број испред тачног одговора:',
        options: [
            'x = 5.560000e+000 x= 0',
            'x = 5.560000 x = 5.560000e+000',
            'x = 5.560000 x = 5.56',
            'x = 5.56 x = 5.560000e+000'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 8,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори'],
        question: `У програмском језику Ц декларисана је целобројна променљива и додељена јој је вредност логичког израза:<br><div class="question-code"><span class="code-keyword">int</span> x;<br>x = 1==10>5;</div>Имајући у виду приоритет оператора, одредити вредност променљиве х после извршења ове наредбе.<br><br>Заокружити број испред траженог одговора:`,
        options: [
            'променљива добија вредност логичке неистине, тј. x = 0',
            'променљива добија вредност логичке истине, тј. x = 1',
            'вредност логичког израза се не може доделити целобројној променљивој',
            'променљива добија вредност логичке истине, тј. било који број различит од 0'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 9,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори'],
        question: 'У програмском језику Ц декларисане су две целобројне променљиве. Променљива а добија вредност уносом са тастатуре. Затим се вредност логичког израза додељује променљивој х:' +
            '<div class="question-code"><span class="code-keyword">int</span> x, a;<br>scanf(<span class="code-string">"%d"</span>, &a);<br>x = 10!=5 || a<2;</div>' +
            'Имајући у виду приоритет оператора, одредити вредност променљиве х после извршења ове наредбе.<br><br>Заокружити број испред траженог одговора:',
        options: [
            'уколико се заградама не одредити редослед извршавања операција у овом изразу, долази до грешке, тј. "пуцања" програма',
            'без обзира на вредност која се унесе у променљиву а, вредност израза је увек "тачно", тј. x = 1',
            'без обзира на вредност која се унесе у променљиву а, вредност израза је увек "нетачно", тј. x = 0',
            'вредност израза зависи од променљиве а и не може се једнозначно одредити уколико није позната вредност уписана у променљиву а'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 10,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условни оператори',
        tags: ['C', 'Програмирање', 'Условни оператори'],
        question: 'Наредбом у Ц језику треба проверити да ли је број паран или непаран. Проценити која од датих наредби врши ову проверу и заокружити број испред тачно написане наредбе.',
        options: [
            '(broj % 2 == 1) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj % 2) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj % 2 == 0) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj & 1) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj & 0x1 == 0) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj & 1 == 1) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 11,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условни оператори',
        tags: ['C', 'Програмирање', 'Условни оператори'],
        question: `Код дат у тексту задатка треба реализовати помоћу једне <span class="code-keyword">if</span> наредбе. Заокружити број испред понуђенoг тачног одговора:<br><div class="question-code"><span class="code-keyword">if</span>(x&gt;1)<br>{<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(x&lt;6)<br>&nbsp;&nbsp;&nbsp;&nbsp;y=4;<br>}<br></div>`,
        options: [
            '<span class="code-keyword">if</span>(x&gt;1 &amp;&amp; x&lt;6 ) y=4;',
            '<span class="code-keyword">if</span>(x&gt;1 || x&lt;6 ) y=4;',
            '<span class="code-keyword">if</span>(x&lt;1 || x&gt;6 ) y=4;',
            '<span class="code-keyword">if</span>(!(x&lt;=1 || x&gt;=6)) y=4;'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 12,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Условне наредбе'],
        question: `Дат је део кода на програмском језику Ц:<br><div class="question-code"><span class="code-keyword">for</span>(j=0; j&lt;n; j++)<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(a[j]&gt;0)s+=a[j];<br>&nbsp;&nbsp;<span class="code-keyword">else</span> <span class="code-keyword">break</span>;<br></div><br>Свака <span class="code-keyword">for</span> петља може се написати коришћењем <span class="code-keyword">while</span> и <span class="code-keyword">do</span>-<span class="code-keyword">while</span> наредбе. Заокружити број испред понуђеног кода који је еквивлентан коду датом у тексту задатка:`,
        options: [
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n &amp;&amp; a[j]>0) s+=a[j++];',
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n &amp;&amp; a[j++]>0) s+=a[j];',
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n || a[j]>0) s+=a[j++];',
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n &amp;&amp; a[j]<=0) s+=a[j++];'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 13,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Грешке'],
        question: `Датa је декларација променљивих <span class="code-keyword">unsigned</span> a, b и део кода у програмском језику Ц.<br>Одредити шта се налази као резултат у променљивој x и y након извршења датог кода.<br>Заокружити број испред траженог одговора:<br><div class="question-code"><span class="code-keyword">unsigned</span> a, b, x, y, temp;<br>x=a*b;<br><span class="code-keyword">while</span>(b) temp=a%b, a=b, b=temp;<br>y=b;<br>x/=y;<br></div>`,
        options: [
            'x је производ а и б, а y је количник а са б',
            'x је најмањи заједнички садржалац за а и б, а y највећи заједнички делилац за а и б',
            'x је највећи заједнички делилац за а и б, а y најмањи заједнички садржалац за а и б',
            'без обзира на вредности променљивих, долази до грешке у последњој наредби кода',
            'долази до грешке јер петља понавља само прву наредбу услед изостанка<br>витичастих заграда на телу петље'
        ],
        correctAnswer: 4,
        points: 2
    },
    {
        id: 14,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарни оператори',
        tags: ['C', 'Програмирање', 'Бинарни оператори', 'Петље', 'Условне наредбе'],
        question: `Датa је декларација променљивих pod, br и део кода у програмском језику Ц:<br><br><div class="question-code"><span class="code-keyword">unsigned</span> pod, br;<br>pod=128;<br>br=0;<br><span class="code-keyword">while</span>(pod!=0){<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(pod &amp; 0x1) br++;<br>&nbsp;&nbsp;pod&gt;&gt;=0x1;<br>}<br></div><br>Закључити шта представља вредност коју променљива br добије извршењем кода.<br>Заокружити број испред траженог одговора:`,
        options: [
            'Број јединица у бинарном запису броја pod',
            'Број нула у бинарном запису броја pod',
            'Број цифара у бинарном запису броја pod',
            'Број цифара у хексадецималном запису броја pod'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 15,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Условне наредбе', 'Унос'],
        question: `Дат је део кода на програмском језику Ц, који контролише унос целобројне променљиве n. Одредити вредности које променљива n може добити. Заокружити број испред траженог одговора:<br><div class="question-code"><span class="code-keyword">do</span>{<br>&nbsp;&nbsp;<span class="code-keyword">printf</span>(<span class="code-string">"Unesite N:\\\\nN = "</span>);<br>&nbsp;&nbsp;<span class="code-keyword">scanf</span>(<span class="code-string">"%d"</span>,&amp;n);<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(n &amp; 1) <span class="code-keyword">printf</span>(<span class="code-string">"Greska.\\\\n"</span>);<br>}<span class="code-keyword">while</span>(n &amp; 1);<br></div>`,
        options: [
            'Омогућава унос непарног природног броја',
            'Омогућава унос само позитивног природног броја',
            'Омогућава унос само негативног природног броја',
            'Омогућава унос парног природног броја',
            'Омогућава унос само непарног позитивног природног броја'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 16,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Низови'],
        question: 'Дата је декларација променљивих и део програмског кода:<br><br><div class="question-code"><span class="code-keyword">int</span> i, temp, n = 11;<br><span class="code-keyword">int</span> x[30]={ -3, -1, -2, -2, 1, 4, 3, 1, 5, -8, 5};<br>temp=x[0];<br>i=0;<br><span class="code-keyword">while</span>(i&lt;n-1) x[i++]=x[i+1];<br>x[n-1]=temp;<br></div><br>Просудити на основу наредби које ће бити извршене у <span class="code-keyword">while</span> циклусу како ће изгледати<br>трансформисан низ x од n елемената. Заокружити број испред очекиваног одговора:',
        options: [
            'x[ ] ={ 5, -3, -1, -2, -2, 1, 4, 3, 1, 5, -8 }',
            'x[ ] ={ -1, -2, -2, 1, 4, 3, 1, 5, -8, 5, -3 }',
            'x[ ] ={ -2, 0, -1, -1, 2, 5, 4, 2, 6, -7, 6 }',
            'x[ ] ={ -1, -2, -2, 1, 4, 3, 1, 5, -8, 5 }'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 17,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције'],
        question: 'У програмском језику Ц је дата декларација променљивих, а касније у коду извршен<br>позив функције на следећи начин:<br><div class="question-code"><span class="code-keyword">int</span> k, i;<br><span class="code-keyword">char</span> lista[10][50], ime[50];<br><span class="code-keyword">if</span>( Formiraj(lista[i], ime, k) == NULL) { ... }<br></div><br>На основу позива, проценити каквог је облика прототип функције и заокружити број<br>испред тачно написаног прототипа:',
        options: [
            '<span class="code-keyword">void</span> *Formiraj(<span class="code-keyword">char</span> s1, <span class="code-keyword">char</span> s2, <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">char</span> Formiraj(<span class="code-keyword">char</span> *s1, <span class="code-keyword">char</span> *s2, <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">int</span> *Formiraj(<span class="code-keyword">char</span> s1[], <span class="code-keyword">char</span> s2[], <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">int</span> Formiraj(<span class="code-keyword">char</span> s1[], <span class="code-keyword">char</span> s2[], <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">char</span> *Formiraj(<span class="code-keyword">char</span> s1, <span class="code-keyword">char</span> s2, <span class="code-keyword">int</span> x);'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 18,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције'],
        question: 'У програмском језику Ц је дата декларација променљивих, а касније у коду извршен<br>позив функције на следећи начин:<br><div class="question-code"><span class="code-keyword">int</span> x, y, i, j;<br><span class="code-keyword">float</span> **mat, *vek, z;<br>mat[i] = Formiraj(x, 0.5);<br></div><br>На основу позива, проценити каквог је облика прототип функције и заокружити број<br>испред тачно написаног прототипа:',
        options: [
            '<span class="code-keyword">float</span> Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">float</span> m);',
            '<span class="code-keyword">void</span> *Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">int</span> m);',
            '<span class="code-keyword">float</span> *Formiraj(<span class="code-keyword">float</span> n, <span class="code-keyword">int</span> m);',
            '<span class="code-keyword">float</span> *Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">float</span> m);',
            '<span class="code-keyword">float</span> **Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">float</span> m);'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 19,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције', 'Рекурзија'],
        question: 'Дат је код рекурзивне функције написан у програмском језику Ц:<br><br><div class="question-code"><span class="code-keyword">void</span> prikaz(<span class="code-keyword">int</span> k, <span class="code-keyword">int</span> n){<br><span class="code-keyword">printf</span>("<span class="code-string">%d\\t</span>",k);<br><span class="code-keyword">if</span>(k&lt;n) prikaz(k+1,n);<br><span class="code-keyword">printf</span>("<span class="code-string">%d\\t</span>",k);<br>}<br></div><br>Проценити шта ће се десити ако се функција позове наредбом: prikaz(4,10);<br>Заокружити број испред тачног одговора:\'',
        options: [
            '4 5 6 7 8 9 10',
            '4 5 6 7 8 9 10 9 8 7 6 5 4',
            '4 5 6 7 8 9 10 10 9 8 7 6 5 4',
            '10 9 8 7 6 5 4'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 20,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције'],
        question: 'У програмском језику Ц дат је прототип функције funkcija() и декларисане су<br>променљиве у функцији main(). У понуђеним одговорима дати су позиви функције за<br>декларисане променљиве.<br><div class="question-code"><span class="code-keyword">void</span> funkcija(<span class="code-keyword">int</span> *x, <span class="code-keyword">int</span> *y, <span class="code-keyword">int</span> **p);<br><span class="code-keyword">void</span> main(){<br><span class="code-keyword">int</span> a=5, b=7, c=15, *poc;<br>poc = &c;<br>}<br></div><br>Заокружити редни број испред исправно записаног позива декларисане функције:',
        options: [
            'funkcija(a, b, &poc);',
            'funkcija(&a, &b, &poc);',
            'funkcija(&a, &b, poc);',
            'c = funkcija(&a, &b, &poc);'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 21,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре',
        tags: ['C', 'Програмирање', 'Структуре', 'Показивачи'],
        question: 'У програмском језику C декларисани су структурни типoви података Tacka (одређена<br>координатама), Poligon (одређен бројем и координатама темена) и Piramida (одређена<br>типом основе – троугао, четвороугао... и висином). Потом је декларисана и променљива<br>типа *Piramida:<br><div class="code-blocks-container"><div class="code-block"><pre><code><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">float</span> x, y;<br>}<span class="code-bold">Tacka;</span></code></pre></div><div class="code-block"><pre><code><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">int</span> brojTemena;<br>Tacka temena[10];<br>}<span class="code-bold">Poligon;</span></code></pre></div><div class="code-block"><pre><code><span class="code-keyword">typedef struct</span><br>{<br>Poligon osnova;<br><span class="code-keyword">float</span> visina;<br>}<span class="code-bold">Piramida;</span></code></pre></div></div><br>Piramida *p;<br>Заокружити број испред наредбе којом се број темена основе пирамиде на коју показује<br>декларисани показивач *p, поставља на 6:\'',
        options: [
            'p.osnova.brojTemena=6;',
            'p.osnova->brojTemena=6;',
            'p->osnova.brojTemena=6;',
            'p->osnova[brojTemena]=6;',
            'p->osnova->brojTemena=6;'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 22,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље'],
        question: 'Заокружити бројеве испред ТАЧНИХ исказa који се односе на дефиницију <span class="code-keyword">while</span> циклуса:',
        options: [
            '<span class="code-keyword">while</span> циклус се извршава све док је услов логичка неистина (једнак нули),',
            '<span class="code-keyword">while</span> циклус се користи када се зна колико ће се пута циклус извршавати,',
            'у <span class="code-keyword">while</span> циклусу се увек прво проверава да ли је услов логичка истина, те ако јесте<br>наредба се извршава',
            'код <span class="code-keyword">while</span> циклуса се може десити да се тело циклуса не изврши ниједном (на почетку<br>услов није задовољен).'
        ],
        correctAnswer: [2, 3],
        points: 1
    },
    {
        id: 23,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље'],
        question: 'Наведени су искази који се односе на дефиницију <span class="code-keyword">do</span>-<span class="code-keyword">while</span> циклуса. Заокружити бројеве<br>испред ТАЧНИХ исказа:',
        options: [
            'Користи се када се не зна колико ће се пута циклус понављати,',
            'Прво се извршава тело циклуса, а затим израчунава вредност логичког израза. Ако се<br>добије логичка неистина, циклус се поновно извршава.',
            'Циклус се завршава када услов добија вредност логичке истине',
            'Циклус се извршава барем једном.'
        ],
        correctAnswer: [0, 3],
        points: 1
    },
    {
        id: 24,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке',
        tags: ['C', 'Програмирање', 'Бинарне датотеке'],
        question: 'Заокружити бројеве испред понуђених тврдњи које представљају тачне наставке изјаве<br>која се односи на повратну вредност функције <span class="code-keyword">fopen</span>:<br>При покушају да датотеку отворимо за читање, функција <span class="code-keyword">fopen</span>...',
        options: [
            'ако датотека не постоји, изазива грешку која доводи до пуцања програма',
            'ако датотека не постоји, креира празну датотеку, поставља се на њен почетак и<br>враћа показивач на ту датотеку',
            'враћа NULL показивач ако датотека не постоји',
            'ако датотека постоји, враћа показивач на ту датотеку'
        ],
        correctAnswer: [2, 3],
        points: 1
    },
    {
        id: 25,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање', 'Основе', 'Декларација'],
        question: 'Дате су наредбе декларације променљивих (са и без иницијализације вредности)<br>написане на програмском језику Ц. Заокружити бројеве испред исправно написаних<br>наредби декларације променљивих:',
        options: [
            '<span class="code-keyword">int</span> a=b=c=5;',
            '<span class="code-keyword">int</span> a=5, b=5, c=5;',
            '<span class="code-keyword">char</span> zn=<span class="code-string">"a"</span>;',
            '<span class="code-keyword">long</span> a; b=5; c;',
            '<span class="code-keyword">int</span> a=0xf2;',
            '<span class="code-keyword">char</span> zn=\'\\b\';'
        ],
        correctAnswer: [1, 4, 5],
        points: 1.5
    },
    {
        id: 26,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори', 'Декларација'],
        question: 'Декларисане су следеће променљиве:<br><br><div class="question-code"><span class="code-keyword">float</span> x, z;<br><span class="code-keyword">const</span> <span class="code-keyword">float</span> y;<br></div><br>Заокружити бројеве испред НЕИСПРАВНО написаних наредби доделе вредности<br>променљивама:',
        options: [
            'x %= y;',
            'x =+ 5;',
            'x += y + 5;',
            'x =/ y + 5;',
            'y = x + z;',
            'x = z = y + 5;'
        ],
        correctAnswer: [0, 3, 4],
        points: 1.5
    },
    {
        id: 27,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Унос',
        tags: ['C', 'Програмирање', 'Унос'],
        question: 'Дата je наредба декларације <span class="code-keyword">int</span> a, b;<br>Имајући у виду дату декларацију, заокружити бројеве испред НЕИСПРАВНО написаних<br>наредби форматираног уноса података:',
        options: [
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%f</span>", &a, &b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%*d</span>", &a, &b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%d</span>", &a, &b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%d</span>", a, b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%*d</span>", &a);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%5d%5d</span>", &a, &b);'
        ],
        correctAnswer: [0, 1, 3],
        points: 1.5
    },
    {
        id: 28,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови'],
        question: 'Дате су наредбе декларације и иницијализације једнодомензионалног низа целих бројева<br>у програмском језику Ц. Заокружити бројеве испред исправно написаних наредби<br>декларације и иницијализације једнодимензионалног низа:',
        options: [
            '<span class="code-keyword">int</span> a[10]={1,2,3};',
            '<span class="code-keyword">int</span> a[5]={-3, -2, -1, 0, 1, 2, 3};',
            '<span class="code-keyword">int</span> a[]={10,20,30,40,50};',
            '<span class="code-keyword">int</span>[5] a={1, 2, 3, 4, 5};',
            '<span class="code-keyword">int</span> a={10,20,30,40,50};',
            '<span class="code-keyword">int</span> a[5]={\'1\', \'2\', \'3\', \'4\', \'5\'};'
        ],
        correctAnswer: [0, 2, 5],
        points: 1.5
    },
    {
        id: 29,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи',
        tags: ['C', 'Програмирање', 'Показивачи'],
        question: 'Термин "адресна аритметика" се односи на извођење аритметичких операција над<br>показивачима. Анализирати дате исказе који дефинишу дозвољене аритметичке<br>операције над показивачима. Заокружити бројеве испред тачних исказа:',
        options: [
            'Додела вредности једног показивача другом.',
            'Додавање рационалног податка на вредност показивача и одузимање рационалног податка од вредности показивача.',
            'Одузимање и упоређивање два показивача.',
            'Идентификатор низа је показивач на почетак низа и може му се мењати вредност.',
            'Упоређивање показивача са NULL.',
            'Сабирањем два показивача, добија се нови показивач.'
        ],
        correctAnswer: [0, 2, 4],
        points: 1.5
    },
    {
        id: 30,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Константе'],
        question: 'Наредбама програмског језика Ц дата је декларација једне симболичке константе и једне<br>константне променљиве:<br><div class="question-code"><span class="code-keyword">#define k 50</span><br><span class="code-keyword">int</span> m=100; ...</div><br>Заокружити бројеве испред исправно написаних наредби декларације<br>дводимензионалног низа целих бројева (матрице):',
        options: [
            '<span class="code-keyword">int</span> a [ k ][ k ];',
            '<span class="code-keyword">int</span> b [ k ][ m ];',
            '<span class="code-keyword">int</span> c [ k ][ 10 ];',
            '<span class="code-keyword">int</span> x [100 ][ 50];',
            '<span class="code-keyword">int</span> y [10, 10];',
            '<span class="code-keyword">int</span> z [ m ][ 10 ];'
        ],
        correctAnswer: [0, 2, 3],
        points: 1.5
    },
    {
        id: 31,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе', // Assuming 'Основе' based on previous context, can be adjusted if a more specific lecture is appropriate
        tags: ['C', 'Програмирање'],
        question: 'У следећем задатку заокружити бројеве испред тражених одговора.<br>Дата је наредба у Ц језику, која температуру у Целзијусима tempc претвара у<br>температуру у Фаренхајтима tempf. Подаци tempc и tempf су реални бројеви обичне<br>тачности. Проценити који изрази дају тачно решење.',
        options: [
            'temf = (9 / 5) * temc + 32;',
            'temf = 9 / 5 * temc + 32;',
            'temf = 9 * temc / 5 + 32;',
            'temf = 32 + 9 * temc / 5;'
        ],
        correctAnswer: [2, 3],
        points: 2
    },
    {
        id: 32,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условне наредбе', // Assuming 'Условне наредбе' based on content
        tags: ['C', 'Програмирање', 'Условне наредбе', 'switch'],
        question: 'Дата је if-else наредба:<br><br><div class="question-code"><span class="code-keyword">if</span>(a==3 || a==5) p++;<br><span class="code-keyword">else</span> p--;</div><br>Заокружити бројеве испред понуђених <span class="code-keyword">switch</span> наредби које су еквивалентне датој if-else<br>наредби:',
        options: [
            'switch(a){<br><br><span class="code-keyword">case</span> 3: p++; <span class="code-keyword">break</span>;<br><span class="code-keyword">case</span> 5: p++; <span class="code-keyword">break</span>;<br><span class="code-keyword">default</span>: p--;<br><br>}',
            'switch(a){<br><br><span class="code-keyword">case</span> 3: <span class="code-keyword">case</span> 5: p++; <span class="code-keyword">break</span>;<br>p--;<br><br>}',
            'switch(a){<br><br><span class="code-keyword">case</span> 3: <span class="code-keyword">case</span> 5: p++; <span class="code-keyword">break</span>;<br><span class="code-keyword">default</span>: p--;<br><br>}',
            'switch(a){<br><br><span class="code-keyword">case</span> 3: <span class="code-keyword">case</span> 5: p++;<br><span class="code-keyword">default</span>: p--;<br><br>}'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 33,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи', // Assuming 'Показивачи' based on content
        tags: ['C', 'Програмирање', 'Показивачи', 'Низови', 'calloc'],
        question: 'У програму на програмском језику Ц извршена је следећа декларација, а касније и<br>резервација меморијског простора за низ реалних бројева обичне талности дужине n:<br><div class="question-code"><span class="code-keyword">float</span> *B;<br><span class="code-keyword">int</span> n;<br>B=(<span class="code-keyword">float</span>*)calloc(n,<span class="code-keyword">sizeof</span>(<span class="code-keyword">float</span>));</div><br>Заокружити бројеве испред исправно написаних наредби за ПРИКАЗ i-тог елемента низа<br>B:',
        options: [
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", B[i]);',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", &B[i]);',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", B+i);',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%p</span>", *(B+i));',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", *(B+i));'
        ],
        correctAnswer: [0, 4],
        points: 2
    },
    {
        id: 34,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Assuming 'Низови' based on content
        tags: ['C', 'Програмирање', 'Низови', 'calloc', 'scanf'],
        question: 'У програму на програмском језику Ц извршена је следећа декларација, а касније и<br>резервација меморијског простора за низ реалних бројева обичне талности дужине n:<br><div class="question-code"><span class="code-keyword">float</span> *B;<br><span class="code-keyword">int</span> n;<br>B=(<span class="code-keyword">float</span>*)<span class="code-keyword">calloc</span>(n,<span class="code-keyword">sizeof</span>(<span class="code-keyword">float</span>));</div><br>Заокружити бројеве испред исправно написаних наредби за УНОС i-тог елемента низа B:',
        options: [
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", B[i]);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", B+i);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%p</span>", B+i);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", &B[i]);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", *(B+i));'
        ],
        correctAnswer: [1, 3],
        points: 2
    },
    {
        id: 35,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције', // Assuming 'Функције' based on content
        tags: ['C', 'Програмирање', 'Функције', 'Прототип'],
        question: 'Дати су прототипови функција написани у програмском језику Ц. Заокружити бројеве<br>испред исправно написаних прототипова функција:',
        options: [
            '<span class="code-keyword">float</span>* pp1(<span class="code-keyword">int</span> a, <span class="code-keyword">int</span> b, <span class="code-keyword">int</span> c);',
            '<span class="code-keyword">int</span> pp2(<span class="code-keyword">int</span> a[][10], <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp3(<span class="code-keyword">int</span> a[], n; <span class="code-keyword">float</span> b);',
            '<span class="code-keyword">void</span> pp4(<span class="code-keyword">int</span> *a, <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp5(<span class="code-keyword">int</span> a[][], <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp6(<span class="code-keyword">int</span> a[], <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp7(<span class="code-keyword">int</span> a, b, c);',
            '<span class="code-keyword">float</span>[ ] pp8(<span class="code-keyword">float</span> a[ ], <span class="code-keyword">int</span> n);'
        ],
        correctAnswer: [0, 1, 3, 5],
        points: 2
    },
    {
        id: 36,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке', // Assuming 'Бинарне датотеке' based on content
        tags: ['C', 'Програмирање', 'Бинарне датотеке', 'fopen'],
        question: 'Заокружити бројеве испред понуђених тврдњи које представљају тачне наставке изјаве<br>која се односи на повратну вредност функције <span class="code-keyword">fopen</span>:<br>При покушају да датотеку отворимо за писање, функција <span class="code-keyword">fopen</span>...',
        options: [
            'ако датотека не постоји, креира празну датотеку, поставља се на њен почетак и<br>враћа показивач на ту датотеку',
            'враћа NULL показивач ако датотека не постоји',
            'ако датотека постоји, излази упозорење да ће њен садржај бити уништен при<br>отварању',
            'ако датотека не постоји, изазива грешку која доводи до пуцања програма',
            'ако датотека постоји, уништава њен садржај без упозорења'
        ],
        correctAnswer: [0, 4],
        points: 2
    },
    {
        id: 37,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке', // Assuming 'Бинарне датотеке' based on content
        tags: ['C', 'Програмирање', 'Бинарне датотеке', 'fread', 'Низови'],
        question: 'У програмском језику Ц је декларисана низовна променљива:<br><br><div class="question-code"><span class="code-keyword">int</span> niz[10];</div><br>Заокружити бројеве испред исправно написаних наредби читања низа целих бројева<br>дужине 10 из бинарног фајла на који показује показивач *in:',
        options: [
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> (<span class="code-keyword">int</span>), 10, in);',
            '<span class="code-keyword">fread</span>(&niz, <span class="code-keyword">sizeof</span> (<span class="code-keyword">int</span>), 10, in);',
            '<span class="code-keyword">fread</span>(&niz, <span class="code-keyword">sizeof</span> niz, 1, in);',
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> niz, 1, in);',
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> (niz), 1, *in);',
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> (<span class="code-keyword">int</span>)*10, in);'
        ],
        correctAnswer: [0, 3],
        points: 2
    },
    {
        id: 38,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре', // Based on content
        tags: ['C', 'Програмирање', 'Структуре'],
        question: 'У програмском језику C декларисан је структурни тип података Ucenik, а затим и<br>променљива типа Ucenik:<br><div class="question-code"><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">char</span> ime[50];<br><span class="code-keyword">int</span> razred;<br><span class="code-keyword">int</span> ocene[10];<br>}<span class="code-bold">Ucenik;</span> ...<br><span class="code-keyword">int</span> i; Ucenik x;</div><br>Заокруживањем обележити исправne начине приступа пољима структурне променљиве x:',
        options: [
            'x.ocene[i]',
            '*x.razred',
            'x->ime',
            'x[i].ocene',
            'x.ime'
        ],
        correctAnswer: [0, 4],
        points: 2
    },
    {
        id: 39,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре', // Based on content
        tags: ['C', 'Програмирање', 'Структуре', 'Показивачи'],
        question: 'У програмском језику Ц декларисан је структурни тип података Putovanje, а затим и<br>променљива типа *Putovanje:<br><div class="question-code"><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">char</span> start[50], cilj[50];<br><span class="code-keyword">int</span> kilometraza;<br>}<span class="code-bold">Putovanje;</span> ...<br>Putovanje *p;</div><br>Заокруживањем обележити исправne начине приступа пољима структурне променљиве:',
        options: [
            '*p->kilometraza',
            '(*p).kilometraza',
            '&p->kilometraza',
            'p->start',
            '*(p).start'
        ],
        correctAnswer: [1, 3],
        points: 2
    },
    {
        id: 40,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције', // Based on content
        tags: ['C', 'Програмирање', 'Функције', 'Низови', 'Показивачи'],
        question: 'Дат је прототип функције написан у програмском језику Ц:<br><div class="question-code"><span class="code-keyword">void</span> Saberi(<span class="code-keyword">int</span> n, <span class="code-keyword">int</span> *a, <span class="code-keyword">int</span> *b);</div><br>У main функцији дате су следеће декларације променљивих:<br><div class="question-code"><span class="code-keyword">int</span> x[50][50], y[50], m, j, i;</div><br>Заокружити бројеве испред исправно написаних позива декларисане функције:',
        options: [
            'Saberi(m, y[i], y[i+1]);',
            'Saberi(y[i], x[i], x[i+1]);',
            'Saberi(m, y, x[i][j]);',
            'Saberi(y, x[i], x[i+1]);',
            'Saberi(10, y, x[0]);',
            'Saberi(x[i][j], x[i], x[j]);'
        ],
        correctAnswer: [1, 4, 5],
        points: 3
    },
    {
        id: 41,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције', // Based on content
        tags: ['C', 'Програмирање', 'Функције', 'Показивачи', 'Низови', 'Стрингови'],
        question: 'Дат је прототип функције написан у програмском језику Ц:<br><br><div class="question-code"><span class="code-keyword">void</span> Umetni(<span class="code-keyword">char</span> *a, <span class="code-keyword">char</span> k);</div><br>У main функцији дате су следеће декларације променљивих:<br><div class="question-code"><span class="code-keyword">char</span> s1[20], *s2, s3;</div><br>Заокружити бројеве испред исправно написаних позива декларисане функције:',
        options: [
            'Umetni(s2, s1[i]);',
            'Umetni(s2, s1);',
            "Umetni(s2, 'A');",
            'Umetni(s1, s3);',
            'Umetni(*s2, s3);',
            'Umetni(s3, &s1);'
        ],
        correctAnswer: [0, 2, 3],
        points: 3
    },
    {
        id: 42,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Унос', // Based on content
        tags: ['C', 'Програмирање', 'Унос', 'scanf'],
        question: 'Дата су наредба декларације, а затим и наредба форматираног уноса вредности у<br>променљиве, написана на програмском језику Ц:<br><div class="question-code"><span class="code-keyword">int</span> x, y;<br><span class="code-keyword">scanf</span>("%3i%3i", &x, &y);</div><br>Следи тастатурни унос у облику: 12345 12345<br>За сваку променљиву одредити и на одговарајућу линију уписати, коју ће вредност<br>променљива имати по извршењу наредби:<br>1. променљива х добија вредност х = <input type="text" class="fill-in-input" data-correct="123"><span class="fill-in-indicator"></span><br>2. променљива у добија вредност у = <input type="text" class="fill-in-input" data-correct="45">',
        options: [], // No options for fill-in questions
        correctAnswer: ["123", "45"], // Store correct answers as strings
        points: 2,
        type: 'fill-in'
    },
    {
        id: 43,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори', // Based on content
        tags: ['C', 'Програмирање', 'Оператори'],
        question: 'Дати је декларација променљивих <span class="code-keyword">int</span> a=3, b=15;<br>Израчунати вредност коју ће променљиве имати по извршењу следеће наредбe:<br><br><div class="question-code"><span class="code-keyword">b</span> %= ++ <span class="code-keyword">a</span>;</div><br><br><span class="code-keyword">a</span> = <input type="text" class="fill-in-input" data-correct="4"><span class="fill-in-indicator"></span><br><span class="code-keyword">b</span> = <input type="text" class="fill-in-input" data-correct="3"><span class="fill-in-indicator"></span>', // Store correct answers as strings
        options: [], // No options for fill-in questions
        correctAnswer: ["4", "3"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 44,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условне наредбе', // Based on content - Corrected lecture name
        tags: ['C', 'Програмирање', 'Условне наредбе'],
        question: 'Одредити вредности које ће променљиве х и у имати по извршењу следећег кода:<br><br><div class="question-code"><span class="code-keyword">int</span> x=10;<br><span class="code-keyword">int</span> y=20;<br><span class="code-keyword">if</span> (x>50)<br><span class="code-keyword">x</span>-=10;<br><span class="code-keyword">y</span>+=10;</div><br>Уписати добијене вредности на предвиђене линије:<br>x = <input type="text" class="fill-in-input" data-correct="10"> y = <input type="text" class="fill-in-input" data-correct="30">',
        options: [], // No options for fill-in questions
        correctAnswer: ["10", "30"], // Store correct answers as strings
        points: 2,
        type: 'fill-in'
    },
    {
        id: 45,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условне наредбе',
        tags: ['C', 'Програмирање', 'switch', 'Оператори'],
        question: 'У програмском језуку Ц декларисане су две целобројне променљиве:<br><div class="question-code"><span class="code-keyword">int</span> x=0, izbor;</div><br>За дате вредности променљиве izbor, одреди вредност променљиве х по извршењу<br>следеће наредбе вишестуког гранања и уписати их на предвиђене линије:<br><pre><code><span class="code-keyword">switch</span> (izbor)<br>{<br><span class="code-keyword">case</span> 1: x += 1;<br><span class="code-keyword">case</span> 2: x += 2; <span class="code-keyword">break</span>;<br><span class="code-keyword">case</span> 3: x += 3;<br><span class="code-keyword">default</span>: x = 100;<br><span class="code-keyword">case</span> 4: x += 4;<br><span class="code-keyword">case</span> 5: x += 5;<br>}<br></code></pre><br><div class="fill-in-layout"><div class="fill-in-column">1. за izbor=3, x= <input type="text" class="fill-in-input" data-correct="109"><span class="fill-in-indicator"></span><br>2. за izbor=10, x= <input type="text" class="fill-in-input" data-correct="109"><span class="fill-in-indicator"></span></div><div class="fill-in-column">3. за izbor=4, x= <input type="text" class="fill-in-input" data-correct="9"><span class="fill-in-indicator"></span><br>4. за izbor=2, x= <input type="text" class="fill-in-input" data-correct="2"><span class="fill-in-indicator"></span></div></div>',
        options: [],
        correctAnswer: ["109", "109", "9", "2"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 46,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'Наредбама програмског језика Ц декларисана је правоугаона матрица и три целобројне<br>променљиве:<br><div class="question-code"><span class="code-keyword">int</span> mat [10] [20]; <span class="code-keyword">int</span> x, N, M;</div><br>где N представља број врста, а М број колона правоугаоне матрице mat.<br>Допунити изразима који недостају код петље која има задатак да дуплира све елементе<br>последње колоне матрице:<br><div class="question-code"><span class="code-keyword">for</span>(x = 0; x < <input type="text" class="fill-in-input" data-correct="N"><span class="fill-in-indicator"></span>; x++)<br>&nbsp;&nbsp;mat[ <input type="text" class="fill-in-input" data-correct="x"><span class="fill-in-indicator"></span> ][ <input type="text" class="fill-in-input" data-correct="M-1"><span class="fill-in-indicator"></span> ] *= 2;</div>',
        options: [],
        correctAnswer: ["N", "x", "M-1"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 47,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'Наредбама програмског језика Ц декларисана је правоугаона матрица и три целобројне<br>променљиве:<br><div class="question-code"><span class="code-keyword">int</span> mat [10] [20]; <span class="code-keyword">int</span> k, N, M;</div><br>где N представља број врста, а М број колона правоугаоне матрице mat.<br>Допунити изразима који недостају код петље која има задатак да дуплира све елементе<br>прве врсте матрице:<br><div class="code-block"><pre><code><span class="code-keyword">for</span>(k=0; k < <input type="text" class="fill-in-input" data-correct="M"><span class="fill-in-indicator"></span>; k++)<br>&nbsp;&nbsp;mat[ <input type="text" class="fill-in-input" data-correct="0"><span class="fill-in-indicator"></span> ][ <input type="text" class="fill-in-input" data-correct="k"><span class="fill-in-indicator"></span> ]*=2;</code></pre></div>',
        options: [],
        correctAnswer: ["M", "0", "k"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 48,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори'],
        question: 'Дати су изрази формирани коришћењем математичких оператора. Водећи рачуна о<br>типовима података, одредити вредности датих израза и уписати их линију у продужетку.<br>Ако израз изазива грешку, уместо вредности, написати <span class="code-bold">error</span>:<br><br>1. 10 / 4. = <input type="text" class="fill-in-input" data-correct="2.5"><span class="fill-in-indicator"></span><br>2. 10. / 5 = <input type="text" class="fill-in-input" data-correct="2.0"><span class="fill-in-indicator"></span><br>3. -10 % 3 = <input type="text" class="fill-in-input" data-correct="-1"><span class="fill-in-indicator"></span><br>4. 10. % 5 = <input type="text" class="fill-in-input" data-correct="error"><span class="fill-in-indicator"></span><br>5. 10 % (-3) = <input type="text" class="fill-in-input" data-correct="1"><span class="fill-in-indicator"></span><br>6. (100/3) % 6 = <input type="text" class="fill-in-input" data-correct="3"><span class="fill-in-indicator"></span>',
        options: [],
        correctAnswer: ["2.5", "2.0", "-1", "error", "1", "3"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 49,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Показивачи', 'Петље'],
        question: 'Дата су следеће декларације: <span class="code-keyword">int</span> p[200], i, n, pom;<br>А затим и део кода који треба да врши циклично померање елемената низа р дужине n,<br>за једно место <span class="code-bold">удесно</span>. У коду недостају неки од елемената.<br>Имајући у виду дату иницијализацију петље, у предвиђена поља унеси одговарајуће<br>елементе преписивањем израза из листе понуђених израза (подразумевати да су све<br>потребне променљиве иницијализоване):<br><div class="code-and-options-container"><div class="code-block"><pre><code>pom = <input type="text" class="fill-in-input" data-correct="p[n-1]"><span class="fill-in-indicator"></span>;<br><br><span class="code-keyword">for</span>(i=n-2; i <input type="text" class="fill-in-input" data-correct=">0"><span class="fill-in-indicator"></span>; <input type="text" class="fill-in-input" data-correct="i--"><span class="fill-in-indicator"></span>)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="p[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="p[i-1]"><span class="fill-in-indicator"></span>;<br><br><input type="text" class="fill-in-input" data-correct="p[0]"><span class="fill-in-indicator"></span> = pom;</code></pre></div><div class="options-list">1. p [0]<br>2. p [n-1]<br>3. p [n]<br>4. p [i+1]<br>5. p [i-1]<br>6. p [i]<br>7. i++<br>8. i--<br>9. &gt;=0<br>10. &gt;0</div></div>',
        options: [],
        correctAnswer: ["p[n-1]", ">0", "i--", "p[i]", "p[i-1]", "p[0]"], // Correct answers corresponding to the fill-in inputs in order
        points: 3,
        type: 'fill-in'
    },
    {
        id: 50,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Based on content
        tags: ['C', 'Програмирање', 'Низови', 'Показивачи', 'Петље'],
        question: 'Дата су следеће декларације: <span class="code-keyword">int</span> p[200], i, n, k, x;<br>А затим и део кода који треба да из низа р дужине n, УБАЦИ (инсертује) елеменат x на<br>позицију k, а затим ажурира нову дужину низа.<br>Имајући у виду дату иницијализацију петље, у предвиђена поља унеси одговарајуће<br>елементе преписивањем израза из листе понуђених израза (подразумевати да су све<br>потребне променљиве иницијализоване):<br><div class="code-and-options-container"><div class="code-block"><pre><code><span class="code-keyword">for</span>(i=n; i <input type="text" class="fill-in-input" data-correct=">k"><span class="fill-in-indicator"></span>; <input type="text" class="fill-in-input" data-correct="i--"><span class="fill-in-indicator"></span>)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="p[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="p[i-1]"><span class="fill-in-indicator"></span>;<br><br><input type="text" class="fill-in-input" data-correct="p[k]"><span class="fill-in-indicator"></span> = x;<br><br>n++;</code></pre></div><div class="options-list">1. p [i+1]<br>2. p [i-1]<br>3. p[i]<br>4. p [k]<br>5. i ++<br>6. i - -<br>7. &gt;=k<br>8. &gt;k</div></div>',
        options: [],
        correctAnswer: [">k", "i--", "p[i]", "p[i-1]", "p[k]"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 51,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Based on content
        tags: ['C', 'Програмирање', 'Низови', 'Показивачи', 'Петље'],
        question: 'Дата су следеће декларације: <span class="code-keyword">int</span> p[200], i, n, k, x;<br>А затим и део кода који треба да из низа р дужине n, УБАЦИ (инсертује) елеменат x на<br>позицију k, а затим ажурира нову дужину низа.<br>Имајући у виду дату иницијализацију петље, у предвиђена поља унеси одговарајуће<br>елементе преписивањем израза из листе понуђених израза (подразумевати да су све<br>потребне променљиве иницијализоване):<br><div class="code-and-options-container"><div class="code-block"><pre><code><span class="code-keyword">for</span>(i=n; i <input type="text" class="fill-in-input" data-correct="&gt;k"><span class="fill-in-indicator"></span>; <input type="text" class="fill-in-input" data-correct="i--"><span class="fill-in-indicator"></span>)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="p[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="p[i-1]"><span class="fill-in-indicator"></span>;<br><br><input type="text" class="fill-in-input" data-correct="p[k]"><span class="fill-in-indicator"></span> = x;<br><br>n++;</code></pre></div><div class="options-list">1. p [i+1]<br>2. p [i-1]<br>3. p[i]<br>4. p [k]<br>5. i ++<br>6. i - -<br>7. &gt;=k<br>8. &gt;k</div></div>',
        options: [],
        correctAnswer: [">k", "i--", "p[i]", "p[i-1]", "p[k]"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 52,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Based on content
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'У програмском језику Ц, дате су следеће декларације: <span class="code-keyword">int</span> А[50], i, n;<br>Потребно је формирти вектор са следећим вредностима:<br><br><table><thead><tr><th>i=0</th><th>i=1</th><th>i=2</th><th>i=3</th><th>i=4</th><th>i=5</th><th>...</th><th>i=n-1</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>4</td><td>7</td><td>11</td><td>16</td><td>...</td><td>???</td></tr></tbody></table><br>Допунити програмски код којим се формира овај вектор:<br><div class="code-block"><pre><code>A[0]=1;<br><br><span class="code-keyword">for</span>(i = <input type="text" class="fill-in-input" data-correct="1"><span class="fill-in-indicator"></span>; i <input type="text" class="fill-in-input" data-correct="&lt;n"><span class="fill-in-indicator"></span>; i++)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="A[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="A[i-1]+i"><span class="fill-in-indicator"></span>;</code></pre></div>',
        options: [],
        correctAnswer: ["1", "<n", "A[i]", "A[i-1]+i"], // Correct answers corresponding to the fill-in inputs in order
        points: 3,
        type: 'fill-in'
    },
    {
        id: 53,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори', // Based on content
        tags: ['C', 'Програмирање', 'Оператори', 'Показивачи'],
        question: 'У програмском језику Ц, декларисане су и иницијализоване променљиве:<br><div class="question-code"><span class="code-keyword">int</span> x=40, y=50, z=60, *p1, *p2;</div><br>Одреди које ће вредности имати променљиве x, y и z после извршења следећег кода и<br>упиши на одговарајућу линију:<br><div class="code-block"><pre><code>p1 = &amp;x;<br>p2 = p1;<br>y = (*p2)+20;<br>z = *p2;</code></pre></div><br>x = <input type="text" class="fill-in-input" data-correct="40"><span class="fill-in-indicator"></span>; y = <input type="text" class="fill-in-input" data-correct="60"><span class="fill-in-indicator"></span>; z = <input type="text" class="fill-in-input" data-correct="40"><span class="fill-in-indicator"></span>;',
        options: [],
        correctAnswer: ["40", "60", "40"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 54,
        group: "C - показивачи",
        lecture: "Показивачи и низови",
        tags: ["показивачи", "низови", "C"],
        question: `Дат је део кода написан на програмском језику C:<br><pre>int a[7]={10,25,30,15,40,77,45}, *pa, x, y;
pa=a+4;
x=--(*pa)+5;
y=*(--pa)+5;</pre>Анализирати код и одредити вредности променљивих <b>x</b> и <b>y</b>, као и показивача <b>pa</b>, по извршењу све три извршне наредбе датог кода:<br>x = <input class='fill-in-input' size='2' data-correct='44'> <br>y = <input class='fill-in-input' size='2' data-correct='20'> <br>pa = a + <input class='fill-in-input' size='1' data-correct='3'>`,
        options: [],
        correctAnswer: ["44", "20", "3"],
        type: "fill-in",
        points: 3
    },
    {
        id: 55,
        group: "C - показивачи",
        lecture: "Показивачи и низови",
        tags: ["показивачи", "низови", "C"],
        question: `Дат је део кода написан на програмском језику C:<br><pre>int a[7]={81,12,35,97,40,52,17}, *pa, x, y;
pa=a+3;
x=*(pa-2)+1;
y=(*pa-2)+1;</pre>Анализирати код и одредити вредности променљивих <b>x</b> и <b>y</b>, као и показивача <b>pa</b>, по извршењу све три извршне наредбе датог кода:<br>x = <input class='fill-in-input' size='2' data-correct='13'> <br>y = <input class='fill-in-input' size='2' data-correct='96'> <br>pa = a + <input class='fill-in-input' size='1' data-correct='3'>`,
        options: [],
        correctAnswer: ["13", "96", "3"],
        type: "fill-in",
        points: 3
    },
    {
        id: 56,
        group: "C - функције",
        lecture: "Функције и показивачи",
        tags: ["функције", "показивачи", "C"],
        question: `Датa је дефиниција функције:<br><pre>void Transformisi(float *x, float *y, float z)
{
    z++;
    *x=*x+z;
    (*y)++;
}</pre>У главном програму су декларисане променљиве и извршен је позив функције:<br><pre>float a=10, b=10, c=10;
Transformisi(&a, &b, c);</pre>Одредити које вредности имају променљиве <b>a</b>, <b>b</b> и <b>c</b> по изласку из функције и уписати их на одговарајућу линију:<br>a = <input class='fill-in-input' size='2' data-correct='21'> <br>b = <input class='fill-in-input' size='2' data-correct='11'> <br>c = <input class='fill-in-input' size='2' data-correct='10'>`,
        options: [],
        correctAnswer: ["21", "11", "10"],
        type: "fill-in",
        points: 3
    },
    {
        id: 57,
        group: "C - stringovi i pokazivači",
        lecture: "Stringovi i pokazivači",
        tags: ["stringovi", "pokazivači", "C"],
        question: `На програмском језику Ц декларисан је и иницијализован стринг и два показивача:<br><pre>char s1[] = "Short Message Service", *s2, *s3;
s2 = strchr(s1, 'M'); // <span style='color:blue'>Message Service</span>
s3 = strrchr(s2, 'S'); // <span style='color:blue'>Service</span>
strncpy(s1+1, s2, 1);
strcpy(s1+2, s3);</pre>Одредити и на предвиђену линију уписати садржај означених стрингова по извршењу следећих наредби:<br><br>s1 = <input class='fill-in-input' size='10' data-correct='SMService'> <br>s2 = <input class='fill-in-input' size='10' data-correct='ice'> <br>s3 = <input class='fill-in-input' size='10' data-correct='Service'>`,
        options: [],
        correctAnswer: ["SMService", "ice", "Service"],
        type: "fill-in",
        points: 3
    },
    {
        id: 58,
        group: "C - printf parametri",
        lecture: "Formatirani izlaz",
        tags: ["printf", "formatiranje", "C"],
        question: `Са леве стране дати су допунски параметри у функцији printf, а са десне стране значење тих параметара у програмском језику Ц. На линији испред значења унети број којим је означен одговарајући допунски параметар:<br><br>
1. (#)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='3'> означава да ће се децимална тачка у конверзији рационалних бројева који немају разломљени део.<br>
2. (0)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='4'> означава да се испред позитивног броја мора исписати знак плус<br>
3. (-)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='2'> нула код нумеричких података означава да ће се приликом равнања уз десну ивицу број допуњавати нулама, а не знаковима размак<br>
4. (+)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='1'> означава да ће се поравнавање вршити уз леву ивицу поља ширине n знакова, допунски знакови размака додају се иза, а не испред податка<br>`,
        options: [],
        correctAnswer: ["3", "4", "2", "1"],
        type: "fill-in",
        points: 2
    },
    {
        id: 59,
        group: "C - printf formatiranje",
        lecture: "Formatirani izlaz",
        tags: ["printf", "formatiranje", "C"],
        question: `Декларисана је реална променљива <span class='code-keyword'>float</span> w=123.456;:<br><br>Са леве стране су дати различити прикази вредности променљиве добијени коришћењем наредби форматираног излаза које су приказане са десне стране. Поред сваке наредбе, на предвиђену линију уписати редни број приказа добијеног извршавањем те наредбе:<br><br>
1. 123.456000&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='3'> printf("%g", w);<br>
2. 1.234560e+002&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='1'> printf("%f", w);<br>
3. 123.456&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='4'> printf("%.2f", w);<br>
4. 123.46&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='2'> printf("%e", w);<br>`,
        options: [],
        correctAnswer: ["3", "1", "4", "2"],
        type: "fill-in",
        points: 2
    },
    {
        id: 60,
        group: "C - matematički izrazi i C zapis",
        lecture: "Matematički izrazi i C zapis",
        tags: ["matematika", "izrazi", "C"],
        question: `Са леве стране дати су математички изрази, а са десне запис израза на програмском језику Ц. На линији испред записа израза, унети број којим је означен одговарајући израз:<br><br>
<table style='width:100%;max-width:700px;border-collapse:separate;border-spacing:0 10px;'>
<tr>
  <td style='text-align:right;padding-right:20px;'>1. y = <span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x+10</span></span> / (a + |b|)</td>
  <td><input class='fill-in-input' size='1' data-correct='3'> y = sqrt(x+10) / (a+fabs(b))</td>
</tr>
<tr>
  <td style='text-align:right;padding-right:20px;'>2. y = <span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x+10</span></span> / a + |b|</td>
  <td><input class='fill-in-input' size='1' data-correct='4'> y = sqrt(x+10) / a + fabs(b)</td>
</tr>
<tr>
  <td style='text-align:right;padding-right:20px;'>3. y = (<span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x</span></span> + 10) / (a + |b|)</td>
  <td><input class='fill-in-input' size='1' data-correct='2'> y = (sqrt(x)+10) / (a+fabs(b))</td>
</tr>
<tr>
  <td style='text-align:right;padding-right:20px;'>4. y = <span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x+10</span></span> / a + |b|</td>
  <td><input class='fill-in-input' size='1' data-correct='1'> y = sqrt(x+10) / a+fabs(b)</td>
</tr>
</table>`,
        options: [],
        correctAnswer: ["3", "4", "2", "1"],
        type: "fill-in",
        points: 2
    },
    {
        id: 61,
        group: "C - switch i rezultati",
        lecture: "Switch i rezultati",
        tags: ["switch", "C", "ekranski prikaz"],
        question: `Дат је код на програмском језику Ц:<br><pre>switch(c) {
    case 'A': case 'a': printf("Pravougaonik ");
    case 'B': case 'b': printf("Trougao "); break;
    case 'C': case 'c': printf("Krug ");
    default: printf("Duz "); break;
}</pre><br>Са десне стране су дате вредности променљиве c (скретница), а са леве стране резултат извршења кода за дату вредност скретнице. На линији испред вредности скретнице унети редни под којим је наведен одговарајући екраски приказ:<br><br>
<div style='margin-left:30px;'>
1. Krug Duz <input class='fill-in-input' size='1' data-correct='4' style='margin-left:10px; margin-right:6px;'> 'b'<br>
2. Pravougaonik Trougao Krug Duz <input class='fill-in-input' size='1' data-correct='6' style='margin-left:10px; margin-right:6px;'> 'K'<br>
3. Krug <input class='fill-in-input' size='1' data-correct='5' style='margin-left:10px; margin-right:6px;'> 'A'<br>
4. Trougao <input class='fill-in-input' size='1' data-correct='1' style='margin-left:10px; margin-right:6px;'> 'c'<br>
5. Pravougaonik Trougao<br>
6. Duz<br>
</div>`,
        options: [],
        correctAnswer: ["4", "6", "5", "1"],
        type: "fill-in",
        points: 2
    },
    {
        id: 62,
        group: "C - tipovi promenljivih",
        lecture: "Tipovi promenljivih",
        tags: ["tipovi", "promenljive", "C"],
        question: `Са леве стране су набројани различити типови променљивих, а са десне су дате декларације променљивих у програмском језику Ц. На линији испред декларације унети редни број под којим је наведен одговарајући тип променљиве:<br><br>
<div style='margin-left:30px;'>
1. Једнодимензионални низ<br>
&nbsp;&nbsp;&nbsp;показивача на целе бројеве<br>
&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='3' style='margin-right:6px;'> int *a;<br><br>
2. Вектор целих бројева <input class='fill-in-input' size='1' data-correct='2' style='margin-left:10px; margin-right:6px;'> int a[100];<br>
3. Показивач на цео број <input class='fill-in-input' size='1' data-correct='5' style='margin-left:10px; margin-right:6px;'> int *a[100];<br>
4. Цео број <input class='fill-in-input' size='1' data-correct='1' style='margin-left:10px; margin-right:6px;'> int a;<br>
5. Грешка у декларацији int a(*100);<br>
</div>`,
        options: [],
        correctAnswer: ["3", "2", "5", "1"],
        type: "fill-in",
        points: 2
    }
]; // Closing bracket for questionData

class QuizApp {
    constructor(questions) {
        this.currentQuestion = 0;
        this.score = 0;
        this.flaggedQuestions = new Set();
        this.filteredQuestions = questions;
        this.userAnswers = {};
        this.initializeElements();
        this.setupEventListeners();
        this.loadQuestion();
        
        // Initialize userAnswers from sessionStorage if available
        const savedAnswers = sessionStorage.getItem('userAnswers');
        this.userAnswers = savedAnswers ? JSON.parse(savedAnswers) : {};
        
        // Add event listener for page unload to clean up
        window.addEventListener('beforeunload', () => {
            sessionStorage.removeItem('userAnswers');
        });
    }

    initializeElements() {
        // Initialize all DOM elements
        this.pointsDisplay = document.getElementById('questionPoints'); // Now displays points for the current question
        this.questionText = document.getElementById('questionText');
        this.imageContainer = document.getElementById('imageContainer');
        this.optionsContainer = document.getElementById('options');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.showAnswerBtn = document.getElementById('showAnswerBtn');
        this.exitBtn = document.getElementById('exitBtn');
        this.flagBtn = document.getElementById('flagQuestion');

        // Correctly initialize question number elements
        this.currentQuestionNumber = document.getElementById('currentQuestionNumber');
        this.totalQuestions = document.getElementById('totalQuestions');
        
        // Initialize Summary and Back buttons
        this.summaryBtn = document.getElementById('summaryBtn');
        this.backToQuizBtn = document.getElementById('backToQuizBtn');
        
        // Initialize Summary and Quiz containers
        this.summaryContainer = document.getElementById('summary');
        this.quizMainContainer = document.querySelector('.container'); // Assuming the main quiz content is in .container
        this.summaryTableBody = document.querySelector('#summaryContent tbody'); // Initialize table body

        // Initialize total score display element
        this.totalScoreDisplay = document.getElementById('totalScore');
        // Initialize question ID display element
        this.questionIdDisplay = document.getElementById('questionIdDisplay');
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.showAnswerBtn.addEventListener('click', () => this.showAnswer());
        this.exitBtn.addEventListener('click', () => window.location.href = 'landing.html');
        this.flagBtn.addEventListener('click', () => this.toggleFlag());
        
        // Add event listener for the Summary button
        if (this.summaryBtn) {
            this.summaryBtn.addEventListener('click', () => this.showSummary());
        }
        
        // Add event listener for the Back button in the summary
        if (this.backToQuizBtn) {
            this.backToQuizBtn.addEventListener('click', () => this.hideSummary());
        }
    }

    loadQuestion() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (!question) return;

        // Update progress
        this.updateProgress();

        // Display question ID
        if (this.questionIdDisplay) {
            this.questionIdDisplay.textContent = question.id;
        }

        // Display points for the current question
        if (this.pointsDisplay) {
            this.pointsDisplay.textContent = question.points.toFixed(2); // Display points with 2 decimal places
        }

        // Load image if exists
        this.imageContainer.innerHTML = question.image ? 
            `<img src="${question.image}" alt="Question Image">` : '';

        // Clear previous options/inputs
        this.optionsContainer.innerHTML = '';

        // Set question text - Use innerHTML to interpret HTML tags
        this.questionText.innerHTML = question.question;

        if (question.type === 'fill-in') {
            // Handle fill-in questions
            const inputElements = this.questionText.querySelectorAll('.fill-in-input');
            
            // Initialize or restore user answer for this question
            if (!this.userAnswers[question.id]) {
                this.userAnswers[question.id] = {
                    selectedAnswer: Array(inputElements.length).fill(''),
                    awardedPoints: 0,
                    answerRevealed: false
                };
            }
            
            // Restore saved answers to input fields
            inputElements.forEach((inputElement, index) => {
                const savedAnswer = this.userAnswers[question.id].selectedAnswer[index];
                if (savedAnswer !== undefined) {
                    inputElement.value = savedAnswer;
                }
                
                // Ensure user's previous input if available
                if (this.userAnswers[question.id].selectedAnswer[index] !== undefined) {
                    inputElement.value = String(this.userAnswers[question.id].selectedAnswer[index]);
                } else {
                    inputElement.value = '';
                }
                
                // Apply initial feedback or answer coloring based on answerRevealed state
                // Ensure the indicator span exists for each input
                let indicator = inputElement.nextElementSibling;
                if (!indicator || !indicator.classList.contains('fill-in-indicator')) {
                    indicator = document.createElement('span');
                    indicator.classList.add('fill-in-indicator');
                    inputElement.parentNode.insertBefore(indicator, inputElement.nextSibling);
                }

                if (this.userAnswers[question.id].answerRevealed) {
                    this.applyAnswerColoring(question, this.userAnswers[question.id]);
                } else {
                    this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                }

                // Add event listener to save user input and provide real-time feedback
                inputElement.addEventListener('input', () => {
                    // Update the specific input value in the userAnswer array
                    this.userAnswers[question.id].selectedAnswer[index] = inputElement.value.trim();
                    
                    // Save to sessionStorage after each input change
                    this.saveAnswersToStorage();
                    
                    // Apply coloring and update indicator
                    this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                    
                    // Clear answer revealed flag on input
                    this.userAnswers[question.id].answerRevealed = false;
                });
                
                // Recalculate awarded points when user leaves an input field
                inputElement.addEventListener('blur', () => {
                    // Update the specific input value in the userAnswer array
                    this.userAnswers[question.id].selectedAnswer[index] = inputElement.value.trim();
                    
                    // Save to sessionStorage after blur
                    this.saveAnswersToStorage();
                    
                    // Recalculate points
                    this.userAnswers[question.id].awardedPoints = this.checkAnswerCorrectness(question, this.userAnswers[question.id].selectedAnswer);
                    this.updateProgress();
                });
            });
        } else {
            // Handle multiple choice and single choice questions
            const isMultipleChoice = Array.isArray(question.correctAnswer);

            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';

                const inputType = isMultipleChoice ? 'checkbox' : 'radio';
                const inputName = isMultipleChoice ? `answer-${question.id}` : 'answer';

                // Remove code-keyword span from options if present (specifically for question 24 based on feedback)
                let displayOption = option;
                if (question.id === 24) { // Check specific question ID
                    displayOption = displayOption.replace(/<span class="code-keyword">/g, '').replace(/<\/span>/g, '');
                }

                optionElement.innerHTML = `
                        <input type="${inputType}" name="${inputName}" value="${index}">
                        <label>${displayOption}</label>
                    `;

                const inputElement = optionElement.querySelector(`input[type="${inputType}"]`);

                // Check if user previously answered this question and pre-select inputs
                const userAnswer = this.userAnswers[question.id];
                if (userAnswer) {
                    if (isMultipleChoice && Array.isArray(userAnswer.selectedAnswer)) {
                        if (userAnswer.selectedAnswer.includes(index)) {
                            inputElement.checked = true;
                        }
                    } else if (!isMultipleChoice && userAnswer.selectedAnswer === index) {
                        inputElement.checked = true;
                    }
                }

                // Add event listener to the option element to toggle the input and trigger logic
                optionElement.addEventListener('click', (e) => {
                    // For radio buttons, prevent deselection via click on the label/div
                    if (!isMultipleChoice && inputElement.checked) return; // If already checked, do nothing on radio click

                    // Toggle checked state for checkbox, always check for radio
                    if (isMultipleChoice) {
                        inputElement.checked = !inputElement.checked;
                    } else {
                        inputElement.checked = true; // Ensure radio button gets checked on click
                    }

                    if (isMultipleChoice) {
                        this.handleCheckboxChange(question.id, index, inputElement.checked); // Pass checked state
                    } else {
                        // For radio, ensure only one is selected
                        Array.from(this.optionsContainer.querySelectorAll('input[type="radio"]')).forEach(radio => {
                            if (radio !== inputElement) radio.checked = false;
                        });
                        this.handleRadioChange(question.id, index);
                    }
                    // Apply coloring immediately upon selection/deselection based on the user's current choice(s)
                    this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                });

                // Add separate click handler for the input (both checkbox and radio)
                inputElement.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent the option element click handler from firing
                    
                    if (isMultipleChoice) {
                        this.handleCheckboxChange(question.id, index, inputElement.checked);
                        this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                    } else {
                        // For radio buttons
                        Array.from(this.optionsContainer.querySelectorAll('input[type="radio"]')).forEach(radio => {
                            if (radio !== inputElement) radio.checked = false;
                        });
                        this.handleRadioChange(question.id, index);
                        this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                    }
                });

                this.optionsContainer.appendChild(optionElement);
            });
        }

        // Apply coloring based on the current state (selected, answered, etc.)
        // If the user has revealed the answer (e.g., clicked Show Answer), show the final state
        // Otherwise, show feedback coloring based on current selections
        const userAnswer = this.userAnswers[question.id];

        // Check if the answer has been revealed (e.g., by clicking Show Answer)
        const answerRevealed = userAnswer && userAnswer.answerRevealed;

        if (answerRevealed) {
            this.applyAnswerColoring(question, userAnswer); // Show correct/incorrect highlighting and correct answers
        } else {
            // For non-fill-in questions, clear previous coloring if not answered
            if (question.type !== 'fill-in') {
                this.clearOptionColoring();
            }
            this.applyFeedbackColoring(question, userAnswer); // Show real-time feedback indicators
        }

        // Update flag button
        this.flagBtn.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = this.currentQuestion === this.filteredQuestions.length - 1;
    }

    // Handle checkbox changes
    handleCheckboxChange(questionId, selectedIndex, isChecked) {
        const question = this.filteredQuestions[this.currentQuestion];
        let userAnswer = this.userAnswers[questionId];

        if (!userAnswer) {
            userAnswer = { selectedAnswer: [], awardedPoints: 0, answerRevealed: false }; // Initialize awardedPoints and answerRevealed
            this.userAnswers[questionId] = userAnswer;
        }

        const selectedIndexPos = userAnswer.selectedAnswer.indexOf(selectedIndex);

        if (isChecked && selectedIndexPos === -1) {
            userAnswer.selectedAnswer.push(selectedIndex);
        } else if (!isChecked && selectedIndexPos !== -1) {
            userAnswer.selectedAnswer.splice(selectedIndexPos, 1);
        }

        userAnswer.selectedAnswer.sort((a, b) => a - b);

        // Calculate awarded points based on current selection state
        userAnswer.awardedPoints = this.checkAnswerCorrectness(question, userAnswer.selectedAnswer);
        this.updateProgress();
        // Coloring is now handled by the click event listener calling applyFeedbackColoring
        
        // Save to sessionStorage after change
        this.saveAnswersToStorage();
    }

    // Handle radio changes
    handleRadioChange(questionId, selectedIndex) {
        const question = this.filteredQuestions[this.currentQuestion];
        this.userAnswers[questionId] = {
            selectedAnswer: selectedIndex,
            awardedPoints: this.checkAnswerCorrectness(question, selectedIndex),
            answerRevealed: false
        };
        this.updateProgress();
        // Apply feedback coloring immediately after selection
        this.applyFeedbackColoring(question, this.userAnswers[questionId]);
        
        // Save to sessionStorage after change
        this.saveAnswersToStorage();
    }

    // Check answer correctness and return points
    checkAnswerCorrectness(question, selectedAnswer) {
        if (question.type === 'fill-in') {
            // For fill-in-the-blank
            const inputElements = this.questionText.querySelectorAll('.fill-in-input');
            // Ensure selectedAnswer array is valid and has the correct number of elements
            if (!Array.isArray(selectedAnswer) || selectedAnswer.length !== inputElements.length) {
                return 0; // Return 0 if the number of inputs doesn't match expected answers
            }

            let correctlyFilledCount = 0;
            const totalBlanks = inputElements.length;
            if (totalBlanks === 0) return 0; // Avoid division by zero

            // Iterate through input fields and compare user's input with data-correct attribute
            for (let i = 0; i < totalBlanks; i++) {
                const inputElement = inputElements[i];
                const rawCorrectAnswer = inputElement.getAttribute('data-correct');
                const userAnswer = selectedAnswer[i];

                // Decode HTML entities in both the correct answer and user input for accurate comparison
                const tempElement = document.createElement('div');
                tempElement.innerHTML = rawCorrectAnswer;
                const decodedCorrectAnswer = tempElement.textContent;

                // Create another temp element for user input to handle any HTML entities
                const userTempElement = document.createElement('div');
                userTempElement.innerHTML = userAnswer;
                const decodedUserAnswer = userTempElement.textContent;

                // Compare the decoded answers
                if (decodedUserAnswer.trim().toLowerCase() === decodedCorrectAnswer.trim().toLowerCase()) {
                    correctlyFilledCount++;
                }
            }

            // Award points proportionally only if all correct blanks are filled correctly
            if (correctlyFilledCount === totalBlanks) {
                return question.points;
            } else {
                return 0;
            }
        } else if (Array.isArray(question.correctAnswer)) {
            // For multiple choice
            if (!Array.isArray(selectedAnswer) || selectedAnswer.length === 0) {
                return 0; // No points if nothing selected for multiple choice
            }

            const correctAnswers = question.correctAnswer;
            let correctlySelectedCount = 0;
            let incorrectSelectedCount = 0; // Track incorrect selections

            for (const selectedIndex of selectedAnswer) {
                if (correctAnswers.includes(selectedIndex)) {
                    correctlySelectedCount++;
                } else {
                    incorrectSelectedCount++; // Found an incorrect selection
                }
            }

            // If any incorrect option was selected, award 0 points
            if (incorrectSelectedCount > 0) {
                return 0;
            }

            // If no incorrect options were selected, award points proportionally
            // Ensure all correct answers are selected for full points in multiple choice
            if (correctlySelectedCount === correctAnswers.length && incorrectSelectedCount === 0) {
                return question.points;
            } else {
                 return 0; // Award 0 if not all correct are selected or if any incorrect is selected
            }


        } else {
            // For single choice
            return selectedAnswer === question.correctAnswer ? question.points : 0;
        }
    }

    // Apply coloring based on user's current selection (before revealing the answer)
    applyFeedbackColoring(question, userAnswer) {
         // Clear previous indicators/coloring from ALL inputs (for fill-in)
         // For other types, clear option coloring
         if (question.type === 'fill-in') {
             const inputElements = this.questionText.querySelectorAll('.fill-in-input');
             inputElements.forEach(inputElement => {
                  const indicator = inputElement.nextElementSibling;
                  if(indicator) {
                      indicator.textContent = ''; // Clear indicator text
                      indicator.style.color = '';
                      indicator.style.fontWeight = '';
                  }
                  inputElement.classList.remove('correct', 'incorrect'); // Clear input coloring
             });

         } else {
             const options = this.optionsContainer.children;
             Array.from(options).forEach(option => {
                 option.classList.remove('correct', 'incorrect');
             });
         }

        if (!userAnswer || userAnswer.selectedAnswer === undefined) {
             // If no answer, just clear coloring/indicators and return
             return;
        }

        if (question.type === 'fill-in') {
             const inputElements = this.questionText.querySelectorAll('.fill-in-input');
             inputElements.forEach((inputElement, index) => {
                 const correctAnswer = inputElement.getAttribute('data-correct');
                 // Use the value from the userAnswer.selectedAnswer array for this specific input index
                 const userAnswerValue = userAnswer.selectedAnswer[index] !== undefined ? String(userAnswer.selectedAnswer[index]) : '';
                 const indicator = inputElement.nextElementSibling; // Get the span for the indicator

                 if (indicator) {
                     // Check if user input exists and matches the correct answer for this specific field
                     if (userAnswerValue.trim() !== '') {
                          if (correctAnswer && userAnswerValue.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                             indicator.textContent = '☑'; // Checkmark for correct
                             indicator.style.color = 'green';
                             indicator.style.fontWeight = 'bold';
                             inputElement.classList.remove('incorrect'); // Remove red coloring if previously incorrect
                             inputElement.classList.add('correct'); // Add green coloring for correct input
                         } else {
                             indicator.textContent = '☒'; // Cross for incorrect
                             indicator.style.color = 'red';
                             indicator.style.fontWeight = 'bold';
                             inputElement.classList.remove('correct'); // Remove green coloring if previously correct
                             inputElement.classList.add('incorrect'); // Add red coloring for incorrect input
                         }
                     } else {
                          // If input is empty, clear indicator and coloring
                          indicator.textContent = '';
                          indicator.style.color = '';
                          indicator.style.fontWeight = '';
                          inputElement.classList.remove('correct', 'incorrect');
                     }
                 }
             });
        } else {
            // Handle multiple choice and single choice feedback coloring
            const isMultipleChoice = Array.isArray(question.correctAnswer);
            const options = this.optionsContainer.children;

            if (isMultipleChoice) {
                // For multiple choice, color each selected option based on its correctness
                if (Array.isArray(userAnswer.selectedAnswer)) {
                    userAnswer.selectedAnswer.forEach(selectedIndex => {
                        const optionElement = options[selectedIndex];
                        if (optionElement) {
                             if (question.correctAnswer.includes(selectedIndex)) {
                                optionElement.classList.add('correct'); // Green for selected correct
                            } else {
                                optionElement.classList.add('incorrect'); // Red for selected incorrect
                            }
                        }
                    });
                }
            } else {
                // For single choice, color only the selected option
                const selectedIndex = userAnswer.selectedAnswer;
                if (selectedIndex !== undefined && options[selectedIndex]) {
                    // For single choice, color selected immediately (green if correct, red if incorrect)
                    if (selectedIndex === question.correctAnswer) {
                        options[selectedIndex].classList.add('correct');
                    } else {
                        options[selectedIndex].classList.add('incorrect');
                    }
                }
            }
        }
    }

    // Apply coloring to reveal the full answer state (after Show Answer or on load if answered)
    applyAnswerColoring(question, userAnswer) {
         // Clear previous feedback indicators/coloring from ALL inputs (for fill-in)
         // For other types, clear option coloring
         if (question.type === 'fill-in') {
              const inputElements = this.questionText.querySelectorAll('.fill-in-input');
              inputElements.forEach(inputElement => {
                   const indicator = inputElement.nextElementSibling;
                   if(indicator) {
                       // Clear feedback indicator text but not the displayed correct answer
                       if (!indicator.textContent.startsWith(' (Тачан:')) {
                            indicator.textContent = '';
                            indicator.style.color = '';
                            indicator.style.fontWeight = '';
                       }
                   }
                  inputElement.classList.remove('correct', 'incorrect'); // Remove coloring classes from inputs
              });

         } else {
              const options = this.optionsContainer.children;
              Array.from(options).forEach(option => {
                  option.classList.remove('correct', 'incorrect');
              });
         }


        const isMultipleChoice = Array.isArray(question.correctAnswer);
        const selectedAnswers = userAnswer ? (Array.isArray(userAnswer.selectedAnswer) ? userAnswer.selectedAnswer : [userAnswer.selectedAnswer]) : [];
        const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

        if (question.type === 'fill-in') {
             // For fill-in: show correct answer next to the input and color the input based on correctness
             const inputElements = this.questionText.querySelectorAll('.fill-in-input');
             inputElements.forEach((inputElement, index) => {
                 const correctAnswer = question.correctAnswer && question.correctAnswer[index] !== undefined ? String(question.correctAnswer[index]) : '';
                 const userAnswerValue = userAnswer && userAnswer.selectedAnswer && userAnswer.selectedAnswer[index] !== undefined ? String(userAnswer.selectedAnswer[index]) : '';
                 const indicator = inputElement.nextElementSibling; // Get the span for the indicator

                 // Color the input field based on correctness if user has entered a value or if showing answer
                 if (userAnswerValue.trim() !== '') {
                     if (correctAnswer && userAnswerValue.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                         inputElement.classList.add('correct'); // Green background for correct input
                     } else {
                          inputElement.classList.add('incorrect'); // Red background for incorrect non-empty input
                     }
                 } else if (userAnswer && userAnswer.answerRevealed && correctAnswer !== '') {
                      // If user did not enter a value, and the correct answer exists, color the input red (incorrect/unanswered)
                      inputElement.classList.add('incorrect'); // Red background for unanswered field with a correct answer
                 } else if (userAnswer && userAnswer.answerRevealed && correctAnswer === '') {
                      // If no correct answer is defined for this input, and answer is revealed, ensure no coloring
                       inputElement.classList.remove('correct', 'incorrect');
                 }

                 // Display the correct answer next to the input field if not already shown and correct answer exists
                 if (indicator && correctAnswer !== '' && !indicator.textContent.startsWith(' (Тачан:')) {
                     indicator.textContent = ` (Тачан: ${correctAnswer})`;
                     indicator.style.color = 'green';
                     indicator.style.fontWeight = 'bold';
                 } else if (indicator && correctAnswer === '') {
                     // If no correct answer is defined for this input, clear indicator
                     indicator.textContent = '';
                     indicator.style.color = '';
                     indicator.style.fontWeight = '';
                 }
             });

         } else if (isMultipleChoice) {
             // Highlight all correct answers in green
             const options = this.optionsContainer.children; // Ensure options is defined
              // Clear previous coloring before applying new
             Array.from(options).forEach(option => {
                 option.classList.remove('correct', 'incorrect');
             });
             correctAnswers.forEach(correctIndex => {
                 if (options[correctIndex]) {
                     options[correctIndex].classList.add('correct');
                 }
             });
              // Highlight user's selected answers that are incorrect in red
              selectedAnswers.forEach(selectedIndex => {
                  const options = this.optionsContainer.children; // Ensure options is defined
                  if (options[selectedIndex] && !correctAnswers.includes(selectedIndex)) {
                       options[selectedIndex].classList.add('incorrect');
                  }
              });

         } else {
             // For single choice:
             const options = this.optionsContainer.children; // Ensure options is defined
              // Clear previous coloring before applying new
             Array.from(options).forEach(option => {
                 option.classList.remove('correct', 'incorrect');
             });
             // Highlight the correct answer in green
             if (options[correctAnswers[0]]) {
                 options[correctAnswers[0]].classList.add('correct');
             }
             // If user selected an incorrect answer, highlight it in red
             if (selectedAnswers.length > 0 && selectedAnswers[0] !== correctAnswers[0] && options[selectedAnswers[0]]) {
                  options[selectedAnswers[0]].classList.add('incorrect');
             }
         }
         // Set a flag to indicate that the answer has been revealed
         if (userAnswer) {
              userAnswer.answerRevealed = true;
         }
    }

    // Clear all coloring from options - now also clears fill-in indicators/coloring
    clearOptionColoring() {
         const options = this.optionsContainer.children;
         Array.from(options).forEach(option => {
             option.classList.remove('correct', 'incorrect');
         });
         const inputElements = this.questionText.querySelectorAll('.fill-in-input');
         inputElements.forEach(inputElement => {
             inputElement.classList.remove('correct', 'incorrect');
              const indicator = inputElement.nextElementSibling;
              if(indicator) {
                  indicator.textContent = '';
                  indicator.style.color = '';
                  indicator.style.fontWeight = '';
              }
         });
    }

    updateProgress() {
        // Update the current question number and total questions
        if (this.currentQuestionNumber) {
            this.currentQuestionNumber.textContent = this.currentQuestion + 1;
        }
        if (this.totalQuestions) {
            this.totalQuestions.textContent = this.filteredQuestions.length;
        }
        // Calculate total score based on awarded points for each question
        let totalScore = 0;
        for (const q of this.filteredQuestions) {
            const ans = this.userAnswers[q.id];
            // Check if answer exists and has awardedPoints
            if (ans && ans.awardedPoints !== undefined) { // Check if awardedPoints exists
                totalScore += ans.awardedPoints; // Add awarded points
            }
        }
        this.score = totalScore;
        // Update the main score display element (now totalScoreDisplay)
        if(this.totalScoreDisplay) {
             this.totalScoreDisplay.textContent = this.score.toFixed(2); // Display total score with 2 decimal places
        }
    }

    // selectOption method is deprecated
    selectOption(index) {
        console.warn("selectOption is deprecated. Use handleRadioChange/handleCheckboxChange instead.");
    }

    showAnswer() {
        const question = this.filteredQuestions[this.currentQuestion];
        let userAnswer = this.userAnswers[question.id]; // Get user's answer for this question

        // Initialize user answer structure if it doesn't exist with empty strings for each expected input
        const inputElements = this.questionText.querySelectorAll('.fill-in-input');
        if (!userAnswer) {
             userAnswer = { selectedAnswer: Array(inputElements.length).fill(''), awardedPoints: 0, answerRevealed: false };
             this.userAnswers[question.id] = userAnswer;
        } else {
              // Ensure selectedAnswer array has the correct size and fill with current input values or empty strings if necessary
             // Read current values from inputs to ensure latest state is captured
             const currentInputValues = Array.from(inputElements).map(input => String(input.value).trim());
             userAnswer.selectedAnswer = currentInputValues; // Use current input values

             // Ensure other properties exist if not present (shouldn't happen with proper initialization, but for safety)
             if (userAnswer.awardedPoints === undefined) userAnswer.awardedPoints = 0;
             if (userAnswer.answerRevealed === undefined) userAnswer.answerRevealed = false;
        }

        // Set the answer revealed flag
        userAnswer.answerRevealed = true;

        // Apply final coloring and show correct answers for all question types
        this.applyAnswerColoring(question, userAnswer); // applyAnswerColoring now handles displaying correct answer next to input for fill-in

        // Recalculate and update score immediately after showing answer
        userAnswer.awardedPoints = this.checkAnswerCorrectness(question, userAnswer.selectedAnswer);
        this.updateProgress();
        
        // Save to sessionStorage after showing answer
        this.saveAnswersToStorage();
    }

    toggleFlag() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (this.flaggedQuestions.has(question.id)) {
            this.flaggedQuestions.delete(question.id);
        } else {
            this.flaggedQuestions.add(question.id);
        }
        this.flagBtn.classList.toggle('flagged');
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion(); // loadQuestion will handle coloring based on saved answer
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.filteredQuestions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion(); // loadQuestion will handle coloring based on saved answer
        }
    }

    showSummary() {
        const summary = this.summaryContainer;
        const summaryContentTableBody = this.summaryTableBody;
        const quizContainer = this.quizMainContainer;

        // Clear previous summary content
        if (summaryContentTableBody) {
            summaryContentTableBody.innerHTML = '';
        }

        // Populate the table with filtered questions
        this.filteredQuestions.forEach((question, idx) => {
            const row = document.createElement('tr');

            // Question Number (prikazujemo redni broj u nizu, ne id)
            const questionCell = document.createElement('td');
            questionCell.textContent = `Питање ${idx + 1}`;
            row.appendChild(questionCell);

          // Points Awarded vs Total Points
            const pointsCell = document.createElement('td');
          const userAnswer = this.userAnswers[question.id];
          const awarded = userAnswer && userAnswer.awardedPoints !== undefined ? userAnswer.awardedPoints : 0;
          pointsCell.textContent = `${awarded.toFixed(2)} / ${question.points.toFixed(2)}`; // Display awarded/total points
            row.appendChild(pointsCell);

          // Answered Status (Use icons based on awarded points)
            const answeredCell = document.createElement('td');
            answeredCell.className = 'icon-cell';
            if (userAnswer) {
               if (userAnswer.awardedPoints === question.points) {
                   answeredCell.innerHTML = '<span title="Тачно">☑</span>'; // All points awarded
               } else if (userAnswer.awardedPoints > 0 && userAnswer.awardedPoints < question.points) {
                    answeredCell.innerHTML = '<span title="Делимично тачно">◐</span>'; // Partial points awarded
            } else {
                   // Check if any answer was attempted (relevant for fill-in with multiple blanks)
                   const attempted = question.type === 'fill-in' ?
                       (userAnswer.selectedAnswer ? userAnswer.selectedAnswer.some(ans => String(ans).trim() !== '') : false) :
                       (userAnswer.selectedAnswer !== undefined && userAnswer.selectedAnswer !== null);

                   if (attempted) {
                       answeredCell.innerHTML = '<span title="Нетачно">☒</span>'; // 0 points awarded, but answer attempted
                   } else {
                       answeredCell.innerHTML = '<span title="Није одговорено">☐</span>'; // Not answered at all
                   }
               }
          } else {
              answeredCell.innerHTML = '<span title="Није одговорено">☐</span>'; // Not answered
            }
            row.appendChild(answeredCell);

            // Flagged Status
            const flaggedCell = document.createElement('td');
            flaggedCell.className = 'icon-cell';
            if (this.flaggedQuestions.has(question.id)) {
                flaggedCell.innerHTML = '<span title="Означено">🔖</span>';
            } else {
                flaggedCell.innerHTML = '';
            }
            row.appendChild(flaggedCell);

            if (summaryContentTableBody) {
                summaryContentTableBody.appendChild(row);
            }
        });

        // Hide quiz, show summary
        if (quizContainer) {
            quizContainer.classList.add('hidden');
        }
        if (summary) {
            summary.classList.remove('hidden');
        }
    }

    hideSummary() {
        const summary = this.summaryContainer;
        const quizContainer = this.quizMainContainer;

        // Hide summary, show quiz
        if (summary) {
            summary.classList.add('hidden');
        }
        if (quizContainer) {
             quizContainer.classList.remove('hidden');
        }
         // Optionally, scroll back to the question position
    }

    // Add method to handle flagged questions review
    showFlaggedQuestions() {
        const flaggedQuestions = questionData.filter(q => this.flaggedQuestions.has(q.id));
        
        if (flaggedQuestions.length === 0) {
            alert('No questions flagged for review');
            return;
        }

        this.filteredQuestions = flaggedQuestions;
        this.currentQuestion = 0;
        this.loadQuestion();
    }

    // Add method to save answers to sessionStorage
    saveAnswersToStorage() {
        // Save to sessionStorage instead of localStorage
        sessionStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is index.html before processing URL parameters and potentially redirecting
    if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' || window.location.pathname === 'index.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedArea = urlParams.get('area');
        const selectedQuestion = urlParams.get('question');

        // Check if accessed directly without parameters
        if (!selectedArea && !selectedQuestion) {
            window.location.href = 'landing.html'; // Redirect to landing page
            return; // Stop further script execution
        }

        console.log('Selected Area from URL:', selectedArea);

        let initialQuestions = [...questionData]; 

        if (selectedArea) {
            // Filter questions based on the selected area
            initialQuestions = questionData.filter(question => question.group === selectedArea);
        } else if (selectedQuestion) {
             const questionId = parseInt(selectedQuestion, 10);
             const question = questionData.find(q => q.id === questionId);
             if (question) {
                 initialQuestions = [question];
             } else {
                  alert('Question not found!'); // Alert user if question ID is invalid
                  window.location.href = 'question-selection.html'; // Redirect back to selection
                  return; // Stop further execution
             }
        }


        console.log('Initial Questions count after filtering:', initialQuestions.length); // Debugging line
        console.log('Initial Questions:', initialQuestions); // Debugging line

        const app = new QuizApp(initialQuestions);

         // If a specific question was requested, set the current question index
        if (selectedQuestion) {
             const questionId = parseInt(selectedQuestion, 10);
             const foundIndex = app.filteredQuestions.findIndex(q => q.id === questionId);
             if (foundIndex !== -1) {
                 app.currentQuestion = foundIndex;
                 app.loadQuestion(); // Load the specific question
             }
        }

    }
});

// Countdown dates
const examDates = {
    countdown1: new Date('2025-06-17T09:00:00')
};

function updateCountdown() {
    const now = new Date();
    const countdownElement = document.getElementById('countdown1');
    if (!countdownElement) return;

    const examDate = examDates.countdown1;
    const timeLeft = examDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = '<div class="time"><span>Испит је завршен</span></div>';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    const daysElement = countdownElement.querySelector('.days');
    const hoursElement = countdownElement.querySelector('.hours');
    const minutesElement = countdownElement.querySelector('.minutes');

    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
// Initial update
updateCountdown(); 