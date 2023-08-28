const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{

const pesoIMC = Number(frm.peso.value)
const alturaIMC= Number(frm.altura.value)

const imc= pesoIMC/(alturaIMC*alturaIMC)


if(imc<=18.5) {
    resp.innerHTML=`Seu imc é ${imc.toFixed(2)} (Abaixo do peso)`
    } else if(imc>=18.6 && imc<=24.9){
        resp.innerHTML=`Seu imc é ${imc.toFixed(2)} (Peso normal)`
    } else if(imc>=25 && imc<=29.9){
        resp.innerHTML=`Seu imc é ${imc.toFixed(2)} (Sobrepeso)`
    } else if(imc>=30 && imc<=34.9) {
        resp.innerHTML=`Seu imc é ${imc.toFixed(2)} (Obesidade grau 1)`
    } else if(imc>=35 && imc<=39.9){
            resp.innerHTML=`Seu imc é ${imc.toFixed(2)} (Obesidade grau 2)`
    } else if(imc>=40){
            resp.innerHTML=`Seu imc é ${imc.toFixed(2)} (Obesidade grau 3)`
    } else {
        resp.innerHTML='Valor iválido'
    }        
e.preventDefault();
})

