/*var let*/

/*
         zmienna =7;
         zmienna - nazwa zmiennej
         = operator przypisania
         7 - wartość zmiennej


*/
var Imię ="Janusz";
var Nazwisko;
Nazwisko="Nowak";
document.write("Twoje imię:<br>");

var wiek = 21;
/*+ oznacza konkatenacja czyli połączenie string'ów ciąg znaków*/
document.write("Twój wiek: " +wiek );

console.log(wiek);

var x, y;

x = 10;
y = 7;
var suma=x+y;
/*document.write("<br>Suma wynosi "+(x+y));*/
document.write("<br>Suma wynosi: "+suma + "<br>");
/*alert(suma);*/

x=20;
y=2;

var suma= x+y; //22
var różnica= x-y //18
x=19;
y=2;
var iloraz = x/y; //9.5
var iloczyn = x*y //38
console.log("wartość: "+ iloraz);

//modulo reszta z dzielenia

var modulo =x%y;
console.log("wartość: "+modulo);
console.log("suma: "+ suma +", różnica: "+ różnica + ", iloczyn" + iloczyn + ", iloraz " + iloraz + ", modulo: " + modulo);

// potęgowanie
var potega = Math.pow(2, 4); //16
alert("Potęga: " + potega);

//typy danych
var a = 10, b = "10a";
/*alert(a+b); */

console.log(typeof(a)); //number
console.log(typeof(b)); //string
var prawda=true;
console.log(typeof(prawda)); //booLean
var nic=null;
console.log(typeof(nic)); //object
var pusta;
console.log(typeof(pusta)); //undefined

console.log(a+(a%3) -10); //1

/*Systemy liczbowe*/
var dziesietny = 11; // liczba w systemie dziesietnym, decymalnym
var oktalny = 010; // ósemkowy, oktalny
/*
      010=>8
      0 system oktalny
      10=> 1* 8^1 + 0*8^0= 1*8+ 0*1= 8
*/
var szesnastkowy =0x10; // szesnastkowy, hexadecymalny
/*
         0x10=>16
         0x - szesnastkowy
         10 => 1*16^1 + 0*16^0 = 1*16 + 0*1 = 16+0=16
*/
console.log(dziesietny);
console.log(oktalny);
console.log(szesnastkowy);

var liczba1 = prompt("Podaj pierwszą liczbę");
console.log("Podana pierwsza liczba z klawiatury: " + liczba1);
console.log(typeof(liczba1));
liczba1 = parseFloat(liczba1);

var liczba2 = prompt("Podaj drugą liczbę");
console.log("Podana druga liczba z klawiatury: " + liczba2);
console.log(typeof(liczba2));

liczba2 = parseFloat(liczba2);

var suma= liczba1+liczba2;
console.log(liczba1 + liczba2 );


// camelcase liczbaPierwsza
var liczbaPierwsza = parseFloat(prompt("Podaj pierwszą liczbę", "np. 3.5"));
var liczbaDruga = parseFloat(prompt("Podaj drugą liczbę", "np. 3.5"));
suma = liczbaPierwsza + liczbaDruga;
document.write(liczbaPierwsza + "+" + liczbaDruga + "=" + suma);

/* zamiana zmiennych na typ liczbowy
   normalnie program czyta cyfry jako tekst. Parsowanie zamienia tekst na cyfry
*/
/*
      suma dwóch liczb zmiennoprzecinkowych parseFloat
      wyświetl sumę dwóch liczb w formacie: "... +... = ..."
      np 3.5+4=7.5
*/

/*
      Zadanie domowe- program liczący pole prostokąta ( dane podaje użytkownik z klawiatury, liczby zmiennoprzecinkowe)
      Wynik wyświetl na ekranie w formacie: "Bok A: ..., bok B: ... Bok C: ... cm^2" (2 w indeksie gónym)

      Zadanie domowe2 -w/w na trójkąt
      Zadanie domowe3 -w/w na koło
      Math.pi
*/
