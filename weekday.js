function week(){
    var d= Number(document.getElementById('days').value)
    switch(d){
        case 1: document.write("monday")
        break;
        case 2: document.write("tuesday")
        break;
        case 3: document.write("wednesday")
        break;
        case 4: document.write("thursday")
        break;
        case 5: document.write("friday")
        break;
        case 6: document.write("saturday")
        break;
        case 7: document.write("sunday")
        break;
        default: document.write("enter correct input")
        break;
    }
}