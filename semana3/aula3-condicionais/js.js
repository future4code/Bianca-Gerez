/*EXERCÍCIO 1

 O teste verifica se o numero inserido pelo usuario e par ou impar. Se for par : Passou no teste, se for impar: não passou no teste.


 EXERCÍCIO 2

a. Para que serve o código acima
R: O codigo acima mostra o valor da fruta inserida pelo usuario
************
b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R: O Preço da fruta Maça e R$2,25
*************
c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
R: Pagaria ao todo R$24,8
*************
d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
R: Ao retirar o break da case Pera, a mesma e interpretada como default que foi definido como valor 5.

EXERCÍCIO 3

R: Sera mostrado uma mensagem de erro informando que mensagem não foi definido. A variavel mensagem foi definida dentro do bloco if, desta forma, ele não pode ser acessado fora dentro deste escopo, por essa razão o mesmo não funciona.

EXERCÍCIO 4

const primeiroNumero = Number(prompt("Digite o primeiro numero"))
const segundoNumero = Number(prompt("Digite o segundo numero"))
if (primeiroNumero > segundoNumero) {
   console.log (primeiroNumero , segundoNumero)
} 
if (primeiroNumero < segundoNumero) {
   console.log (segundoNumero  , primeiroNumero)
}
R: Se os 2 numeros forem iguais, não e mostrada nenhum numero pois não foi definido a mensagem em caso de igualdade.
    b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais?
*//*
const primeiroNumero = Number(prompt("Digite o primeiro numero"))
const segundoNumero = Number(prompt("Digite o segundo numero"))
const terceiroNumero = Number(prompt("Digite o terceiro numero"))
if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
   console.log (primeiroNumero , segundoNumero , terceiroNumero)
} 
else if (primeiroNumero > terceiroNumero && terceiroNumero > segundoNumero){
console.log (primeiroNumero , terceiroNumero , segundoNumero)
} 
else if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
   console.log (terceiroNumero, segundoNumero, primeiroNumero)
}
 else if (primeiroNumero < terceiroNumero && terceiroNumero < segundoNumero){
 console.log (primeiroNumero , terceiroNumero , segundoNumero)
} 
else if  (segundoNumero > primeiroNumero && primeiroNumero > terceiroNumero){
console.log (segundoNumero , primeiroNumero ,terceiroNumero)
}
else if (segundoNumero < primeiroNumero && primeiroNumero < terceiroNumero){
console.log (segundoNumero , primeiroNumero , terceiroNumero)
} 
else if (segundoNumero < terceiroNumero &&  terceiroNumero < primeiroNumero){
console.log (segundoNumero , terceiroNumero , primeiroNumero)
}
else if (segundoNumero > terceiroNumero &&  terceiroNumero > primeiroNumero){
console.log (segundoNumero , terceiroNumero , primeiroNumero)
}
else if (terceiroNumero > primeiroNumero &&  primeiroNumero > segundoNumero){
console.log (terceiroNumero , primeiroNumero , segundoNumero)
}
else if (terceiroNumero < primeiroNumero &&  primeiroNumero < segundoNumero) {
console.log (terceiroNumero , primeiroNumero , segundoNumero)
}
else if(terceiroNumero < segundoNumero && segundoNumero < primeiroNumero){
console.log (terceiroNumero , segundoNumero , primeiroNumero)
}
else (terceiroNumero > segundoNumero && segundoNumero  > primeiroNumero){
console.log (terceiroNumero , segundoNumero , primeiroNumero)
}
/*R: Os três aparecem.

EXERCÍCIO 5

Vertebrado ou invertebrado
    |              
possui pelos / não possui pelos
 |                |
sim          possui penas - não > e animal terrestre ? - não > peixe
  |                 |                      |
é racional?        Sim                    sim
  |       |         |                      |
  sim     não      ave                    reptil
   |       |
   sh      m 
sh*ser humano | m*mamifero */


 /* b
*********** RESPOSTA *****************
const invertebrado = prompt("O animal é invertebrado ? [s/n]?")
if (invertebrado === "s"){
console.log("Invertebrado")
}else if (invertebrado === "n") {
const possuiPelos = prompt("O animal possui pelos ? [s/n]?")  
} else if(possuiPelos === "s"){
const racional = prompt("O animal e racional? [s/n]")
} else if (racional === "s"){
  console.log("Ser humano")
} else if (racional ==="n"){
  console.log("Mamifero")
} else if (possuiPelos === "n"){
  const possuiPenas = prompt ("O animail possui penas ? [s/n]")
} else if (possuiPenas === "s"){
  console.log("Ave")
} else if (possuiPenas === "n"){
  const aniTerrestre = prompt ("O animal é terrestre ? [s/n]")
} else if (aniTerrestre === "s"){
console.log("Reptil")
} else if (aniTerrestre === "n"){
  console.log("Peixe")}
/*