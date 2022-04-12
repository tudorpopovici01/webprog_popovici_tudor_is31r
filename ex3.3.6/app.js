function work()
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index =  numbers.length - 1; index >= 4; index--) {
   if(numbers[index] != 5) numbers [index + 2] = numbers[index] ;
   if(index == 4) {
    numbers [index] = 0;
    numbers [index +1] = 0;
    numbers [index +2] = 0;
   }
}
return numbers
}
alert(work());

/*for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}*/

  