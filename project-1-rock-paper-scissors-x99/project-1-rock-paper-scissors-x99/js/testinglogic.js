let options = ["rock", "paper"]

let value1;
let value2;

const tryMe = (value1, value2) =>{
    if ((options.indexOf(value1) > -1) && (options.indexOf(value2) > -1)){
        console.log(`${value1} ${value2}`)
    }
    else {
     console.log("messed up")
    }
}

console.log("first method")
tryMe("rock", "paper");

console.log("second method")
tryMe("another", "paper");