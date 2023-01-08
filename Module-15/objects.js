// const job = {
//     title: 'Dev',
//     location: 'New York',
//     salary: 50000,
// }
//
// console.log(new Date().toISOString());
//
// const job2 = {
//     title: 'Web Developer',
//     location: 'London',
//     salary: 55000,
// }

class Job {
    constructor(jobTitle, location, salary) {
        this.title = jobTitle;
        this.location = location;
        this.salary = salary;
    }
    describe() {
        console.log(`My job is ${this.title}, I work in ${this.location} and I earn ${this.salary}`);
    }
}

const developer = new Job('Web Developer', 'New York', 50000);
const cook = new Job('Cook', 'London', 25000)

developer.describe();
cook.describe();