var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
//It's done when the string "Canis Major" is added as the first element of the constellations array and no elements are removed.
constellations.unshift("Canis Major");
for (let index = 0; index < constellations.length; index++) {
    console.log(constellations[index]);
}
//It's done when "Venus" is removed from the planets array.

planets.splice(planets.indexOf("Venus",0),1);

//It's done when the arrays constellations and planets are joined to form a new array named galaxy. The arrays constellations and planets should not be altered.
var galaxy = [];
galaxy = constellations.concat(planets);

galaxy.forEach(element => {
console.log(element);

});

//It's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable.

var newvar = star.toUpperCase();

console.log(newvar);


