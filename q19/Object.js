var obj1= {
    name: 'Anil',
    age: 20
};
var obj2={
    name: 'Roshan'
}

console.log(Object.keys(obj1));

console.log(Object.values(obj1));

var obj3 = Object.assign(obj1,obj2);
console.log(obj3);

console.log(obj3.hasOwnProperty('age'));
