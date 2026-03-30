// trip.js
// Lorenzo Phoenix
// 3/29/26
// Calculates the expectations for a trip to Calgary, CA

const milesToTravel = 413;
const mpg = 22; //For a 2010 Subaru Outback
const gasPrice = 3.6;
const fuelCapacity = 18;
const driverName = "Lorenzo";
const milesPerRefuel = mpg * fuelCapacity;
const isRoundTrip = true;
let totalDistance;
let totalCost = 0;
let totalTraveled = 0;
if (isRoundTrip) {
  totalDistance = milesToTravel * 2;
}

function calculateGallonsNeeded(totalDistance, mpg) {
  return totalDistance / mpg;
}

function calculateFuelCost(gallons, gasPrice) {
  return gallons * gasPrice;
}

for (let i = 0; totalTraveled < totalDistance; i++) {
  if (totalTraveled + milesPerRefuel > totalDistance) {
    totalCost += gasPrice * calculateGallonsNeeded(totalDistance - totalTraveled, mpg);
    totalTraveled += totalDistance - totalTraveled;
    
  } else {
    totalTraveled += milesPerRefuel;
    totalCost += gasPrice * fuelCapacity;
  }
  
  console.log("--------------------------------------");
  console.log(`Stop: ${i + 1} \nMiles Travelled: ${totalTraveled} \nMoney Spent: $${totalCost.toFixed(2)}`);
}

console.log("=======================================");
console.log(`For ${driverName}'s trip to Calagary, he will:`);
console.log(`-Travel: ${totalTraveled} Miles`);
console.log(
  `-Need: ${calculateGallonsNeeded(totalDistance, mpg).toFixed(2)} Gallons of Gas`,
);
console.log(
  `-Pay: $${calculateFuelCost(calculateGallonsNeeded(totalDistance, mpg), gasPrice).toFixed(2)}`,
);
console.log("=======================================");
