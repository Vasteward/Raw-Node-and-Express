class Deck{
    constructor(){
        this.deck= [];

    }
    shuffle(){
        for(var i = 0; i < 1000; i++){
            var location 
        }
    }
    reset(){

    }
    deal(){
        //return card, 
    }
}


class Card{
    constructor(){
        this.card= [];
        var suit=['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        var value=['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        // for(let s in suit){
        //     for(let v in value){
        //         this.card.push(`${value.v} of ${suit.s}`);
        //     }
        // console.log(value)
        // console.log(suit)
        // console.log(this.card)
        // console.log(value)
        // for(let s in suit){
            for(let v in value){
                this.card.push(`${v} of ${s}`)
            }
    }
}
var card1 = new Card();
console.log(card1.card);


class Player{
    constructor(name){

    }
    take(){

    }
    dicard(){

    }
}

