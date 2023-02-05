//Memory game
const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `Images/Memory game/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

/* Signup and Login database*/

$(document).ready(function(){
    const APIKEY = "63d37ccd3bc6b255ed0c4356";
    
    //event listener
    $("#submit-button").on("click", function(e){
        e.preventDefault();

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();

        var jsondata = {"username": username,"email": email,"password": password};
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://learnwithblook-2399.restdb.io/rest/login",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
      
          });
    })
    
})

//animal quiz game
const question = document.getElementsByClassName('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "What is the fear of spiders called?",
        choice1: "Arachnophobia",
        choice2: "Spiderphobia",
        choice3: "Acrophobia",
        choice4: "Astraphobia",
        answer: 1,
    },
    {
        question:"How many rows of suckers does an octopus have on each arm?",
        choice1: "3",
        choice2: "5",
        choice3: "2",
        choice4: "10",
        answer: 3,
    },
    {
        question: "What is the life expectancy of a narwhal?",
        choice1: "Up to 30 years old",
        choice2: "Up to 100 years old",
        choice3: "Up to 150 years old",
        choice4: "Up to 50 years old",
        answer: 4,
    },
    {
        question: "In which religion are cobras worshipped?",
        choice1: "Australian",
        choice2: "American",
        choice3: "Indian",
        choice4: "African",
        answer: 3,
    },
    {
        question: "What type of mammal are wolves?",
        choice1: "Herbivorous",
        choice2: "Carnivorous",
        choice3: "Omnivorous",
        choice4: "They like eating everything",
        answer: 2,
    },
    {
        question: "What does 'Tigris' mean in Greek?",
        choice1: "fast running animal",
        choice2: "slow animal",
        choice3: "fast walking animal",
        choice4: "walking animal",
        answer: 1,
    },
    {
        question: "What is a hummingbird's favourite colour?",
        choice1: "Blue",
        choice2: "Green",
        choice3: "Yellow",
        choice4: "Red",
        answer: 4,
    },
    {
        question: "When was the snow leopard first described?",
        choice1: "1785",
        choice2: "1875",
        choice3: "1765",
        choice4: "1775",
        answer: 4,
    },
    {
        question: "How many eggs can a female spider lay at once?",
        choice1: "5000",
        choice2: "20000",
        choice3: "2000",
        choice4: "1000",
        answer: 3,
    },
    {
        question: "Wolves are the sole ancestor of what animal?",
        choice1: "Dogs",
        choice2: "Cats",
        choice3: "Lions",
        choice4: "Bears",
        answer: 1,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();

