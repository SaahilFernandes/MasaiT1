import { submit } from "../state/quiz.js";
import { showQuestions, showResult } from "./dom.js"; 

let timeLeft = 30;
let timerId;

export function startTimer() {
    clearInterval(timerId); 
    timeLeft = 30;
    document.getElementById('timer').textContent = timeLeft;

    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            let more = submit(-1); 
            more ? showQuestions() : showResult();
        }
    }, 1000);
}
