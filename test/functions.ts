function f1(param1 : string, param2 : number, param3? : number) : string {
    return param1 + (param2 + param3);
}

console.log(f1("sara", 1, 2)); //sara3
console.log(f1("sara", 1)); //saraNaN


function f2(param1 : string, param2 : number, param3 : number = 0) : string {
    return param1 + (param2 + param3);
}

console.log(f2("sara", 1, 2));
console.log(f2("sara", 1));


//arrow function
param => {return "s";}

//multiple arg
function f3(...args : any[]) {
    for (let x of args) {
        console.log(typeof (x));
    }
}

f3(1, 2 , "sara", "lara", true);




