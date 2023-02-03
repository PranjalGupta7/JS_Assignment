var test = ["2*2","a*a","2+2","2-a","a+a","5/2","9+9"];
test.forEach(e => check(e));
function check(str){
    const regex = /^\d+[\+-x\--x\/-x\*]\d+$/g;
    if(str.match(regex))
        solve(str);
    else 
        console.log('invalid');
}

function solve(str){
    let a,b,c,temp;
    const reg = /[0-9]/g;
    for(let i=0;i<str.length;i++){
        if(!str[i].match(reg)){
            b = str[i];
            temp = i;
            break;
        }
    }
    a = Number(str.slice(0,temp));
    c = Number(str.slice(temp+1,str.length));
    
    switch(b){
        case '+':
            console.log(a+c);
            break;
        case '-':
            console.log(a-c);
            break;
        case '*':
            console.log(a*c);
            break;
        case '/':
            console.log(a/c);
            break;
    }
}
