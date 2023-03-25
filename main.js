//Create a function to generate a random number between 1-3
const randomNumberGenerator1 = () => {
    let randomNumberThree = 1 + (Math.floor(Math.random()*3));
    return randomNumberThree;
};

//Create a function to generate a random number between 1-5
const randomNumberGenerator2 = () => {
    let randomNumberFive = 1 + (Math.floor(Math.random()*5));
    return randomNumberFive;
};

//The Weekend Challenge
const weekendChallenge = () => {
    let randNum = randomNumberGenerator1();
    let numPeople = randomNumberGenerator2();

    switch(randNum) {
        case 1: 
            console.log("This is your weekend challenge: learn basic greetings in a new language of your choice.");
            break;
        case 2: 
            console.log("This is your weekend challenge: find a seafood dish you've never made, cook it, and invite someone over to enjoy it.");
            break;
        case 3: 
            console.log(`This is your weekend challenge: call ${numPeople} friend(s) and tell them something you really appreciate about them.`);
            break;
    };
};

//The Healthy Food Challenge
const healthyFoodChallenge = () => {
    let foodChoices = ["spinach", "peanuts", "oranges", "carrots", "oats"]
    let foodChoiceIndex = randomNumberGenerator2() - 1; 

    console.log(`Here's your healthy food challenge: eat ${foodChoices[foodChoiceIndex]} at least five times in the coming week.`);
};

//The Kind Deed Challenge
const kindDeedChallenge = () => {
    let randNum = randomNumberGenerator1();

    switch(randNum) {
        case 1: 
            console.log("This is your kind deed challenge: go to a coffee shop and pay for the order of the person behind you in line.");
            break;
        case 2: 
            console.log("This is your kind deed challenge: think of a snack a family member or friend likes and surprise send it to them via 2-day shipping.");
            break;
        case 3: 
            console.log("This is your kind deed challenge: find a nearby firefighter station and take them a box of donuts and tell them how much you appreciate their work.");
            break;
    };

};

//This is the function that, when called, will print out all three challenges
const finalResult = () => {
    weekendChallenge();
    healthyFoodChallenge();
    kindDeedChallenge();
};

finalResult();