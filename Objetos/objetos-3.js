class Carros{
marca;cor;gasto;
constructor(marca, cor, gasto){
    this.marca=marca;
    this.cor=cor;
    this.gasto=gasto;
}
calcularGastoDaViagem(distancia, precocombustivel){
    return distancia*this.gasto*precocombustivel
}
}
const uno = new Carros("fiat", "vermelho", 1/12)
console.log(uno);
console.log(uno.calcularGastoDaViagem(70,5));
const palio= new Carros("fiat","prata", 1/14);
console.log(palio.calcularGastoDaViagem(67,5));