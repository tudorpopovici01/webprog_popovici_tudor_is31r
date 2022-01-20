let username = prompt('Indicati username', '');
let password = prompt('Indicati password', '');

const username1 = "username";
const password1 = "password";




if (username == username1 && password == password1)   {
  alert( 'salut' );
} else if (username == username1 && password != password1){
  alert( ' parola gresita' );
} else if (username != username1 && username.length >0){
  alert( ' username gresit' );
} else if (username.length == 0 && password.length == 0){
  alert( ' validare gresita' );
} 