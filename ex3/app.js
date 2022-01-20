let a = prompt('indicati a');
let b = prompt('indicati b');
let c = prompt('indicati c');
let max ;
let min ;
if (a>b) {max = a; min = b;}
else {max = b; min = a;}
if (max<c) max = c; 
if(min>c) min = c;

alert ('max = '+ max + ' min = ' + min );

