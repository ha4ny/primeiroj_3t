// console.log("Console: Alô Mundo...");
// alert("Alerta: Alô mundo...");
let tabuada = 2;

let serie= 1;
function meChame(){
    document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) +"<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) +"<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) +"<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) +"<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) +"<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) +"<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) +"<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) +"<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) +"<br>");
    
}

//aprendo for..
function minhaTabuada(){
 for(var i=1 ; i <= 10; i++){

   for(var j = 1; j <= 10; j++){
    document.write(tabuada + " x " + j +" = " + (tabuada*i) +"<br>");
}
 }
document.write(<br></br>);

}
function quadrado(){
for(var i = 2; i < 21; i++){
    document.write("O quadrado de " + i + "é" + (i*i) + "<br>")
}



function total(){
    let val = document.getElementById("valor").value;
    let ju = document.getElementById("juros").value;

    if(!number(val)){
     alert("o valor deve ser um numero.");
     document.getElementById("valor").value = "";
     document.getElementById("valor").focus();
    return
    }
    if(!number(ju)){
        alert("o valor deve ser um numero.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
       return
    }
    let resultado = (val * (1+ (ju/100)));
    document.write("o resultado é " + resultado);
}


function soma (){
let v1= document.getElementById("v1").value;
let v2= document.getElementById("v2").value;
let r= (v1 + v2);
document.getElementById("resultado").innerHTML = r;
}

function subtrair (){
    let v1= document.getElementById("v1").value;
    let v2= document.getElementById("v2").value;
    let r= (v1 + v2);
    document.getElementById("resultado").innerHTML = r;
    }
    
function dividir(){
let v1= document.getElementById("v1").value;
let v2= document.getElementById("v2").value;
let r= (v1 + v2);
document.getElementById("resultado").innerHTML = r;
}        
function multiplicar(){
    let v1= document.getElementById("v1").value;
    let v2= document.getElementById("v2").value;
    let r= (Number(v1) * Number(v2));
    document.getElementById("resultado").innerHTML = r;
}
 
}
