var k = document.getElementById('komunikat');
var x = prompt('Chcesz obliczyć pole kwadratu, prostokątu czy trójkąta?');
var boka, bokb, pole;

/*   if (x=='k'){
      boka = prompt('Podaj długość boku kwadratu');
      pole = boka * boka;
      k.innerHTML ='Pole kwadratu wynosi:' + pole + 'cm<sup>2</sup>';
   }

else if (x == 'p'){
   boka = prompt('Podaj długość boku A');
   bokb = prompt('Podaj długość boku B');
   pole = boka * bokb;
   k.innerHTML ='Pole prostokąta wynosi:' + pole + 'cm<sup>2</sup>';
}else if (x == 't'){
   boka = prompt('Podaj długość boku A');
   bokb = prompt('Podaj długość wysokości w trójkącie');
   pole = 0.5 * boka * bokb;
   k.innerHTML = 'Pole trójkąta wynosi:' + pole + 'cm<sup>2</sup>';
}else{
   k.innerHTML = '<span style="color:red">Błędne dane!</span>';
}
*/

switch (x){
   case 'k':
      bok = prompt('podaj bok kwadratu');
      pole = bok * bok;
      k.innerHTML = 'Pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
      break;
   case 'p':
      boka = prompt('Podaj dł boku a');
      bokb = prompt('Podaj dł boku b');
      pole = boka * bokb;
      k.innerHTML = 'Pole prostokąta wynosi: ' + pole + 'cm<sup>2</sup>';
      break;
   case 't':
      boka = prompt('Podaj dł podstawy');
      bokb = prompt('Podaj wysokość');
      pole = 0.5 * boka * bokb;
      k.innerHTML = 'Pole trójkąta wynosi: ' + pole + 'cm<sup>2</sup>';
      break;
   default:
      k.innerHTML = '<span style="color:red"> Błędne dane! </span>';
}



/* Napisz program który poprosi użytkownika o podanie swojego wieku.
   Jeśli będzie miał więcej niż 18 lat, to przekieruje go na stronę: wp.pl, w przeciwnym razie na stronę dla dzieci z bajkami*/



   var wiek = prompt('Podaj wiek');
   if (wiek > 18)
      wiek = 'dorosły';
   switch (wiek) {
      case 'dorosły':
         window.location = 'http://wp.pl';

         break;

      default:
      window.location = 'https://www.youtube.com/?gl=PL&hl=pl';

   }
