function firstWord(str) {
    str = str.trim();
    // Check if the string is empty or does not contain any space
    if (str === "" || !str.includes(" ")) {
        return str;
    }
    const words = str.split(" ");
    return words[0];
}   
// Do not change the code below 

const s = prompt("Enter String:");  
alert(firstWord(s));