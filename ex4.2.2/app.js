//У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;

if (Object.keys(salaries).length !== 0)
    {
for ( let i in salaries){
   sum = sum + salaries[i];
}
}
    console.log(sum);


//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

//Если объект salaries пуст, то результат должен быть 0.
