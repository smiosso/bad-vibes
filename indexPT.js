// This array stores the messages
const messagesPT = [
    'As coisas sempre podem piorar.',
    'É só o fim quando piora de vez.',
    'Nada é tão ruim que não possa piorar.',
    'A única pessoa que não pode duvidar de você é você mesmo.',
    'Quando você acha que não pode piorar, geralmente piora.',
    'A vida é uma montanha-russa, e os baixos são frequentemente mais profundos que os altos.',
    'A melhor maneira de evitar ser surpreendido por um dia ruim é estragar tudo logo de manhã.',
    'Hoje não temos citações motivacionais: se quiser desistir, desista.',
    'A vida é assim. Um dia tu perde, no outro tu não ganha, e no outro ganham de ti.',
    'Chora não, depois piora.',
    'Infelizmente não dá para a gente ganhar todas, mas perder todas aparentemente dá sim.',
    'Tu vai calar a boca de muitos que te elogiaram.',
    'A vida é uma sopa, e tu está de garfo.',
    'Eu quero que tu saiba que alguém se importa, eu não, mas alguém'

]

// This variable stores the button
let button = document.getElementById('button');

//This variable stores the space to the message
let buttonMessage = document.getElementById('buttonMessage');

// This function will choose a random message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const yourMessage = messagesPT[randomIndex];
    button.innerHTML = 'Eu não estou convencido. Tentar de novo.';
    iAmCounting();
    buttonMessage.innerHTML = yourMessage;
    
}

// event listener
button.onclick = getRandomMessage;

// This variable count the clicks
let = countingClicks = 0;

// This function will count the clicks
function iAmCounting() {
    countingClicks += 1;
    if (countingClicks >= 2) {
        button.innerHTML = 'Ok, já chega, volte amanhã';
        button.disabled = true;
    }
};