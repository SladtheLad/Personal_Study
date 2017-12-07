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