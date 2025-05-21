-- C# Programming Database
CREATE DATABASE csharp_programming_db;
USE csharp_programming_db;

-- Tabela za pitanja
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_text TEXT NOT NULL,
    question_type ENUM('multiple_choice', 'fill_in') NOT NULL,
    difficulty_level INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela za multiple choice pitanja
CREATE TABLE multiple_choice_questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_id INTEGER NOT NULL,
    options JSON NOT NULL,
    correct_answer_index INTEGER NOT NULL,
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

-- Tabela za fill-in pitanja
CREATE TABLE fill_in_questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_id INTEGER NOT NULL,
    correct_answer TEXT NOT NULL,
    alternative_answers JSON,
    hint TEXT,
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

-- Dodavanje prvog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дати су типови променљивих у програмском језику C#. Одредити како се назива променљива која је дефинисана унутар неког метода.', 'multiple_choice', 1);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Глобална променљива", "Статичка променљива", "Блоковска променљива", "Локална променљива"]', 3);

-- Dodavanje drugog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Одредити какви могу бити чланови класе (поља и методе) у програмском језику C#.', 'multiple_choice', 1);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Локални и глобални", "Процедурални и непроцедурални", "Статички (класни) и нестатички (објектни)", "Спољашњи и унутрашњи"]', 2);

-- Dodavanje trećeg pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Одредити која поља су заједничка и јединствена за све креиране објекте неке класе дефинисане у објектно оријентисаном програмском језику C#.', 'multiple_choice', 1);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Јавна", "Приватна", "Објектна", "Инстанцна", "Статичка"]', 4);

-- Dodavanje četvrtog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# класа може да садржи статичка и не-статичка (инстанцна) поља. Дате су изјаве које се односе на статичка поља класе и међу њих је уметнута једна изјава која се односи на не-статичка (инстанцна) поља класе.', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Поље које се може се користити без конструисања иједног објекта те класе", "Поље које има исту вредност за све креиране објекте неке класе", "Поље чија се вредност може разликовати за сваки појединачни објекат неке класе", "Поље које се може користити унутар статичких метода класе, као и унутар метода инстанце"]', 2);

-- Dodavanje petog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Заокружити број испред исказа који представља исправан наставак дате тврдње: При креирању објеката изведене класе...', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["извршава се само конструктор изведене класе", "прво се извршава конструктор родитељске класе, али само ако је позван кључном речју base", "обавезно се прво извршава конструктор изведене, а потом конструктор родитељске класе", "обавезно се прво извршава конструктор родитељске, а потом конструктор изведене класе"]', 3);

-- Dodavanje šestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# користи се службена реч base. Проценити који од наредних исказа који дефинишу дату службену реч НИЈЕ тачан.', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Службена реч base може послужити за позивање конструктора родитељске класе", "Службена реч base може послужити за позивање приватних метода родитељске класе којима се другачије не може приступити", "Службена реч base може послужити за позивање заклоњеног метода родитељске класе", "Службена реч base може послужити за позивање заклоњеног поља родитељске класе"]', 1);

-- Dodavanje sedmog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат је код програма у програмском језику C#: 
namespace TestPrimer { 
    class Program  
    { 
        static void Main(string[] args) 
        { 
            Console.WriteLine(fun(17)); 
        } 
        public int fun(int n) { return n; } 
        public void fun(int n){ Console.WriteLine(n); } 
    } 
} 
Анализирати код и заокружити број испред очекиваног одговора:', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Програм има грешку, јер се не може одредити коју верзију преоптерећеног метода fun(…) треба позвати", "Програм има грешку, јер је друга верзија преоптерећеног метода fun(…) дефинисана али се нигде не позива", "Програм се нормално извршава и приказује 17 једанпут", "Програм се нормално извршава и приказује 17 двапут"]', 0);

-- Dodavanje osmog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат je код програма у програмском језику C# који формира и штампа елементе низа а. Анализирати дати код и проценити шта ће се догодити након његовог извршавања. 
namespace TestPrimer { 
    class Program { 
        static void Main(string[] args){ 
            int[] a = new int[5];        
            for (int i = 0; i < a.Length; i++) a[i] = i; 
            Console.Write(a[i] + " "); 
        } 
    } 
}', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Програм приказује бројеве 0 1 2 3 4 на екрану", "Програм има грешку, јер ће у последњој наредби Console.Write методa Main покушати приступ непостојећем елементу а[5]", "Програм приказује број 5 на екрану", "Програм има грешку, јер променљива i у последњој наредби Console.Write у методу Main неће имати дефинисану вредност"]', 3);

