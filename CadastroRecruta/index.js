//Define as váriaveis para salvar as informações
let primeiroNome;
let segundoNome;
let anoNascimento;
let campoDeEstudo;
const nomeRecruta = document.getElementById('nome-recruta');
const texto = document.getElementById('texto');

//Solicita as informações
primeiroNome = prompt('Digite o seu primeiro nome: ');
segundoNome = prompt('Digite seu segundo nome: ');
anoNascimento = Number(prompt("Em que ano você nasceu?: "));
campoDeEstudo = prompt("Que área vc estuda?: ")

//Calcula a idade baseada no ano informado.
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

//exibe na página as informações
nomeRecruta.innerHTML = primeiroNome + ' ' +  segundoNome;
texto.innerHTML += `<p>Você tem ${idade} anos.</p>`
texto.innerHTML += `<p>Sua área de estudos: ${campoDeEstudo}.</p>`




