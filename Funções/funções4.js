function calcularImc(peso,altura){
    return peso/Math.pow(altura, 2);
}
function classificarImc(IMC){
    if(IMC<18.5){
   return "Abaixo do peso";
        }
    else if(IMC =>18.5 && IMC <= 25) {
       return "Peso Ideal";
    }
    else if(IMC <=25 && IMC >= 30){
       return "Acima do Peso";
    }
    else if(IMC => 30 && IMC <=40){
        return "Obeso";
    }
    else if(IMC => 40){
        return "Obesidade Grave";
    }
    
}
function main() {
const peso=70;
const altura=1.79; 

const IMC= calcularImc(peso, altura);
console.log(classificarImc(IMC));
}

main();