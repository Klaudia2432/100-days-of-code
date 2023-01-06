// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const button1 = document.querySelector('button');
//    - Select the second button by using an "id"
const button2 = document.getElementById('btn');
// 2) Add "click" event listener to both buttons (with two different functions).
function outputButton1 () {
    console.dir(button1);
}

function outputButton2 () {
    console.dir(event.target);
}

button1.addEventListener('click', outputButton1);
button2.addEventListener('click', outputButton2);
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const p1 = document.body.children[2].children[1];
const p3 = p1.nextElementSibling.nextElementSibling;
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
function outputButton1 () {
    p3.remove();
}

function outputButton2 () {
    // p1.style.backgroundColor = 'blue';
    p1.className = 'blue-bg';
}

p3.addEventListener('click', outputButton1);
p1.addEventListener('click', outputButton2);
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!