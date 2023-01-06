// For loop

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// For-of loop

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks () {
    const anchorElements = document.querySelectorAll("#highlight-links a");

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// For-in loop

const userData = {
    firstName : 'Klaudia',
    lastName : 'Test',
    age : 25
}

const userDataButton = document.querySelector('#user-data button');

function displayUserData () {
    const outputData = document.getElementById('output-user-data');
    outputData.innerHTML = '';

    for (const key in userData) {
        const newUserData = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + userData[key];
        newUserData.textContent = outputText;
        outputData.append(newUserData);
    }
}

userDataButton.addEventListener('click', displayUserData);

// While loop

const rollDiceButton = document.querySelector('#statistics button');

function rollDice () {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls () {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNum = false;
    let numberOfRolls = 0

    while (!hasRolledTargetNum) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNum = true;
        // }
        numberOfRolls++;
        const newRollListItem = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItem.textContent = outputText;
        diceRollsListElement.append(newRollListItem);
        hasRolledTargetNum = rolledNumber == enteredNumber;
    }
    const outputTotalRolls = document.getElementById('output-total-rolls');
    const outputTargetNumber = document.getElementById('output-target-number');

    outputTargetNumber.textContent = enteredNumber;
    outputTotalRolls.textContent = numberOfRolls;
}

rollDiceButton.addEventListener('click', deriveNumberOfDiceRolls);