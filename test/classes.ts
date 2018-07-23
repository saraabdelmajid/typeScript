// classes we can use new here.
//default is public

//interface contain certain data or need some implementation
//class extend class and implement interface

//single constructor is allowed

interface Idisplay {
    display() : void;
    displayString () : string;
}
class person {
    name : string;
    age : number;
    status : string;

    constructor(name : string, age : number, status : string) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

}

let p1 = new person('sara', 20, 'single');
p1.name = 'sara';
console.log(p1);

class person2 extends  person implements Idisplay{
    weight : string;
    height : number;

    constructor(name : string, age : number, status : string, weight : string, height : number) {
        super(name, age, status);
        this.weight = weight;
        this.height = height;
    }

    display() : void {
        console.log(this);
    }

    displayString() : string {
        return JSON.stringify(this, null, 2);
    }
}

let per2 = new person2('soos',  25, 'single', '65', 175);
console.log(per2);
per2.display();
console.log(per2.displayString());
