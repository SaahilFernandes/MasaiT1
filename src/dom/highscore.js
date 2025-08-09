// highscore.js
export function getHighScore() {
    return parseInt(localStorage.getItem("highScore")) || 0;
}

export function setHighScore(score) {
    let currentHigh = getHighScore();
    if (score > currentHigh) {
        localStorage.setItem("highScore", score);
    }
}
