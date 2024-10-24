// This array stores the messages
const messages = [
    'Things could always take a turn for the worse.',
    'It\’s not over until it gets worse.',
    'Nothing is so bad that it can\’t get worse.',
    'The only person who cannot doubt you is yourself.',
    'Just when you think it can\'t get worse, it usually does.',
    'Life\'s a rollercoaster, and the lows are often deeper than the highs.',
    'The best way to avoid being surprised by a bad day is to ruin everything right in the morning.'
];

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