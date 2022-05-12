let listaAngajati = '{ "angajati" : [' +
'{"Nume Prenume":"Popovici Tudor",' +
  '"data nasterii": "01.10.1984",'+
  '"numar telefon": "067489789",'+
  '"adresa": "Oras srt Eminescu 1",'+
  '"email":"email@mail.md",'+
  '"gen": "M",'+
  '"functia": "student",'+
  '"data angajarii": "01.10.2000",'+
  '"IDNP": "2002002002222",'+
  '"sumaSalariu": 2002,'+
  '"locul nasterii": "Floresti",'+
  '"stagiu de munca": 20,'+
  '"sectia": "Munca",'+
  '"telefon domiciliu": 20020,'+
  '"program munca": {'+
    '"ore de lucru": "8:00 - 17:00",'+
    '"prinzul": "12:00 - 13:00"}'+
  '},' +
  '{"Nume Prenume":"Popovici Sergiu",' +
  '"data nasterii": "01.10.1984",'+
  '"numar telefon": "067489789",'+
  '"adresa": "Oras srt Eminescu 1",'+
  '"email":"email@mail.md",'+
  '"gen": "M",'+
  '"functia": "student",'+
  '"data angajarii": "01.10.2000",'+
  '"IDNP": "2002002002222",'+
  '"sumaSalariu": 200,'+
  '"locul nasterii": "Floresti",'+
  '"stagiu de munca": 20,'+
  '"sectia": "Munca",'+
  '"telefon domiciliu": 20020,'+
  '"program munca": {'+
    '"ore de lucru": "8:00 - 17:00",'+
    '"prinzul": "12:00 - 13:00"}'+
  '},' +
  '{"Nume Prenume":"Popovici Ion",' +
  '"data nasterii": "01.10.1984",'+
  '"numar telefon": "067489789",'+
  '"adresa": "Oras srt Eminescu 1",'+
  '"email":"email@mail.md",'+
  '"gen": "M",'+
  '"functia": "student",'+
  '"data angajarii": "01.10.2000",'+
  '"IDNP": "2002002002222",'+
  '"sumaSalariu": 20020,'+
  '"locul nasterii": "Floresti",'+
  '"stagiu de munca": 20,'+
  '"sectia": "Munca",'+
  '"telefon domiciliu": 20020,'+
  '"program munca": {'+
    '"ore de lucru": "8:00 - 17:00",'+
    '"prinzul": "12:00 - 13:00"}'+
  '}]}';

  const obj = JSON.parse(listaAngajati);
  let suma=0;
let sal_mediu;
let k = obj.angajati.length;
let sal_min, sal_max;

for (i=0; i<k; i++){
  console.log("sumaSalariu", obj.angajati[i].sumaSalariu);
suma=suma+obj.angajati[i].sumaSalariu;
}
sal_mediu=suma/k;

sal_min = obj.angajati[0].sumaSalariu;
sal_max = obj.angajati[0].sumaSalariu;
for (i=1;i<k;i++){
   if(sal_min>obj.angajati[i].sumaSalariu) sal_min = obj.angajati[i].sumaSalariu;
   if(sal_max<obj.angajati[i].sumaSalariu) sal_max = obj.angajati[i].sumaSalariu;
}



document.getElementById("suma").innerHTML = suma;
document.getElementById("sal_min").innerHTML = sal_min;
document.getElementById("sal_max").innerHTML = sal_max;
document.getElementById("sal_mediu").innerHTML = sal_mediu;