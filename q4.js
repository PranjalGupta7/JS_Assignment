function solve(str){
    var out = str.split('').sort(function (a,b)
    { return a.localeCompare(b);}).join('').trim();
    return out;
}

//as we needed to perform localeCompare while sorting to get the required output.
