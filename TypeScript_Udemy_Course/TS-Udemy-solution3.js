var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("TOOOT");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
console.log(car.name);
car.honk();
console.log(car.acceleration);
car.accelerate(30);
console.log(car.acceleration);
