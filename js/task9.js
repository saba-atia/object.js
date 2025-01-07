function getKeyValuePairs(obj){
    return Object.entries(obj);
}
let person = {
    name:"Adam",
    age:25,
    gender:"male",
}

let person2=getKeyValuePairs(person)
console .log(person2);