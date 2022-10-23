document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: "cheesburger",
            img: "images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "cheesburger",
            img: "images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    let grid = document.querySelector('.grid');
    let result = document.querySelector('#result');
    let cardChosen = [];
    let cardChosenId = [];
    let cardWon = [];


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();

    function CheckForMatch() {
        var cards = document.querySelectorAll('img');
        let optionOne = cardChosenId[0];
        let optionTwo = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1]) {
            cards[optionOne].setAttribute('src', 'images/white.png');
            cards[optionTwo].setAttribute('src', 'images/white.png');
            cards[optionOne].removeEventListener('click', flipCard);
            cards[optionTwo].removeEventListener('click', flipCard);

            cardWon.push(cardChosen);
        }
        else {
            cards[optionOne].setAttribute('src', 'images/blank.png');
            cards[optionTwo].setAttribute('src', 'images/blank.png');
        }

        cardChosen = [];
        cardChosenId = [];
        result.textContent = cardWon.length;
        if (cardWon.length === cardArray.length/2) {
            result.innerHTML = "";
            result.innerHTML = " Congrulations you found all of them";
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(CheckForMatch, 1000);
        }
    }
});