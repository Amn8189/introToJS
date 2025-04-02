class Vehicle{
    constructor(name, max_speed){ //defines what the class is made up of.
        this.name = name;
        this.max_speed = max_speed;
    }

    startUp(){ //Not required to add "function" when inside a class
        console.log("starting up...")
    }
}

let hyundai = new Vehicle("ioniq 5", 260)
console.log(hyundai.name)
hyundai.startUp()


class Character{
    constructor(health, name){
        this.health = health;
        this.name = name;
    }
}

//Luigi-health, name, perso, clothclr
//inheritance
class Luigi extends Character{
    constructor(health, name, personality, clothecolour){
        super(health, name);  //helps in inheritance
        this.personality = personality;
        this.clothecolour = clothecolour;
    }
}

let l = new Luigi(100, "Luigi", "kind", "green")
console.log(l)

class Parent{
    constructor(firstname, secondname, job){
        this.firstname = firstname;
        this.secondname = secondname;
        this.job = job;
    }
}

class Child extends Parent{
    constructor(firstname, secondname, job){
        super(firstname, secondname, job);
    }
}

let c = new Child("John", "Doe", "fictionalChar")
console.log(c5)