let personAge = 18

function testNum(personAge){
if (personAge >= 18){
    result = "Pilngadīgs"
} else{
    result = "Nepilngadīgs"
}
}
testNum(personAge)
console.log(result);

const namesArray = ["Jānis", "Anna", "Zaiga"];
console.log(namesArray)

for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

function sayHello(name) {
    return "Labdien, " + name + "!";
}


console.log(sayHello("Elza"));
console.log(sayHello("Jānis"));