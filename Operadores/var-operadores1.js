const numero = 0;
const divisivelPor5 = (numero % 5) ===0 //=== igual
if (numero ===0) {
     console.log('O número é inválido');
}   
else if (numero===5) {
        console.log('O número é inválido')
}
else if(divisivelPor5) {
    console.log ('Sim');
} 
else {
    console.log('Não');
}