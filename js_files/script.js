let scoreBoard = [];

(function() {
    let cells = document.querySelectorAll(".cell");
    let human;
    let ai;

    // this function run at initial
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
    choosePlayer();

    // turn click event
    function turnClick() {
        cells.forEach((cell)=>
        cell.addEventListener("click",(e)=>{
            bxId = e.target.id;
            if (scoreBoard[bxId]!="undefined") {
                turn(bxId, human);
                console.log("ai has coosed : "+aiChoose());
                turn(aiChoose(),ai);
            }
            console.log(scoreBoard);
            })
        );
    }
    turnClick();

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
    function aiChoose() {
        return weakSelection();   
    }

})();

const miniMaxAlgo = ()=>{

}

const weakSelection = () =>{
    // if (boxEmpty()) {
        for (let i = 0; i < scoreBoard.length; i++) {
            if (scoreBoard[i] === undefined) {
                return i;
            }
        }
    // }
    // else{
        console.log("check box is full hence draw");
        return -1;
    // }
}

const boxEmpty = ()=>{
    for (let i = 0; i < scoreBoard.length; i++) {
        if(scoreBoard[i] === undefined){
            return true;
        }
        else
        return false;
    }
}