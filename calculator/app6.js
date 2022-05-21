let operationUser = new Operation("val1", "val2", "rez");
function Operation(val1Holder, val2Holder, rezHolder){
    this.val1Hldr = document.getElementById(val1Holder);
    this.val2Hldr = document.getElementById(val2Holder);
    this.rezHldr = document.getElementById(rezHolder);
    this.value1 = 0;
    this.value2 = 0;
    this.rez = 0;
    this.initVars = function(){
        this.value1 = parseInt(this.val1Hldr.value);
        this.value2 = parseInt(this.val2Hldr.value);
    }
    this.displayRez = function(){
        this.rezHldr.value = this.rez;
    }
    this.validateNumber = function(){
        let mesaj = "";
        var sablon =  new RegExp("^[0-9]{0,100}$");
        if ((!(sablon.test(this.val1Hldr.value)))||(!(sablon.test(this.val2Hldr.value)))) {
            mesaj = "Introduceti un numar corect";
        }
        document.getElementById('info').innerHTML = mesaj;
    }
    this.getSum = function(){
        this.initVars();
        this.rez = (("" + this.val1Hldr.value == "") || ("" + this.val2Hldr.value == "")) ? "Introduceti numerele" : this.value1 + this.value2;
        this.displayRez();
    }
    this.getProd = function(){
        this.initVars();
        this.rez = (("" + this.val1Hldr.value == "") || ("" + this.val2Hldr.value == "")) ? "Introduceti numerele" : this.value1 * this.value2;
        this.displayRez();
    }
    this.getDiff = function(){
        this.initVars();
        this.rez = (("" + this.val1Hldr.value == "") || ("" + this.val2Hldr.value == "")) ? "Introduceti numerele" : this.value1 - this.value2;
        this.displayRez();
    }
    this.getDiv = function(){
        this.initVars();
        this.rez = (("" + this.val1Hldr.value == "") || ("" + this.val2Hldr.value == "")) ? "Introduceti numerele" : this.value1 / this.value2;
        this.displayRez();
    }
    this.delValues = function(){
        this.val1Hldr.value = "";
        this.val2Hldr.value = "";
        this.rezHldr.value = "";
    }

}
