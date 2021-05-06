let rounds = document.querySelector("#rounds");
let score = document.querySelector("#scorer");
let scorep1 = document.querySelector("#p1s");
let scorep2 = document.querySelector("#p2s");
let p1button = document.querySelector("#btnplayer1");
let p2button = document.querySelector("#btnplayer2");
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 5;

p1button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;



        if (p1Score === winningScore) {
            isGameOver = true;
            scorep1.innerText = p1Score;
            scorep1.style.color = "green";
            scorep2.style.color = "red";
            p1button.disabled = true;
            p2button.disabled = true;
        }
        scorep1.innerText = p1Score;
    }
})
p2button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;



        if (p2Score === winningScore) {
            isGameOver = true;
            scorep2.innerText = p2Score;
            scorep2.style.color = "green";
            scorep1.style.color = "red";
            p1button.disabled = true;
            p2button.disabled = true;


        }
        scorep2.innerText = p2Score;
    }
})
rounds.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

})
function reset() {
    isGameOver = false;
    p2Score = 0;
    p1Score = 0;
    scorep1.innerText = 0;
    scorep2.innerText = 0;
    scorep2.style.color = "black";
    scorep1.style.color = "black";
    p1button.disabled = false;
    p2button.disabled = false;
}
document.querySelector("#reset").addEventListener('click', reset);

