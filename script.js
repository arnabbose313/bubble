let body = document.querySelector(".body");
let hit = document.querySelector(".hit");
let timerDiv = document.querySelector(".timer");
let score = document.querySelector(".score");
let cTime = false;

function bubblePlace() {
    let randomNumber = randGen();
    body.innerHTML = "";
    for (let i = 0; i < 40; i++) {
        let bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.innerHTML = randomNumber[i].toString().padStart(2, 0);
        body.appendChild(bubble);
        body.style.display = "grid";
    }
}

function randGen() {
    let randomNumber = [];
    while (randomNumber.length < 40) {
        let random = Math.floor(Math.random() * ((40 - 1) + 1) + 1);
        let randSame = false;
        randomNumber.forEach((number) => {
            if (number === random) {
                randSame = true;
            }
        })
        if (!randSame) {
            randomNumber.push(random);
        }
    }
    return randomNumber;
}

function hitGen() {
    let random = Math.floor(Math.random() * ((40 - 1) + 1) + 1);
    hit.innerHTML = random.toString().padStart(2, 0);
}

function timer() {
    cTime = 60;
    let timeInv = setInterval(() => {
        if (cTime >= 0) {
            timerDiv.innerHTML = cTime.toString().padStart(2, 0);
            cTime--;
        } else {
            clearInterval(timeInv);
            body.innerHTML = "<h1 style='color: #433878'>Game Over!</h1><h3 style='color: #433878'>Click Here to restart the game</h3>";
            body.style.display = "flex";
            cTime = false;
        }
    }, 1000)
}

body.addEventListener("click", (e) => {
    if (e.target.innerHTML === hit.innerHTML && cTime) {
        score.innerHTML = (Number(score.innerHTML) + 5).toString().padStart(3, 0);
        bubblePlace();
        hitGen();
    } else if (e.target.innerHTML !== hit.innerHTML && cTime) {
        if (Number(score.innerHTML) <= 3) {
            score.innerHTML = "000";
        } else {
            score.innerHTML = (Number(score.innerHTML) - 3).toString().padStart(3, 0);
        }
    } else if (!cTime) {
        score.innerHTML = "000";
        bubblePlace();
        hitGen();
        timer();
    }
})

body.innerHTML = "<h1 style='color: #433878'>Welcome</h1><h3 style='color: #433878'>Click Here to start the game</h3>";