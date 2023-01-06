function greetUser(greetPrefix, userName = 'User') {
    // console.log(greetPrefix + ' ' + userName + '!');
    console.log(`${greetPrefix} ${userName}`); // Multiline strings, plug in dynamics values
}
greetUser('Hi', 'Klaudia');
greetUser('Hello');

function sumNum(...nums) { // Rest parameter allows the user to enter as many parameters as they want, convert into array
    let result = 0;

    for (const num of nums) {
        result += num;
    }
    return result;
}

const inputNums = [1,5,10,11,12,13];
// console.log(sumNum(...inputNums)); // Spread operator that can help to convert the value to the expected value type

// console.log(sumNum(1,5,10,11,12,13));

console.log(sumNum); // showing the function itself