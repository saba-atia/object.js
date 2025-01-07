let person={
    name:"Adam",
    age:25,
}
Object.freeze(person);
person.name="Mohammad";
person.gender="male";
console.log(person);
console.log(Object.isFrozen(person));