let age = prompt('Indicati virsta', '');

/*if (age < 14 || age > 90) {
  alert( 'age nu apartine [14; 90]' );
}else {
  alert( ' apartine [14; 90]' );
} */



if (!(age >= 14 && age <= 90)) {
  alert( 'age nu apartine [14; 90]' );
} else {
  alert( ' apartine [14; 90]' );
}