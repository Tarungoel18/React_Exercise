let deck = [5, 9, 7, 1, 8];

// First
const getFirstCard = (deck) => {
    let [firstCard] = deck;
    console.log(firstCard);
};

getFirstCard(deck); //ans -> 5




// Second question
const getSecondCard = (deck) => {
    let [first, second] = deck;
    console.log(second);
};

deck = [3, 2, 10, 6, 7];
getSecondCard(deck); //   ans-> 2


// Third Question
deck = [10, 7, 3, 8, 5];
const swapTopTwoCards = (deck) => {
    const [firstCard, secondCard, ...rest] = deck;
    deck = [secondCard, firstCard, ...rest];
    console.log(deck);
};
swapTopTwoCards(deck); //ans ->    [7, 10 , 3 , 8 , 5]

// Fourth Question
deck = [2, 5, 4, 9, 3];

const discardTopCard = (deck) => {
    const [firstCard, ...rest] = deck;

    finalDeck = [firstCard, rest];
    console.log(finalDeck);
};

discardTopCard(deck); //ans->    [2 , [5,4,9,3]]

//Fifth question
deck = [5, 4, 7, 10];

const insertFaceCards = (deck) => {
    const newValues = ["jack", "queen", "king"];
    const [firstCard, ...rest] = deck;
    const newDeck = [firstCard, ...newValues, ...rest];
    console.log(newDeck); // ans->  [5 , "jack", "queen", "king" ,4, 7, 10]
};

insertFaceCards(deck);