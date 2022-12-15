const produto = 100;
const produtoDebito = produto-(produto*10/100);
const produtoDinOuPix = produto-(produto*15/100);
const produto2Vezes = produto;
const produtoMaisde2Vezes = produto+(produto*10/100);
const Pagamentos= "debito"; "pix"; "dinheiro"; "parcelado em até 2"; "parcelado em mais de duas";  
const FormadePagamento = "pix";
if(FormadePagamento === "debito"){
    console.log(produtoDebito);
}
else if(FormadePagamento ==="pix")
{
console.log(produtoDinOuPix);
}
else if(FormadePagamento==="dinheiro")
{
console.log(produtoDinOuPix);
}
else if(FormadePagamento==="parcelado em até 2")
{
    console.log(produto2Vezes);
}
else if(FormadePagamento==="parcelado em mais de duas"){
    console.log(produtoMaisde2Vezes);
}