-- Dodavanje devetog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# дата је декларација низа: 
int к; 
int[ ] brojevi = {5, 12, 37, 7, 27, 33, 36}; 
 
На основу дате декларације одредити шта је резултат позива 
k=Arrays.BinarySearch(brojevi, 37);', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["k=0, јер метод BinarySearch прво изврши сортирање низа у опадајућем редоследу, па онда тражи задату вредност", "метод BinarySearch баца изузетак увек када је низ неуређен и програм „пуца"", "k=2, јер се тражени елеменат налази на позицији 2", "k добија неочекивану вредност јер низ мора бити сортиран у растућем поретку пре позива методе BinarySearch", "k=6, јер метод BinarySearch прво изврши сортирање низа у растућем редоследу, па онда тражи задату вредност"]', 3);

-- Dodavanje desetog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# дата је декларација једне стринг и једне целобројне променљиве, као и део кода: 
 
string str = "Primer"; 
int broj = 66; 
Console.WriteLine(str + broj + 65); 
Console.WriteLine(broj + 65 + str); 
 
Анализирати код и проценити шта ће се приказати на екрану након његовог извршења.', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Primer6665\n131Primer", "Primer6665\n6665Primer", "Primer131\n131Primer", "PrimerBA\nBAPrimer"]', 0);

-- Dodavanje jedanaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат је код у програмском језику C#, који дефинише рекурзивни метод. Анализирати код и одредити резултат извршавања задатог метода. 
 
public long fun(int n){ 
            return n * fun(n - 1); 
}', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Резултат позива fun(3) je 1", "Резултат позива fun(3) je 2", "Резултат позива fun(3) je 6", "Позив fun(3) изазива грешку јер производи бесконачан ланац позива истог метода fun(…)."]', 3);

-- Dodavanje dvanaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат је код у програмском језику C#, који дефинише рекурзивни метод. Анализирати код и одредити резултат који ће се приказати на екрану. 
 
namespace TestPrimer {  
    class Program { 
        static void Main(string[] args) { 
            fun(2);             
        } 
        public static void fun(int n) { 
            while (n > 1) { 
                Console.Write((n - 1) + " "); 
                fun(n - 1); 
            } 
        } 
    } 
}', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Програм на екрану не приказује ништа", "Програм на екрану приказује 1 2 3", "Програм на екрану приказује 3 2 1", "Програм на екрану бесконачно приказује 1 1 1 1 1 ….", "Програм на екрану бесконачно приказује 2 2 2 2 2 …."]', 3);

-- Dodavanje trinaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# дат је рекурзивни метод који проверава да ли је неки стринг палиндром. Да би код био комплетиран потребно је допунити трећи ред условом if наредбе. 
 
1. public static bool palindrom(String s) 
2. { 
3.    if (s.Length <= 1) return true;  //bazni slučaј 
4.    else if (___________________) return false; 
5.    else return palindrom(s.Substring(1, s.Length - 2)); 
6. }', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["s[0] != s[s.Length - 1]", "s[0] != s[s.Length]", "s[1] != s[s.Length - 1]", "s[1] != s[s.Length]"]', 0); 

-- Dodavanje četrnaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# дат је рекурзивни метод који проверава да ли је неки string палиндром. Да би код био комплетиран потребно је допунити седми ред. 
 
1. public static bool Palindrom(String s){ 
2.    return Palindrom(s, 0, s.Length - 1); 
3. } 
4. public static bool Palindrom(String s, int levi, int desni){ 
5.    if (desni <= levi) return true; // bazni slucaj 
6.    else if (s[levi] != s[desni]) return false; 
7.    else return _______________________; 
8. }', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Palindrom(s)", "Palindrom(s, levi, desni)", "Palindrom(s, levi + 1, desni - 1)", "Palindrom(s, levi + 1, desni)", "Palindrom(s, levi, desni - 1)"]', 2); 

-- Dodavanje petnaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('У програмском језику C# дат је рекурзивни метод за бинарно претраживање сортираног целобројног низа. Да би код био комплетиран потребно је допунити девети ред (означен линијом) помоћу понуђеног одговора. 
 
1.  public static int TraziBroj(int[] niz, int broj) { 
2.      return TraziBroj(niz, broj, 0, niz.Length - 1); 
3.  } 
4.  public static int TraziBroj(int[] niz,int broj,int levi,int desni) { 
5.    if(levi > desni) return -1; // broj nije nadjen u nizu 
6.    int sredina = (levi + desni) / 2; 
7.    if(broj < niz[sredina]) return TraziBroj(niz, broj, levi,sredina-1); 
8.    else if(broj > niz[sredina]) return ______________________________; 
9.    else return sredina; 
10.  }', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["TraziBroj(niz, broj, sredina + 1, levi)", "TraziBroj(niz, broj, sredina - 1, levi)", "TraziBroj(niz, broj, desni, sredina + 1)", "TraziBroj(niz, broj, sredina + 1, desni)"]', 3); 

