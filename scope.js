let a = 4;

{
    let a = 1000;                // SHADOWING
    console.log(a); 
    {
        let a = 2500;
        console.log(a);
    }
}

console.log(a)