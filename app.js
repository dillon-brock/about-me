// grab DOM elements

const tosCheckBox = document.getElementById('tos-checkbox');
const answerButton = document.getElementById('show-answer-button');

tosCheckBox.addEventListener('change', () => {
    answerButton.disabled = !tosCheckBox.checked;
});

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
