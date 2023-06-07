/*
    CIT 281 Project 1
    Name: Jevon Owen-Kennedy
*/

const alphabet = ['a','b','c','d','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let myString = ""

for (let i = 1 ; i< getRandomInteger(5,26);i++){
    let num = getRandomInteger(0,25)
    
    myString = myString + alphabet.at(num)
     
    //console.log(myString)
    //console.log(alphabet.at(getRandomInteger(0,25)));

}
console.log(myString)



// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}