// classes we can use new here.
//default is public
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    return person;
}());
var p1 = new person('sara', 20, 'single');
p1.name = 'sara';
console.log(p1);
var person2 = /** @class */ (function (_super) {
    __extends(person2, _super);
    function person2(name, age, status, weight, height) {
        var _this = _super.call(this, name, age, status) || this;
        _this.weight = weight;
        _this.height = height;
        return _this;
    }
    person2.prototype.display = function () {
        console.log(this);
    };
    person2.prototype.displayString = function () {
        return JSON.stringify(this, null, 2);
    };
    return person2;
}(person));
var per2 = new person2('soos', 25, 'single', '65', 175);
console.log(per2);
per2.display();
console.log(per2.displayString());
