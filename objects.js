let hero = {
    "name" : "hulk",
    "powers" : "strength"
}

// adding a key/property
// hero["city"] = "ny"

//alternately:
Object.defineProperty(hero, "city", 
     {value:"ny",
      enumerable: true,   //controls whether it can be seen or not
      writable: true,   //whether it can be changed
      configurable: false,   //whether the above properties can be changed again
});

// --> If configurable is false, the following will bring up an error.
// Object.defineProperty(hero, "city", 
//     {value:"ny",
//      enumerable: false,   //controls whether it can be seen or not
//      writable: false,   //whether it can be changed
//      configurable: false,
// });

console.log(hero)
hero["city"] = "washington"
console.log(hero)