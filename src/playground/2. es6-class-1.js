console.log('Class example are running! ');
console.log('---------------------------');


class Person{
  constructor(name = 'no name', age = 1){
    this.name = name;
    this.age = age;
  }
  getName(){
    console.log(this.name);
  }
  getAge(){
    console.log(this.age);
  }
}

// let p = new Person('Jhhh', 28)
// p.getName();
// p.getAge();

// let p2 = new Person()
// p2.getName();
// p2.getAge();


class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major
  }
  getMajor(){
    console.log('My major is: ' + this.major);
  }
}

let s = new Student('Makko', 22, 'computer science')
s.getName()
s.getAge()
s.getMajor()


class Travler extends Person {
  
}

let t = new Travler();

