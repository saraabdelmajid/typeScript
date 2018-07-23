interface Iperson {
    fname : string;
    lname : string;
    age : number;
}

let p1 : Iperson = {
    fname : 'sara',
    lname : 'gh',
    age : 24,
}

console.log(p1);


p1.fname = 'israa';
p1.lname = 'here';
console.log(p1);

interface IsuperPerson extends Iperson{
    status : string;
}

let p2 : IsuperPerson = {
    status : "married",
    fname : 'abc',
    lname : "efg",
    age : 123,
}

console.log(p2);

// we can extend more than one interface