-- Dodavanje šesnaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат је код програма у програмском језику C#. Анализирати дати код и проценити његову тачност. 
 
namespace TestPrimer { 
    class Test { 
        int x; 
        public Test(string s){ 
            Console.WriteLine("Klasa Test"); 
        } 
        static void Main(string[] args){ 
            Test t = null; 
            Console.WriteLine(t.x); 
        } 
    } 
}', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Програм има грешку јер променљива x није иницијализована", "Програм има грешку јер класа Test нема подразумевани конструктор", "Програм има грешку јер се у некој класи не може декларисати променљива типа те исте класе, као што је то овде случај са променљивом t", "Програм има грешку јер променљива t није иницијализована и има вредност null у моменту када се приказује поље t.x", "Програм нема грешака и нормално се извршава, не приказујући ништа на екрану"]', 3); 

-- Dodavanje sedamnaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дата је дефиниција класе у програмском језику C#. Проценити где у дефиницији класе (испред које методе) треба заменити знакове ??? службеном речју static. 
  
1.  public class Test {  
2.      private int broj; 
3.           
4.      public ??? int kvadrant(int n) { return n * n; } 
5.      public ??? int getBroj() { return broj; } 
6.  }', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Метода kvadrant МОРА да буде статичка, док метода getBroj може и не мора", "Обе методе морају бити статичке", "Ни једна од дефинисаних метода није статичка", "Метода getBroj НЕ СМЕ да буде статичка, док метода kvadrant може и не мора"]', 3); 

-- Dodavanje osamnaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дата je дефиниција класе у програмском језику C# и састоји се од два конструктора, методе и поља x и y. У шестом реду написати конструктор копије објекта класе Point.  
 
1.  public class Point { 
2.      private double x, y; 
3.      public Point() { x = 0; y = 0; } 
4.      public void Set(double xx, double yy){ x=xx; y=yy; } 
5.      public Point(Point p) { 
6.         ____________________//Odgovor 
7.      } 
8.    }', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["this(p.x, p.y)", "this(p)", "Set(p)", "Set(p.x, p.y)"]', 3); 

-- Dodavanje devetnaestog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат је код програма у програмском језику C# којим су дефинисане две класе: class Program која садржи Main(string[] args) методу и class KlasaA. Анализирати дати код и одредити да ли је код исправно написан. Понуђени одговори дају опис последица извршавања овог кода. 
 
class Program { 
     public static void Main(string[] args){ 
            KlasaA a1 = new KlasaA (); 
            KlasaA a2 = new KlasaA (); 
            Console.WriteLine(a1.Equals(a2));  
     } 
} 
class KlasaA { 
     int x; 
     public bool Equals(KlasaA a){ 
            return this.x == a.x; 
     } 
}', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Програм има грешку, јер се изразом a1.Equals(a2) проверава једнакост објеката а1 и а2 различитог типа од Object", "Програм има грешку, јер се једнакост објеката а1 и а2 типа KlasaА проверава изразом а1 == а2", "Програм се извршава без грешке и приказује се true на екрану", "Програм се извршава без грешке и приказује се false на екрану"]', 2); 

-- Dodavanje dvadesetog pitanja
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Дат је код програма у програмском језику C# којим су дефинисане две класе: class Program која садржи Main(string[] args) методу и class KlasaA. Анализирати дати код и одредити да ли је код исправно написан. Понуђени одговори дају опис последица извршавања овог кода. 
 
class Program { 
     public static void Main(string[] args){ 
            Object a1 = new KlasaA(); 
            Object a2 = new KlasaA(); 
            Console.WriteLine(a1.Equals(a2));  
     } 
} 
class KlasaA { 
     int x; 
     public bool Equals(KlasaA a){ 
            return this.x == a.x; 
     } 
}', 'multiple_choice', 2);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["Програм има грешку, јер се изразом a1.Equals(a2) проверава једнакост објеката а1 и а2 различитог типа од Object", "Програм има грешку, јер се једнакост објеката а1 и а2 типа KlasaА проверава изразом а1 == а2", "Програм се извршава без грешке и приказује се true на екрану", "Програм се извршава без грешке и приказује се false на екрану"]', 3); 