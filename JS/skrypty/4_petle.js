/*for (var i = 1; i <= 10; i++){
   document.write(i + " ");
}
*/
/* inkrementacja i++  i = i + 1
   inicjalizacja pętli   var i = 0
   warunek   i <= 10
   uaktualnianie i++
   for oznacza tworzenie pętli
   */

   /* napisz program któy wyświetli liczby od 13 do 20 w pętli for każda cyfra ma być zapisana w nowej linii*/

/*for (var i = 13; i <= 20; i++){
   document.write(i + "<br>");
}*/

/*
Wypisz liczby od 5-30 które są podzielne przez 5
*/
//       1 sposób
/*for (var i = 5; i <= 30; i += 5){
   document.write(i + " ");
}

//      2 sposób
for (var i = 5; i <= 30; i++){
   if (i % 5 == 0)
      document.write(i + "");
}*/

/* Wypisz liczbt parzyste z przedziału <10, 50> malejąco, po każdej liczbie zrób przecinek i spację. Po ostatniej liczbie wyświetl kropkę. */

/*for (var i = 50; i >= 10; i--){
   if (i % 2 == 0)
   if (i == 10)
      document.write(i + ".");
   else
      document.write(i + ",");
}
document.write('<hr>')*/
/*
użytkownik podaje z klawiatury 2 liczby. Jeśli 1 bedzie <= do 2 to wyświetl dane jak w/w
Jeśli 1 będzie >= do 2 to wyświetl jak w 1
*/

/*var l1 = prompt("Podaj pierwszą cyfrę zakresu");
var l2 = prompt("Podaj drugą cyfrę zakresu");
   if (l1 <= l2){
      for (var i = l1; i <= l2; i++){
         if (i == l2)
         document.write(i + ".")

         else
      document.write(i + ",")
}
} else{
   for (var i = l1; i >= l2; i--){
      if (i == l2)
         document.write(i + '.')
      else
      document.write(i + ',')
   }
}*/
/*użytkownik podaje z klawiatury 3 liczby zmiennoprzecinkowe, wyświetl na ekranie sumę tych liczb i podaj czy suma jest parzysta

*/

/*var suma = 0;
var y;

for (i = 1; i<= 3; i++){
   y = parseFloat(prompt("Podaj wartość nr "+ i + ":"));
   suma += y;
}
document.write('Suma wynosi: ' + suma );


*/
/*var poziom = prompt('Jaki max poziom ma choinka?')
var znak = prompt('Z jakich znaków ma być choinka?')
var i,j;

for (i=1;i<=poziom;i++)
{
    for (j=1;j<=i;j++)
    {
    document.write(znak + ' ');
    }
    document.write("<br>");
}
document.write("<br>");
*/

//                      MACIERZ
var x=1

for (var i=1; i<=10; i++){
for (var j=1; j<=10; j++){
   if (i==j){
document.write('x');
if (x<10) {
   if (i % 2 == 0)
}else {
   document.write('<span style="color:green">0' + x + '</span>');
else
   document.write('0' + x + '');
   if (j % 2 == 0)
   document.write('<span style="color:green">0' + x + '</span>');
   else
   document.write('0' + x + '');
   document.write('0'+ x + ' ')
}else{
   document.write(x + '')
}
}
x++;
}
document.write('<br>');
}
