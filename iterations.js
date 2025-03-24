let heroes = ["batman", "flash", "omniman", "spiderman"]

/*
for (let i=0; i<heroes.length; i++){
    console.log(heroes[i])
        
}
*/

function x(value, index){
    console.log(value, index)
}

heroes.forEach((value, index) => {
    console.log(value, index)
})

// spread operator 
let basket1 = ["apple", "banana"]
let basket2 = ["mango", "pawpaw"]
// add whatever is in basket2 to basket1
// so that basket1 has ["apple", "banana", "mango", "pawpaw"]

/* for (let f of basket2){
    basket1.push(f)
} console.log(basket1) */

basket1 = [...basket1, ...basket2] // spread operator (...). In this case: spreads [basket1] and [basket2].
console.log(basket1)
 
let myMovies = {
    "DriveToSurvive" : 6,
    "TokyoDrift" : 9
}
let friendMovies = {
    "Avatar" : 6,
    "ManOfSteel" : 9
}

let allMovies = {...myMovies, ...friendMovies} //spread the two objects
console.log(allMovies)