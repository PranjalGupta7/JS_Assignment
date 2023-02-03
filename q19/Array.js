var arr = [2,4,4,2,1,5,6];

arr.push(34)
console.log(arr);

console.log(arr.pop());

arr.shift();
console.log(arr);

arr.unshift(2);
console.log(arr);

var arr1 = arr.map(e => {
    return e*2;
});
console.log(arr1);

console.log(arr.filter((e)=>e%2));
console.log(arr);

console.log(arr.reduce((sum,e)=> sum+=e));

arr.splice(1,2,34,54);
console.log(arr);

console.log(arr.slice(1,-2));

console.log(arr.sort());

console.log(arr.join());
