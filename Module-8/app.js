let paragraph = document.querySelector('p');
function changeParagraphText() {
    paragraph.textContent = 'Clicked!';
    console.log('Paragraph clicked!');
}

paragraph.addEventListener("click", changeParagraphText);

let input = document.querySelector('input');
// function changeInputBackground() {
function retrieveUserInput() {
    // let enteredText = input.value;
    // let enteredText = event.target.value();
    let enteredText = event.data;
    console.log(enteredText);
    // input.style.backgroundColor = 'burlywood';
    // console.log('Color changed!');
}
// input.addEventListener('input', changeInputBackground);
input.addEventListener('input', retrieveUserInput);