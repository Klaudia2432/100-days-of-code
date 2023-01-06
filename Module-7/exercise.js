// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let course = '100 Days of Web development';
//    - A variable that stores the price of that course
let price = 50;
//    - A variable that stores the three main goals that you have, when taking this course
let goals = ['gain knowledge', 'practice', 'get a better job'];
// 2) Output ("alert") the three variable values
alert(course);
alert(price);
alert(goals);
// 3) Try "grouping" the three variables together and still output their values thereafter
alert('The course name is ' + course + '. The course price\'s ' + price + '. The main goals of the course are '
    + goals[0] + ', ' + goals[1] + ' and ' + goals[2] + '.');

let onlineCourse = {
    name : '100 Days of Web development',
    price : 50,
    goals : ['gain knowledge', 'practice', 'get a better job']
}

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);
// 4) Also output the second element in your "main goals" variable
alert(onlineCourse.goals[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function getListItem (array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}
// 6) Execute your custom command from (5) and output ("alert") the result
let firstGoal = getListItem(onlineCourse.goals, 0);
alert(firstGoal);