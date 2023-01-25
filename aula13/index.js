const nome = prompt("Digite seu nome completo: ");
let nomeLetras = nome.length;
let segundaLetra = nome.charAt(1);
let Ultimas3Letras = nome.slice(-3);
let nomeMaiusculo = nome.toUpperCase();
let nomeMinusculo = nome .toLowerCase();
let primeiroIndice = nome.indexOf("F");
let ultimoIndice = nome.indexOf("A");
let palavras = nome.split(" ")



document.body.innerHTML += `o seu nome é: ${nome}<br />`;
document.body.innerHTML += `a segunda letra do seu nome é: ${segundaLetra} <br />`;
document.body.innerHTML += `O primeiro indice da letra F no seu nome é: ${primeiroIndice}<br /> `;
document.body.innerHTML += `O ultimo indice da letra A no seu nome é: ${ultimoIndice}<br /> `;
document.body.innerHTML += `Seu nome tem ${nomeLetras} letras <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome sao: ${Ultimas3Letras} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavras} <br />`;
document.body.innerHTML += `seu nome com letras maiusculas: ${nomeMaiusculo} <br />`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nomeMinusculo}`;
