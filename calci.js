function Display(val) {
    document.getElementById("result").value += val;
}
 
// Evaluates the given express and return the result
function calculate() {
    var val = document.getElementById("result").value;
    var res = eval(val);
    document.getElementById("result").value = res;
}
 
// Function to clear the textarea
function clr() {
    document.getElementById("result").value = ""
}
 
// Function to remove/delete last character
function cancel() {
    var value = document.getElementById("result").value;
 
    document.getElementById("result").value
        = value.substr(0, value.length - 1);
} 