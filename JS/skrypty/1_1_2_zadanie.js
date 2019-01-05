var k = document.getElementById('komunikat');
var x  = prompt('Chcesz obliczyć pole kwadratu, prostokątu czy trójkąta?');
var boka, bokb, pole, ;

   if (x=='k'){
      boka = prompt('Podaj długość boku kwadratu');
      pole = boka * boka;
      k.innerHTML ='Pole kwadratu wynosi:' + pole + 'cm<sup>2</sup>';
   }

}else if (x == 'p'){
   boka = prompt('Podaj długość boku A');
   bokb = prompt('Podaj długość boku B');
   pole = boka * bokb;
   k.innerHTML ='Pole prostokąta wynosi:' + pole + 'cm<sup>2</sup>';
}else if (x == 't'){
   boka = prompt('Podaj długość boku A');
   bokb = prompt('Podaj długość wysokości w trójkącie');
   pole = 0.5 + * + boka + * + bokb;
   k.innerHTML = 'Pole trójkąta wynosi:' + pole + 'cm<sup>2</sup>';
}else{
   kw.innerHTML = '<span style="color:red">Błędne dane!</span>';
}
