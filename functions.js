function sayHello(){
    console.log("Hello World.");
}

sayHello(); //calls the func

function add_two_numbers(num1, num2){
    return num1 + num2;
}
let sum = add_two_numbers(52,48);
console.log(sum);

function sum_two_numbers(num1, num2){
    return [num1 + num2, num1 - num2];
}

let [sum1, sub] = sum_two_numbers(52, 48);
console.log(sum1, sub);

( ()=> {
    console.log("Hello World.");
} ) ();

function ss() {
    return[3, 4]
}

let a = ss()
console.log(a)

let [x, y] = ss()
console.log(x)
console.log(x)
