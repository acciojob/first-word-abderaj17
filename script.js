function firstWord(str) {
    // Check if the string is empty or does not contain any space
    if (str === "" || !str.includes(" ")) {
        return str;
    }
    
    // Find the index of the first space
    const firstSpaceIndex = str.indexOf(" ");
    
    // Return the substring from the start to the first space
    return str.substring(0, firstSpaceIndex + "" );
}   
// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
