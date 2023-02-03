var obj = [
    {first: 'Anil', last: 'Kumar', age: 20},
    {first: 'Ajeet', last: 'Sharma', age: 20},
    {first: 'Thomas', last: 'Snape', age: 21},
    {first: 'Alfred', last: 'Dumbldore', age: 20},
    {first: 'Amit', last: 'Kushwaha', age: 21}
    ]
var output = obj.filter(e => e.age%2==0);
console.log(output);

//array functions provide methods like map, reduce and filter to manipulate array data.
