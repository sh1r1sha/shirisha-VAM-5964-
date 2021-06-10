var a,b,result;

function getValue(){
 a = Number(document.getElementById('firstNumber').value)
 b = Number(document.getElementById('secondNumber').value)

}
function add(){

    getValue()
    result = a+b
    // document.getElementById('result').innerHTML = result 
    document.getElementById('result').value = result
}
function sub(){
    getValue()
    result = a-b
    // document.getElementById('result').innerHTML = result
    document.getElementById('result').value = result
}
function mul(){
    getValue()
    result = a*b
    // document.getElementById('result').innerHTML = result
    document.getElementById('result').value = result
}
function div(){
    getValue()
    result = a/b
    // document.getElementById('result').innerHTML = result
    document.getElementById('result').value = result
}