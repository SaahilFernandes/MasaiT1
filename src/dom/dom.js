
import { keystrokes } from "../state/quiz.js";

document.addEventListener("keydown", (event) => {
    keystrokes.push(event.key);

    const num = Number(event.key);
    if (num >= 1 && num <= 4) {
        // Arrays are 0-indexed, so subtract 1
        let more = submit(num - 1);
        more ? showQuestions() : showResult();
    } else {
        alert("Invalid key. Choose between 1 and 4");
    }
});


import { current, getScore, reset, submit } from "../state/quiz.js";
import { getHighScore, setHighScore } from "./highscore.js";
import { startTimer } from "./timer.js";

let quizCard = document.createElement("div");
quizCard.id = "quiz-card";
document.body.append(quizCard);

export function showQuestions() {
    let q = current();
    quizCard.innerHTML = `
        <h2>${q.text}</h2>
        <div id="choices"></div>
        <p id="timer-box">Time left: <span id="timer">30</span> seconds</p>
        <p id="progress"></p>
    `;

    startTimer(); // now runs AFTER #timer exists

    let choiceBox = document.querySelector("#choices");
    q.choices.forEach((el, idx) => {
        let button = document.createElement("button");
        button.innerText = `${idx + 1}. ${el}`;
        button.onclick = () => {
            let more = submit(idx);
            more ? showQuestions() : showResult();
        };
        choiceBox.append(button);
    });

    getProgress();
}


export function getProgress() {
    const { score, total, highScore} = getScore();
    quizCard.querySelector("#progress").textContent = `Score: ${score} / Total: ${total}.         
    
   
   
    HighScore= ${highScore}
    
    `;
}

export function showResult() {
    const { score, total } = getScore();
    setHighScore(score);
    const highScore = getHighScore();

    quizCard.innerHTML = `
        <h2>Quiz is Finished</h2>
        <p>Your score: ${score} / ${total}</p>
        <p>High Score: ${highScore}</p>
        <button id="retry">Try Again</button>
    `;

    quizCard.querySelector("#retry").onclick = () => {
        reset();
        showQuestions();
    };
}
