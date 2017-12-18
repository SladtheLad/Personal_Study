//Exercise 1
class Car {
  acceleration: number = 0;

  constructor (public name: string){
    this.name = name;
  }
  honk() {
    console.log("TOOOT");
  }
  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("BMW");
console.log(car.name);
car.honk();
console.log(car.acceleration);
car.accelerate(30);
console.log(car.acceleration);

//Exercise 2 Inheritance
class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

//Exercise 3 Getters and Setters

class Person {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length >= 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
};

const person = new Person();
console.log(person.firstName);
person.firstName = "Ni";
console.log(person.firstName);
person.firstName = "Nic";
console.log(person.firstName);
person.firstName = "Nick";
console.log(person.firstName);