const Cat = {
  name: "",
  age: "",
  may (n) {
    console.log(this.name, "Мяу")

  },
  eat (n) {
    console.log(this.name, "Ням ням")
  },
  sleep (n) {
    console.log(this.name, "хр хр")
  },
};

const a = Object.create(Cat)
const b = Object.create(Cat)
const c = Object.create(Cat)
a.name = 'Мурзик'
a.age = "1"
b.name = "Барсик"
b.age = "2"
c.name = "Кеша"
c.age = "3"

a.may();
a.eat();
c.sleep();