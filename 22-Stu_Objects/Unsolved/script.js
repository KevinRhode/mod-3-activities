//WRITE YOUR CODE BELOW
var customerDrink = {
  name:"Long Island",
  sugers: 3,
  rdy:false  
};

var customerDrink2 = {
  name:"UV Bomb",
  sugers: 1,
  rdy:true  
};

drinksOrdered = [];
drinksOrdered.push(customerDrink);
drinksOrdered.push(customerDrink2);

console.log("Drink Name: "+customerDrink.name,"# of Sugers: "+customerDrink.sugers)
console.log("Drink Name: "+customerDrink2.name,"# of Sugers: "+customerDrink2.sugers)

for (let index = 0; index < drinksOrdered.length; index++) {
    
    if (drinksOrdered[index].rdy) {
        console.log(drinksOrdered[index].name + ", Ready for pick-up")
    } else {
        console.log(drinksOrdered[index].name + ", Still in order queue ")
    }
    
}