// grab DOM elements

const tosCheckBox = document.getElementById('tos-checkbox');
const answerButton = document.getElementById('show-answer-button');
const animalSection = document.getElementById('animal-section');



// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

tosCheckBox.addEventListener('change', () => {
    answerButton.disabled = !tosCheckBox.checked;
});

answerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});