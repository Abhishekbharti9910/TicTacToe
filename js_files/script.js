var scoreBoard = new Array(9);

let startGame = (function () {
    let cells = document.querySelectorAll(".cell");
    let human;
    let ai;

    // tocheck board is empty
    const isBoxFull = function () {
        for (let i = 0; i < scoreBoard.length; i++) {
            if (scoreBoard[i] == undefined) {
                return false;
            }
        }
        return true;
    };
    const boxEmpty = (i) => {
        console.log(scoreBoard[i]);
        if (scoreBoard[i] == undefined) {
            return true;
        }
        else {
            false;
        }
    }
    // this function run at onload
    function choosePlayer() {
        const choose = document.querySelectorAll(".choose");
        // let smallNode = document.querySelector("small");
        choose.forEach((sign) => {
            sign.addEventListener("click", (e) => {
                human = e.target.id;
                if (human == "X") {
                    ai = "O";
                }
                else {
                    ai = "X";
                }
                console.log(human);
                console.log(ai);
                // smallNode.innerHTML = "hello";
            })
        });
    }
    choosePlayer();

    function aiChoose() {
        return aiSelectionType.weakSelection();
    }
    // turn click event
    function turnClick() {
        cells.forEach((cell) =>
            cell.addEventListener("click", (e) => {
                bxId = e.target.id;
                if (boxEmpty(bxId)) {
                    console.log("you choosed " + bxId);
                    // e.target.innerHTML = human;
                    turn(bxId, human);
                    console.log(scoreBoard);
                    let k = aiChoose();
                    if (k >= 0) {
                        // document.getElementById(`${k}`).innerHTML = ai;
                        // console.log("ai choosed " + k);
                        turn(k, ai);
                        
                    }
                }
            })
        );
    }
    turnClick();
    //clear cells
    const clearCells = () => {
        cells.forEach((cell) => {
            console.log("hello");
            cell.innerHTML = ' ';
        })
        for (let i = 0; i < scoreBoard.length; i++) {
            scoreBoard[i] = undefined;
        }
    }

    // player turn
    function turn(boxId, player) {
        console.log("box id : "+ boxId);
        document.getElementById(`${boxId}`).innerHTML = player;
        scoreBoard[boxId] = player;
        let winCard = document.getElementById("winLoss");
        if (win(player)) {
            let k = player == human ? "You win congratulations!" : "You utterly loos!";
            setTimeout(()=>{
                document.getElementById("result").innerHTML = k;
                winCard.classList.remove("hide");
                clearCells();
            }, 1000);
        }
        else if (isBoxFull()) {
            setTimeout(() => {
                document.getElementById("result").innerHTML = `Game Draw !`;
                winCard.classList.remove("hide");
                clearCells();
            }, 1000);
        }
    }

    // winning condition
    function win(player) {
        if (scoreBoard[0] == player) {
            if (scoreBoard[4] == player && scoreBoard[8] == player) {
                highLight(0,4,8);
                return true;
            }
        }
        if (scoreBoard[2] == player) {
            if (scoreBoard[4] == player && scoreBoard[6] == player) {
                highLight(2,4,6);
                return true;
            }
        }
        if (scoreBoard[0] == player) {
            if (scoreBoard[3] == player && scoreBoard[6] == player) {
                highLight(0,3,6);
                return true;
            }
        }
        if (scoreBoard[0] == player) {
            if (scoreBoard[1] == player && scoreBoard[2] == player) {
                highLight(0,1,2);
                return true;
            }
        }
        if (scoreBoard[1] == player) {
            if (scoreBoard[4] == player && scoreBoard[7] == player) {
                highLight(1,4,7);
                return true;
            }
        }
        if (scoreBoard[2] == player) {
            if (scoreBoard[5] == player && scoreBoard[8] == player) {
                highLight(2,5,8);
                return true;
            }
        }
        if (scoreBoard[3] == player) {
            if (scoreBoard[4] == player && scoreBoard[5] == player) {
                highLight(3,4,5);
                return true;
            }
        }
        if (scoreBoard[6] == player) {
            if (scoreBoard[7] == player && scoreBoard[8] == player) {
                highLight(6,7,8);
                return true;
            }
        }

    }

    // highlighting win cells
    const highLight = (a,b,c)=>{
        document.getElementById(a).classList.add("highLight");
        document.getElementById(b).classList.add("highLight");
        document.getElementById(c).classList.add("highLight");
        setTimeout(() => {
            document.getElementById(a).classList.remove("highLight");
            document.getElementById(b).classList.remove("highLight");
            document.getElementById(c).classList.remove("highLight"); 
        }, 2000);
    }

    return { choosePlayer, turnClick, win };
})();

// computer playing techniques
let aiSelectionType = (function name(params) {
    const miniMaxAlgo = () => {
        // soon implementation
    }
    const weakSelection = () => {
        // if (boxEmpty()) {
        let emptyBox = [];
        let k = 0;
        for (let i = 0; i < scoreBoard.length; i++) {
            if (scoreBoard[i] == undefined) {
                emptyBox[k] = i;
                k++;
            }
        }
        // }
        // else{

        if (emptyBox[0] != undefined) {
            k = Math.floor(Math.random() * emptyBox.length);
            return emptyBox[k];
        }
        else {
            return -1;
        }
        // }
    }
    return { weakSelection, miniMaxAlgo };
})();

let reInitalizing = (() => {
    const retryBtn = () => {
        let retryBtn = document.querySelector(".retryBtn");
        retryBtn.addEventListener("click", () => {
            document.getElementById("winLoss").classList.add("hide");
            document.getElementById("onload").removeAttribute("style");
        })
    }
    retryBtn();
})();



// form and card function envocation
