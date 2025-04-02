//this.js
//what is this in js
function startEngine(){
    console.log(this.name, "is driving.")
}

let John = {
    "name":"John Kennedy"
}
let Angela = {
    "name":"Angela N."
}


// startEngine.call(John) // binding the function to John
// startEngine.call(Angela) // binding the function to Angela

let mario={
    "health":100,
    "show_health": function(){
        return this.health
    }
}

console.log(mario["show_health"]()) //show_health func is already bound to Mario cuz the func is in the var.

let sam={
    "name": "Sam Sulek",
    "startEngine": function(){
        console.log(this.name, "is driving.")
    }
}

sam["startEngine"]() // () calls the function within [startEngine].
sam["startEngine"].call(John) // calls the func but with [John]'s properties.

function increaseMarks(){
    this.marks += 1
}
let english = {
    "marks":50,
}
increaseMarks.call(english) //should increase [marks] to [51].
console.log(english) // check if the marks changed.

let luigi= {
    "health":100,
    "show_health":function(){
        return this.health
    }
}
console.log(luigi["show_health"]())

