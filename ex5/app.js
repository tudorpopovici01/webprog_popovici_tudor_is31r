function extractCurencyValue(str){
  return + str.substring(1, str.length);
  }
  alert(extractCurencyValue('$120')===120);