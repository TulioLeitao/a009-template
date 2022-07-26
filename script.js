// Aula guiada
/*const nome = prompt ("Qual é o seu nome?");
const cor = prompt ("qual sua cor favorita");

let frase1 = "A cor favorita de " + nome + " é " + cor
console.log(frase1);

let frase2 = `A cor favorita de ${nome} é ${cor}`;

console.log(frase2);

const citacao = prompt ("Qual é a sua citação favorita");

frase1 = `${frase1}, e a citação favorita é "${citacao}"`; //usando o template string

console.log (frase1);

frase2 = "Nome: " + nome + "\n Cor favorita: " + cor; //usando concatenação

console.log (frase2);

frase2 = `Nome: ${nome} 
Cor favorita: ${cor}`; //usando o template string, não precisa do \n para quebra de linha

console.log (frase2);

console.log (`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`);
console.log (`O nome possui a Letra "A": ${nome.includes("A")}`);*/

const nome = prompt ("Por favor, insira seu nome:")
const email = prompt ("Por favor, insira seu e-mail:")
const cebolinha = nome.replaceAll ("r","l");

console.log (`O e-mail ${email} foi cadastrado com sucesso, seja bem vindo ${nome}.
O seu nome possui ${nome.length} carcteres.
Legal né?!`);
console.log (`O Cebolinha falaria o seu nome assim: ${cebolinha}`);
console.log (email.includes("@"));























