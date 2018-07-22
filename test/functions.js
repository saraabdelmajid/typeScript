function f1(param1, param2, param3) {
    return param1 + (param2 + param3);
}
console.log(f1("sara", 1, 2)); //sara3
console.log(f1("sara", 1)); //saraNaN
function f2(param1, param2, param3) {
    if (param3 === void 0) { param3 = 0; }
    return param1 + (param2 + param3);
}
console.log(f2("sara", 1, 2));
console.log(f2("sara", 1));
//arrow function
(function (param) { return "s"; });
//multiple arg
function f3() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var x = args_1[_a];
        console.log(typeof (x));
    }
}
f3(1, 2, "sara", "lara", true);
