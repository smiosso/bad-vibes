// This array stores the messages
const messages = [
    'Things could always take a turn for the worse.',
    'It\’s not over until it gets worse.',
    'Nothing is so bad that it can\’t get worse.',
    'The only person who cannot doubt you is yourself.',
    'Just when you think it can\'t get worse, it usually does.',
    'Life\'s a rollercoaster, and the lows are often deeper than the highs.',
    'The best way to avoid being surprised by a bad day is to ruin everything right in the morning.',
    'No motivational quotes today: if you want to quit, just quit.',
    'That\'s life. One day you lose, the next you don\’t win, and the day after that, someone beats you.',
    'Don\’t cry, it\’ll get worse later.',
    'Unfortunately, we can\’t win them all, but apparently, losing them all is totally possible.',
    'Life is a soup, and you’re holding a fork.',
    'I want you to know that someone cares, not me, but someone.',
];

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
    const yourMessage = messages[randomIndex];
    button.innerHTML = 'I am not convinced. Try again.';
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
        button.innerHTML = 'Ok, that\'s enough, come back tomorrow';
        button.disabled = true;
    }
};