//Initialising prices for the planets into an object
const prices = {
    mars: 25000,
    neptune: 45000,
    jupiter: 65000,
    saturn: 40000,
    uranus: 50000,
    moon: 15000
};

//Initialising amount of tickets
let ticketCounts = {
    mars: 0,
    neptune: 0,
    jupiter: 0,
    saturn: 0,
    uranus: 0,
    moon: 0
};

//Initialising the total price and tickets 
let total = 0;
let totalTickets = 0;

//Calling ticket object's keys to iterate in loop
let planets = Object.keys(ticketCounts);

//Loop to add ticket count and prices
for(let i = 0; i < planets.length; i++){
    let planets = planets[i];
    total += ticketCounts[planet] * prices[planets];
    totalTickets += ticketCounts[planets];
}

console.log("Total Cost: R" + total);
console.log("Total Flights Booked: " + totalTickets);


