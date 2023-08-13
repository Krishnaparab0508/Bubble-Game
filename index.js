function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 120; i++) {
        clutter += ` <div id="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
var timer = 60;
var rn = 0;
var score = 0;
function runTimer() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerVal").textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over<h1>`
        }
    }, 1000);
}
function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector(".hitVal").textContent = rn;
}

function increaseScore() {
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}
document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === rn) {
        makeBubble();
        getNewHit();
        increaseScore();
    }
})
makeBubble();
runTimer();
getNewHit();




