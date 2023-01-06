let greetingName = 'Klaudia';
let age = 25;

let description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
At delectus deleniti dignissimos, natus pariatur quaerat rem tempora? Aliquam at beatae enim est, 
exercitationem illo nulla placeat quos sunt veritatis vero.`;

let hobbies = [
    'figure skating',
    'IT',
    'Aviation',
    'Travelling'
];

let job = {
    title : 'Web Developer',
    experience : 'Junior',
    type : 'Full-time Remote',
    place : 'Motherwell',
    salary : 30000
}

let adultAge = age - 18;
// console.log(adultAge);
age = 45;
adultAge = age - 18;
// console.log(adultAge);

function calculateAdultAge(age) {
    // adultAge = age - 18;
    return age - 18;
}

// calculateAdultAge();
// alert(adultAge);

// totalAdultAge = calculateAdultAge(25);
// console.log(totalAdultAge);

// alert('Hi I\'m ' + greetingName + '!');
// greetingName = 'really Klaudia';
// alert ('Hi I\'m ' + greetingName + '!');
// alert('I\'m ' + age + ' years old');

// console.log('I\'m ' + greetingName + ', I\'m ' + age + ' years old and my hobbies are '
//     + hobbies[0] + ', ' + hobbies[1] + ', ' + hobbies[2] + ' and ' + hobbies[3] + '.')

// alert('I\'m a ' + job.title);

let person = {
    name : 'Klaudia',   // property
    greet() {           // method
        console.log('Hello!');
    }
};

person.greet();