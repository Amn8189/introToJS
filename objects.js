let hero = {
    "name" : "hulk",
    "powers" : "strength"
}

// adding a key/property
// hero["city"] = "ny"

//alternately:
Object.defineProperty(hero,
     "city", {value:"ny",
              writable: false,
              enumerable: false,
              configurable: false
     })

console.log(hero)