const etanol= 5.79;
const gasolina=6.66;
const gastoPorKm=10;
const distanciaPorKm=100;
const tipoCombustivel = 'gasolina';

const resultadoEtanol= (distanciaPorKm/gastoPorKm);
const resultadoGasolina= (distanciaPorKm/gastoPorKm);
const valorGasto= resultadoEtanol*etanol;
const valorGasto2= resultadoGasolina*gasolina;

if (tipoCombustivel ==="etanol") { 
console.log(valorGasto.toFixed(2));

} else {
    console.log(valorGasto2.toFixed(2));
}