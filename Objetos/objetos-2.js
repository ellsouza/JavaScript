class Pessoa{
    nome;peso;altura
    constructor(nome,peso,altura){
        this.nome=nome;
        this.peso=peso;
        this.altura=altura;
        }
    calcularIMC(){
    return    this.peso/Math.pow(this.altura,2);
   }
   classificarImc(){
    const IMC = this.calcularIMC();
        if(IMC < 18.5){
       return ("Abaixo do peso");
            }
        else if(IMC >=18.5 && IMC <= 25) {
           return ("Peso Ideal");
        }
        else if(IMC <=25 && IMC >= 30){
           return ("Acima do Peso");
        }
        else if(IMC => 30 && IMC <=40){
            return ("Obeso");
        }
        else if(IMC >= 40){
            return ("Obesidade Grave");
        }
        
   }
}
const jose = new Pessoa("jose", 70, 1.75)
console.log(jose.classificarImc());

const renan = new Pessoa("renan", 63,1.75);
console.log(renan.classificarImc());

const ellen = new Pessoa("ellen", 57, 1.64);
console.log(ellen.classificarImc());
