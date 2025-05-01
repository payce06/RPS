const buttons = document.querySelectorAll('button[data-choice]');
console.log("buttons", buttons);
const userChoiceSpan = document.getElementById('user-choice');
console.log("userChoiceSpan", userChoiceSpan)
const computerChoiceSpan = document.getElementById('computer-choice');
console.log("computerChoiceSpan", computerChoiceSpan);
const outcomeText = ['rock', 'paper', 'scissors'];
console.log('outcomeText', outcomeText);

const choices = ['rock', 'paper', 'scissors'];

for(let i = 0; i < buttons.length; i++){
    let button = buttons[i]
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        console.log("UserChoice", userChoice);
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        userChoiceSpan.textContent =userChoice;
        computerChoiceSpan.textContent = computerChoice;
        console.log("Computer choice", computerChoice);

        const outcome = getWinner(userChoice, computerChoice);
        outcomeText.textContent = outcome;
    });
};