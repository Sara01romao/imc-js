
function calcular(){
    var peso= document.getElementById('peso').value;
    var altura= document.getElementById('altura').value;
    var al= parseFloat(altura)*parseFloat(altura);//altura ao quadrado
    
    var imc = parseFloat(peso)/al;
    imc=imc.toFixed(2)//pegar duas casas depois da vígula
   
    document.getElementById('result').innerHTML= imc;




    // document.getElementById('msg').innerHTML= "sara";//escrever mgs no label
    

    if (imc <= 18.5) {

      document.getElementById('msg').innerHTML="Seu IMC é classificado como MAGREZA";
      
       } else if (imc >= 18.5 && imc <= 24.9) {
      
        document.getElementById('msg').innerHTML="Seu IMC é classificado como NORMAL";
      
      
       } else if (imc >= 25 && imc <= 29.9) {
      
        document.getElementById('msg').innerHTML="Seu IMC é classificado como SOBREPESO";
      
       } else if (imc >= 30 && imc <= 39.9) {
      
        document.getElementById('msg').innerHTML="Seu IMC é classificado como OBESIDADE";
      
       } else {
        document.getElementById('msg').innerHTML="Seu IMC é classificado como OBESSIDADE GRAVE";
      
       }
  
  }






  $(document).ready(function(){
		$("#peso").mask("000.00");
		$("#altura").mask("0.00");
	});// para mascara dos inputs





