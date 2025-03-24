// HOW TO HANDLE ERRORS.

let num = 199 // num = numerator, den = denominator
let den = 0

try{
    if(den === 0 ){
        throw new Error("Can't divide")
    }
    let ans = num/den
    console.log(ans)
}catch(error){
    console.log(error)
    console.log("boom")
}