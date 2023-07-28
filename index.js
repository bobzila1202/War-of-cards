//Generate an array object of cards 
let cards = []
// let suit = 'Spades'
const cardList = [`A`, `K`, `Q`, `J`,`10`, `9`, `8`, `7`, `6`, `5`, `4`, `3`, `2`]

let card = {}
    //Nest for suite loops inside a number loop to generate the objects (cards)
    
    for (i = 0; i < cardList.length; i++) {
        card = {
            name: this.name,
            number: this.number
        }

        card.name = cardList[i]
        card.number = cardList.length - i
        
        
        
        cards.push(card)
        // cards.push(card)
        // cards.push(card)
        // cards.push(card)
        
    }
    let deck = Array(4).fill(cards)
//console.log(deck)

let flatDeck = deck.flat()
    const shuffledDeck = []
while (flatDeck.length > 0) {
    const randomIndex = Math.floor(Math.random() * flatDeck.length)
    shuffledDeck.push(flatDeck.at(randomIndex))
    flatDeck.splice(randomIndex,1)
    }
// console.log(shuffledDeck)
// console.log(flatDeck)
//randomise the distribution 
let player1 = []
let player2 = []
player1 = [...shuffledDeck.slice(shuffledDeck.length / 2)]
player2 = [...shuffledDeck.splice(0, shuffledDeck.length / 2)]

   console.log(player1)
   console.log(player2)
   
//Make two seperate and equal arrays, consisting of cards from the first array

//Input a key and both you and the compupter will reveal first object within respective arrays

//Compare the two objects scores and whoever has the highest score adds both objects to their array 

//If the cards have the same score initiate WAR

// place down 3 more cards and then a fourth card.

// use the fourth card to compare scores, highest score takes ALL CARDS

// if not enough cards then just use the last card to compare

//repeat everything until one person has no cards left