let hero={"name" : "hulk", "powers" : "strength"}
let b = { ... hero } // ... makes a copy of our object.
//alternatively: let b = Object.assign({}, hero)

b["name"] = "flash"
// console.log(hero)
// console.log(b)

let player = {
    "name":"steve",
    "hit": ()=>{console.log("throwing a punch")},    // ()=>{} -> anonymous function  
    "items": ["axe", "apple", "mushrooms"],
    "levels_and_score": {
        "level1": 20,
        "level2": 40
    }
}

console.log(player["name"])
player["hit"]() // () -> calls the function
console.log(player["levels_and_score"]["level2"])
console.log(Object.keys(player))




