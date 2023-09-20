const frases = [
    "Calma ai",
    "Bom dia",
    "Fala ae",
    "É o seguinte",
    "Então",
    "Deixa eu te falar",
    "Qual que é a fita?",
    "O barato é o seguinte",
    "Que que foi?"

    // Adicione mais frases de início aqui
];

const apelidos = [
    "Tuti Fruto",
    "Siririco",
    "Lacraio",
    "Camisinho",
    "Sabugo",
    "Mussarelo",
    "Mortadelo",
    "CNPJoto",
    "Touca de Linguiça",
    "Bruxo do Setenta e Um",
    "Xoxoto",
    "Perebo",
    "Testosterono",
    "Canjico",
    "Limonado",
    "Capivaro"
    // Adicione mais apelidos aqui
];


function gerarMensagemAleatoria() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    const apelidoAleatorio = apelidos[Math.floor(Math.random() * apelidos.length)];

    const mensagemAleatoria = `${fraseAleatoria}, ${apelidoAleatorio}.`;

    return mensagemAleatoria;
}

const mensagemGerada = gerarMensagemAleatoria();
console.log(mensagemGerada);