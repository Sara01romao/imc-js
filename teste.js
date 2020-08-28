
  function somarValores(){
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = parseInt(s1) + parseInt(s2);
    alert(s3);

  }



function calcular(){
    var n1= document.getElementById('n1').value;
    var n2= document.getElementById('n2').value;
    var soma =parseFloat(n1)+parseFloat(n2);
    

    document.getElementById('result').value= soma;
    
  
   

}



function calcular(){
  var peso= document.getElementById('peso').value;
  var altura= document.getElementById('altura').value;
 
  
  var imc = parseFloat(peso)/parseFloat(altura)^2;
 
  document.getElementById('result').value= imc;

  document.getElementById('t').value= ("ola")
  

 

}