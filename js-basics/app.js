// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let courseName = 'Web Development';
let price = 30;
let goals = ['learning', 'exercising', 'improving'];
// 2) Output ("alert") the three variable values
alert(courseName);
alert(price);
alert(goals);
// 3) Try "grouping" the three variables together and still output their values thereafter
let courseInfo = {
    courseName: 'Web Development',
    price: 30,
    goals: ['learning', 'exercising', 'improving']
};

alert(courseInfo.courseName);
alert(courseInfo.price);
alert(courseInfo.goals);
// 4) Also output the second element in your "main goals" variable
alert(courseInfo.goals[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function getMainGoals(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}
// 6) Execute your custom command from (5) and output ("alert") the result
let firstGoal = getMainGoals(courseInfo.goals, 0);
alert(firstGoal);