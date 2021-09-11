var scoreBoard = new Array(9);

let startGame = (function() {
    let cells = document.querySelectorAll(".cell");
    let human;
    let ai;

    // tocheck board is empty
    const boxEmpty = (i)=>{
        // for (let i = 0; i < scoreBoard.length; i++) {
        //     if(scoreBoard[i] === undefined){
        //         return true;
        //     }
        //     else
        //     return false;
        // }
        console.log(scoreBoard[i]);
        if (scoreBoard[i] == undefined) {
            return true;
        }
        else{
            false;
        }
    }
    // this function run at onload
    function choosePlayer() {
        const choose = document.querySelectorAll(".choose");
        choose.forEach((sign)=>{
            sign.addEventListener("click",(e)=>{
                    human = e.target.id;
                    if (human=="X") {
                        ai = "O";
                    }
                    else{
                        ai = "X";
                    }
                    console.log(human);
                    console.log(ai);
            })
        })
    } 
    function aiChoose() {
        return aiSelectionType.weakSelection();   
    }
    // turn click event
    function turnClick() {
        cells.forEach((cell)=>
        cell.addEventListener("click",(e)=>{
            bxId = e.target.id;
            if (boxEmpty(bxId)) {
                console.log("you choosed "+bxId);
                turn(bxId, human);
                e.target.innerHTML = human;
                let k = aiChoose();
                document.getElementById(`${k}`).innerHTML = ai;
                console.log("ai choosed "+k);
                turn(k,ai);
                console.log(scoreBoard);
            }
            })
        );
    }
    // player turn
    function turn(boxId,player) {
        scoreBoard[boxId] = player;
        if (win(player)) {
            console.log(`player ${player} won`);
        }
    }
    // winning condition
    function win(player) {
        if (scoreBoard[0]==player) {
            if (scoreBoard[4]==player && scoreBoard[8] == player) {
                return true;
            }
        }
        if (scoreBoard[2]==player) {
            if (scoreBoard[4]==player && scoreBoard[6] == player) {
                return true;
            }
        }
        if (scoreBoard[0]==player) {
            if (scoreBoard[3]==player && scoreBoard[6] == player) {
                return true;
            }
        }
        if (scoreBoard[0]==player) {
            if (scoreBoard[1]==player && scoreBoard[2] == player) {
                return true;
            }
        }
        if (scoreBoard[1]==player) {
            if (scoreBoard[4]==player && scoreBoard[7] == player) {
                return true;
            }
        }
        if (scoreBoard[2]==player) {
            if (scoreBoard[5]==player && scoreBoard[8] == player) {
                return true;
            }
        }
        if (scoreBoard[3]==player) {
            if (scoreBoard[4]==player && scoreBoard[5] == player) {
                return true;
            }
        }
        if (scoreBoard[6]==player) {
            if (scoreBoard[7]==player && scoreBoard[8] == player) {
                return true;
            }
        }

    }

    return {choosePlayer, turnClick, win};
})();

// computer playing techniques
let aiSelectionType = (function name(params) {
    const miniMaxAlgo = ()=>{

    }
    const weakSelection = () =>{
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
            
            if (emptyBox[0]!=undefined) {
                console.log(emptyBox);
                k = Math.floor(Math.random() * emptyBox.length);
                console.log(k);
                return emptyBox[k];
            }
            else{
            console.log("check box is full hence draw");
            return -1;
            }
        // }
    }
    return {weakSelection, miniMaxAlgo};
})();


// aiChoose();
startGame.choosePlayer();
startGame.turnClick();



// form and card function envocation
