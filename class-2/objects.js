//Exercise 1
class Baby {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  cry() {
    return `${this.name}, de ${this.age} meses, está llorando.`;
  }

  sleep() {
    return `${this.name}, de ${this.age} meses, está durmiendo.`;
  }

  eat() {
    return `${this.name}, de ${this.age} meses, está comiendo.`;
  }
}

const antonio = new Baby("Antonio", 3);
const sonia = new Baby("Sonia", 5);
const javier = new Baby("Javier", 8);

console.log(antonio.cry());
console.log(sonia.sleep());
console.log(javier.eat());

//Exercise 2
class Hour {
  getHour() {
    const date = new Date();
    const time = `${date.getHours()}:${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
    console.log(`La hora es: ${time}`);
  }
}

const hour = new Hour();
hour.getHour();

//Exercise 3
class Person {
  constructor(name, weihgt, height) {
    this.name = name;
    this.weihgt = weihgt;
    this.height = height;
  }

  getIMC() {
    const imc = this.weihgt / Math.pow(this.height, 2);
    console.log(`La persona ${this.name} tiene un IMC de ${imc.toFixed(2)}`);
  }
}

const carlos = new Person("Carlos", 70, 1.75);
carlos.getIMC();
