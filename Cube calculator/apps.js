// function calculateCube() {
//     var side = parseFloat(document.getElementById("side").value);
//     var volume = side * side * side;
    
//     document.getElementById("result").innerHTML = "Volume: " + volume;
// }

    
    function calcube(){
        var inputval = document.getElementById('numinput').value;
        var cubevalue = inputval*inputval*inputval;
        document.getElementById('numoutput').value = cubevalue.toFixed(2);
    }