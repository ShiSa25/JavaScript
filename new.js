//function to match the scores
const matchScores = (score1, score2) => {
    if (score1 === score2) {
        return true;
    }
    return false;
};

//function to pick highest score
const pickHighestScore = (score1, score2) => {
    if (score1 > score2) {
        return score1;
    }
    return score2;
};

// function to pick lowest score
const pickLowestScore = (score1, score2) => {
    if (score1 < score2) {
        return score1;
    }
    return score2;
};

// function to calculate the difference between two scores
const calculateDifference = (score1, score2) => {
    return Math.abs(score1 - score2);
};

//function to display the results
const displayResults = (score1, score2) => {
    console.log("Score 1: ", score1);
    console.log("Score 2: ", score2);
    console.log("Scores are equal: ", matchScores(score1, score2));
    console.log("Highest score: ", pickHighestScore(score1, score2));
    console.log("Lowest score: ", pickLowestScore(score1, score2));
    console.log("Difference: ", calculateDifference(score1, score2));
};