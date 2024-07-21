function checkWhitespace(str) {
    return /\s/.test(str);
}
function greeting(name) {
    let greeting = "Hello";
    if(name == null){
       return greeting += " there";
    }
    if(name == name.toUpperCase()){
       return greeting = "HELLO "+ name;
    }
    if (checkWhitespace(name)) {
        let names = name.split(' ');
        if (names.length == 2) {
            greeting = "Hello " + names[0] + " and " + names[1];
        } else if (names.length > 2) {
            greeting = "Hello"; // Initialize greeting
            names.forEach((element, index) => {
                if (index === names.length - 1) {
                    greeting += " and " + element;
                } else if (index === names.length - 2) {
                    greeting += " " + element; // No comma before "and"
                } else {
                    greeting += " " + element + ",";
                }
            });
        }
    }
    else{
        greeting += " " + name;
    }
    return greeting;

}
module.exports = greeting;