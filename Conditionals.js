/*Too Many Sheep!(or, the else if statement)

    We’ve made a significant difference, but there are still too many sheep for the fragile Death Valley ecosystem.The Rangers would like you to implement the following new plan for population reduction:

        If the month is a multiple of 4, then find 75% of the sheep population.Log that value to the console in the format below.Then, remove that value from the total number of sheep.
            Otherwise, if the population is above 10000, find half of the sheep population.Log that value to the console in the format below.Then, remove that value from the total number of sheep.
Use this format for logging sheep reduction:

    Removing < number > sheep from the population.
        Note: To complete the challenge, you only need to insert an if statement and an else if statement.You do not need to create an else statement at the bottom or change any of the provided code.
*/

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

    if (monthNumber % 4 === 0) {
        var sheepToRemove = numSheep * .75;
        console.log("Removing " + sheepToRemove + " sheep from the population.");
        numSheep = numSheep - sheepToRemove;
    } else if (numSheep >= 10000) {
        sheepToRemove = numSheep / 2;
        console.log("Removing " + sheepToRemove + " sheep from the population.");
        numSheep = numSheep - sheepToRemove;
    }

    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


/*Some Dam Complex Conditionals!

The people at the Hoover Dam have called you back, and would like a program that shows what happens when only the even numbered turbines are turned on.And they want it all in just one for loop.

With a set of complex conditional statements inside the loop, construct a way to only turn on even numbered turbines.Remember our power output situation:

Generators 1 through 4 produce 62 MW.
    Generators 5 through 19 produce 124 MW.
The output should follow this format:

Generator #1 is off.
    Generator #2 is on, adding 62 MW, for a total of 62 MW!
We’ve given you some starting variables to use in your build.Within your loop, consider the possible scenarios when building your conditions:

The Generator provides 62 MW of power.
The Generator provides 124 MW of power.
The Generator is off.
*/



var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
    if (currentGen % 2 === 0 && currentGen < 5) {
        var currentMW = 62;
        totalMW = currentMW + totalMW;
        console.log("Generator #" + currentGen + " is on, adding " + currentMW + " MW, for a total of " + totalMW + " MW!");
    } else if (currentGen % 2 === 0 && currentGen > 5) {
        currentMW = 124;
        totalMW = currentMW + totalMW;
        console.log("Generator #" + currentGen + " is on, adding " + currentMW + " MW, for a total of " + totalMW + " MW!");
    } else {
        console.log("Generator #" + currentGen + " is off.");
    }
};