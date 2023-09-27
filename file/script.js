// TOGGLE BUTTON
const hambuger = document.querySelector('.hamburger');
const navlink = document.querySelector('.nav__link');

// TOGGLE WHEN THE HAMBURGER ICON/BUTTON IS CLICKED
hambuger.addEventListener('click', () => {
    navlink.classList.toggle("hide");
});
 // DECLARING A VARIABLE
const button = document.getElementById('myButton');

// CHANGE BUTTON TEXT WHEN CLICKED
button.addEventListener('click', () => {
button.textContent = 'You are amazing!';
})

// CHANGE BUTTON COLORS
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'green';
})

// RESTORE BUTTON DEFAULT COLOR
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'teal';
})


// GET REFERENCE TO THE BUTTON AND THE PARAGRAPH ELEMENT
const showTextButton = document.getElementById('showTextButton');
const displayText =document.getElementById('displayText');

// ADD A CLICK EVENT LISTENER TO THE BUTTON
showTextButton.addEventListener('click', () => {

    // CHANGE THE TEXT CONTENT OF THE PARAGRAPGH WHEN THE BUTTON IS CLICKED
    displayText.textContent = 'Hello, this is the displayed text for sterling academy!';
})
