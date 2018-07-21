//const let var

//let as java scope variable
//var is weired it can be out scope

function var1(isEnabled : boolean) {
    if (isEnabled) {
        if (true){
            var x = 10;
        }
    }
    return x;
}

console.log(var1(true));
console.log(var1(false));

function let1(isEnabled : boolean) {
    let x : number;
    if (isEnabled) {
        x =10;
    }
    //compiler error if x is defined inside the scope
    return x;
}

console.log(let1(true));
console.log(let1(false));


const myName:String = 'sara';
console.log(myName);