//Código del cuadrado---------------------
console.group("cuadrados");

function perimetroCuadrado(ladoCuadrado){
return ladoCuadrado*4;
}
function areaCuadrado(ladoCuadrado){
 return ladoCuadrado * ladoCuadrado;
}
console.groupEnd();

//Código del triángulo-------------------
console.group("Triangulos");

function perimetro_Triangulo(ladoT1, ladoT2, baseT){
return ladoT1 + ladoT2 + baseT;
} ;

function areaTriangulo(baseT, alturaT){
return (baseT * alturaT) / 2;
} 
console.groupEnd();

//Código del círculo----------------------
console.group("Círculo")


function diametroCirculo(radioCirculo){
return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo){
const diametroC = diametroCirculo(radioCirculo);
return diametroC * Math.PI;
} 


function areaCirculo(radioCirculo){
return (radioCirculo * radioCirculo) * Math.PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value =input.value;
    const perimetro =perimetroCuadrado(value);
    alert (perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input_lado1 = document.getElementById("inputLadoT1");
    const input_lado2 = document.getElementById("inputLadoT2");
    const input_base = document.getElementById("inputBaseT3");
    var ladoT1 = parseFloat(input_lado1.value);
    var ladoT2 = parseFloat(input_lado2.value);
    var baseT = parseFloat(input_base.value);
    const perimetro = perimetro_Triangulo(ladoT1, ladoT2, baseT);
    alert (perimetro);
}
function calcularAreaTriangulo(){
    const input_baseT = document.getElementById("inputBaseT3")
    const input_alturaT = document.getElementById("inputAlturaT")
    const baseT = parseFloat(input_baseT.value);
    const alturaT = parseFloat(input_alturaT.value)
    const area = areaTriangulo(baseT, alturaT);
    alert(area);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value =parseFloat(input.value);
    const perimetro =perimetroCirculo(value);
    alert (perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo")
    const value = parseFloat(input.value);
    const area = areaCuadrado(value);
    alert(area);
}