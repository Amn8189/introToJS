let fruits = ["apple", "banana", "orange"]

for (let f of fruits){
    console.log(f);
}

//for in loop - specific to objects/dictionaries
let heroes = {
    gotham: "batman",
    metropolis: "superman",
    newyork: "spiderman",
}

for (let city in heroes){
    console.log(city)
    console.log(heroes[city])
}

