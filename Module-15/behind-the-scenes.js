const hobbies = ['Sports', 'Cooking']; // pointer to the array is stored
const age = 25; // the value itself is stored
hobbies.push('Reading'); // the address of array does not change
// hobbies = ['coding', 'sleeping']; // not allowed! new address is stored
console.log(hobbies);

// Primitive values: numbers, strings, booleans, & more
// Reference values: objects

const person = {age: 25};

function getAdultYears(p) {
    // p.age -= 18;
    // return p.age;
    return p.age - 18;
}
console.log(getAdultYears({...person})); // spread operator can be used on arrays and also objects
console.log(person);