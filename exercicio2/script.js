let numero1 = prompt ("insira um números")
let numero2 = prompt ("insira outro número")

console.log (`O primeiro numero é maior que segundo?${numero1 > numero2}`) //true
console.log (`O primeiro numero é igual ao segundo? ${numero1 ===numero2}`) //false
console.log (`O primeiro numero é divisível pelo segundo? ${numero1 % numero2 ===0}`) //true
console.log (`O segundo numero é divisível pelo primeiro?${numero2 % numero1 ===0}`) //true