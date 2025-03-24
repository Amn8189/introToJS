let names = ["john", "susan"]
//read from list
console.log(names[0]) //john
console.log(names[1]) //susan

//add to a list (last item)
names.push("sham")
console.log(names)

//add to a list (first item)
names.unshift("ayden") //expensive so don't use unless forced to.
console.log(names)

//removing an item
names.pop() //removes the last item
console.log(names)

let removedName = names.pop() //stores the removed name
console.log(removedName)

//OBJECT
let movieratings = {"inferno":9, "onepunchman":6}
console.log(movieratings["inferno"])
console.log(movieratings["onepunchman"])

//adding to an object
movieratings["spiderman"] = 100
console.log(movieratings)