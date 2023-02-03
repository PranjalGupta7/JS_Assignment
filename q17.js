var arr = [
    {name: "Karl", age:20}, 
    {name: "Karl", age:23}, 
    {name: "Marry", age:20}, 
    {name: "Aston", age:20} ];

arr.forEach((e,i)=>{
  for(let a=0;a+1<arr.length;a++){
        if(a!=i && e.name===arr[a].name){
            arr.splice(a,1);
            arr.splice(i--,1);
        }
  }
});
console.log(arr);
