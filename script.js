function calcular(){

    var q1 = parseFloat(document.getElementById('q1').value);
    var q2 = parseFloat(document.getElementById('q2').value);
    var d = parseFloat(document.getElementById('d').value);

    var result = (9000000000 * q1 *q2) / (d* d)  ;

    document.getElementById('resultado').innerText = result;
 
}

function calcular2(){

    var q = parseFloat(document.getElementById('q').value);
    var v = parseFloat(document.getElementById('v').value);
    var b = parseFloat(document.getElementById('b').value);
    var sen = parseFloat(document.getElementById('sen').value);
    


    var result2 = q * v * b * sen  ;

    document.getElementById('resultado2').innerText = result2;
 
}