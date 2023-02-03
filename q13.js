//Regex is a string of text that helps the user to check pattern checking to match, locate and n=mange text. 

const reg = /[A-Za-z0-9]/g;
function match(str) {
    return str.match(reg);
}

