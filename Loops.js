//Problem Solving with Loop Operations

//In the Death Valley National Park, a group of environmentalists have begun a project that will grow the population of Bighorn Sheep. 
//Every month, the population will multiply by four! To stay on top of this explosive growth, 
//the scientists would like a printout of how many sheep will make a new home in Death Valley.

//In deathValley.js, use the three existing variables to build a while loop that prints a message for one year’s worth of time. 
//Here’s what the first two lines of output should look like:

//There will be 16 sheep after 1 month(s)!
//There will be 64 sheep after 2 month(s)!


var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
    numSheep = numSheep * 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    monthNumber++;
};

//For loop version:

var numSheep = 4;
var monthsToPrint = 12;

for (monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
    numSheep = numSheep * 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}



//From a While Loop to a For Loop

//In countdown.js, write a basic for loop that prints to the console all the numbers from 10 to 1 in descending order.
//This is the similar to one of the previous challenges, but this time we’re using a for loop instead of a while loop.

//Here is what our while loop looked like from the previous challenge:

var num = 10;
while (num > 0) {
    console.log(num);
    num--;
}

//Turns into:

for (var num = 10; num > 0; num--) {
    console.log(num);
}


//These Dam Loops!

//The Hoover Dam has 19 generators of multiple types.
//For simplicity, let’s say that the first 4 of these generators output 62 megawatts, and the other 15 output 124 megawatts.
//In hooverDam.js, the Dam Rangers have asked you to design a system of two loops that turns each generator on in progression, and prints the new total of megawatts generated.

//They’d like the first loop to be a while loop handling the first 4 generators.
//Then, they’d like the second loop to be a for loop that handles the other 15 generators.
//Each output line should resemble the following lines, with adjusted values for the currentGen and totalMW:

Generator #1 is on, adding 62 MW, for a total of 62 MW!
Generator #2 is on, adding 62 MW, for a total of 124 MW!

//We’ve given you some starting variables to use in your build.

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
    var currentMW = 62;
    totalMW = currentMW + totalMW;
    console.log("Generator #" + currentGen + " is on, adding " + currentMW + " MW, for a total of " + totalMW + " MW!");
    currentGen++;
}

for (currentGen = 5; currentGen <= totalGen; currentGen++) {
    currentMW = 124;
    totalMW = currentMW + totalMW;
    console.log("Generator #" + currentGen + " is on, adding " + currentMW + " MW, for a total of " + totalMW + " MW!");
}