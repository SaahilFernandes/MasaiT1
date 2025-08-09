import { questions } from "../data/questions.js";
import { randomQuote } from "./random.js";
import { getHighScore } from "../dom/highscore.js";

export let keystrokes = [];


let score = 0;


let done = [];

let index= 0 

export function current(){
    return questions[index]
}

export function submit(choiceIndex){
    if(choiceIndex== current().answer){
        score++
    }
    done.push(index);

    index=randomQuote(questions, done); 
    return done.length < questions.length
}

export function getScore(){
    const highScore = getHighScore();
    return {score, total:questions.length, highScore}
}

export function reset(){
    score=0
    index=0
    keystrokes=[]

}
