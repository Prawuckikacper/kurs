var k = document.getElementById('komunikat');

k.innerHTML = '<span style="color:red">Janusz</span>';

/*k.textContent = '<span style="color:red">Janusz</span>'

Użytkownik podaje z klawiatury swoją narodowość
jeśli poda "Polska" to wyświetli się komunikat na stronie bloku o treści "Polska- najlepszy kraj"
"Niemcy" - "Niemcy"
"inny kraj" - "Może warto spróbować"*/

var kraj = prompt('Podaj swoją narodowość');
if (kraj == 'Polska' || kraj == 'polska')
   k.textContent = 'Polska - najlepszy kraj';
else if (kraj =='Niemcy' || kraj =='niemcy' || kraj =='NIEMCY') {
   k.textContent = 'Niemcy';
   alert('Niemcy');
}
else
   k.textContent = 'Może warto spróbować';

   /* jeżeli użytkownik poda klawiatury prawidłową długość boku to wyświetli mu się:"Pole wynosi:....cm2" oraz "Obwód:...cm"
      Jeżeli dane będą błędne to wyświetli się komunikat o treści: "Błędne dane!" w kolorze czerwonym
      Utwórz nowy blok strony do wyświetlenia komunikatu */

var kw = document.getElementById('komKwadrat');
var bok = parseFloat(prompt('Podaj długość boku'));
if (bok>0){
   let pole = bok*bok;
   let obwod = 4*bok;
   let text = '<hr>Pole wynosi:'+pole+'cm<sup>2</sup><br>';
   text +='Obwód: '+ obwod + 'cm';
   kw.innerHTML= text;

}else {
   kw.innerHTML = '<span style="color:red">Błędne dane!</span>';
}
