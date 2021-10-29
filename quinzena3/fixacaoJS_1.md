```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salario = 2000
 let valorCarro = valorTotalVendas / qtdeCarrosVendidos;
 let comissao = 100 + (valorCarro.toFixed(2) * 0.05);
 let valorFinal = qtdeCarrosVendidos * comissao.toFixed(2)
 let salarioTotal =  salario + valorFinal
 
 if(qtdeCarrosVendidos !== 0){
    return Math.round(salarioTotal)
  } else{
    return salario
  }

}
```