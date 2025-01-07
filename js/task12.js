let person={
    name:"Mohammad",
    age:28,
}
Object.seal(person);
person.name="Adam";
person.age=25;
console.log(person);
console.log(Object.isSealed(person));