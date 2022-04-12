function extractCurrencyValue(str){
  return  str.substring(1, str.length );
  }

    alert(extractCurrencyValue('$120') == 120);