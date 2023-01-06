// console.log(document);
// console.dir(document);

// document.body.children[1].children[0].href = 'https://google.com';

// alert();
// window.alert();

// let anchorElement = document.getElementById('link');
// anchorElement.href = 'https://google.com';

document.querySelector('a').href = 'https://academind.com';
document.querySelector('.paragraph').textContent = 'Text';

// Add new element
let newAnchorElement = document.createElement('a');
// Get access to parent element that holds new element
let firstParagraph = document.querySelector('p');
// Insert new element to parent element content
firstParagraph.append(newAnchorElement);
newAnchorElement.textContent = 'Testing Traveler blog';
newAnchorElement.href = 'https://www.testingtraveler.com';

// Remove elements
// Select element that should be removed
let h1element = document.getElementById('head-text');
// Remove element
h1element.remove(); // for newer browsers
h1element.parentElement.removeChild(h1element); // for older browsers

// Moving elements around
// Select first element
// Move it to be after the second element
firstParagraph.parentElement.append(firstParagraph);

//Inner HTML
firstParagraph.innerHTML = 'Hi, this is <strong>important!</strong>';
