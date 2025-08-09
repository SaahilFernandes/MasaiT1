export function randomQuote(questions, done) {
    let remaining = questions
        .map((_, idx) => idx)
        .filter(idx => !done.includes(idx));

    if (remaining.length === 0) {
        return null; // no more questions left
    }

    let randomIndex = Math.floor(Math.random() * remaining.length);
    return remaining[randomIndex];
}