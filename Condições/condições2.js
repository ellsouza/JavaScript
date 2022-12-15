const nota1 = 0;
const nota2= 0;
const nota3=0 ;
media=(nota1+nota2+nota3)/3
console.log(media.toFixed(2));

if (media >=5 && media <=7){
    console.log("Recuperação"); 
}
else if(media > 7){
    console.log("Aprovado");
}
else if(media >1 && media< 5 ){
    console.log("Reprovado");
}
else if (media === 0){
    console.log("Não realizou nenhuma atividade");
}
