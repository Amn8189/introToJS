function x(){
    console.log("hello")
}

setTimeout(x, 5 * 1000); //counts in milliseconds: 1s = 1000ms.

function print(number){
    console.log(number)
}

for (let i=0; i<10; i+=1){  // can also use var.
    print(i)
}


for (var b=0; b<10; b+=1){
    print(b)
}

console.log(b + ". Done")
