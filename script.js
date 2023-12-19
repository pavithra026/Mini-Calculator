function display(value){
    var currentInput = document.getElementById("result").value;
    document.getElementById("result").value = currentInput === '0' ? value : currentInput + value;
}
function ClearScreen(){
    document.getElementById("result").value = "";
}
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
function Delete(){
    var output = document.getElementById("result").value;
    var result = output.slice(0,-1);
    document.getElementById("result").value = result;
}
function square(){
    var res = document.getElementById("result").value
    if(!isNaN(res)){
        document.getElementById("result").value = res * res;
    }else{
        document.getElementById("result").value = "Invalid";
    }
}
