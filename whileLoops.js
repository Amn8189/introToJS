while (false){
    console.log("Infinite loop...")
}


let fruits = ["apple", "banana", "orange"]

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    break; //stop after the first one.
} console.log("--- --- ---")

let fruits1 = ["apple", "banana", "orange"]

for (let i=0; i<fruits1.length; i++){
    console.log(fruits1[i]);
    continue; //goes back to the prev line.
    console.log("I will never be  printed.")
}