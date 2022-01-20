let a = prompt('indicati a');
let b = prompt('indicati b');
let s = 0;
for (let i=Number(a); i<=Number(b); i++){
  if (i%2 == 0) s = s+i;
} 
alert ('suma ='+ s);

