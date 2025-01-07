let person = {
    name:"Adam",
    age:25,
    gender:"male",
}
for (let key in person){
    console.log(`{name:${person.name},age:${person.age},gender:${person.gender}}`)
}