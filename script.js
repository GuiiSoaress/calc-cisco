function calcular(){

    var q1 = parseFloat(document.getElementById('q1').value);
    var q2 = parseFloat(document.getElementById('q2').value);
    var d = parseFloat(document.getElementById('d').value);

    var result = (9000000000 * q1 *q2) / (d* d)  ;

    document.getElementById('resultado').innerText = result;
 
}