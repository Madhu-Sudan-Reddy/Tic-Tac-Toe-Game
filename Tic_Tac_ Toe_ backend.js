
let cards = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");
let wdiv = document.querySelector(".hide");
let mesg = document.querySelector("#mesg");
let newgame = document.querySelector(".reset");
let decor = document.querySelectorAll(".confetti");
let row1 = document.querySelector("#row1");
let row2 = document.querySelector("#row2");
let row3 = document.querySelector("#row3");
let column1 = document.querySelector("#column1");
let column2 = document.querySelector("#column2");
let column3 = document.querySelector("#column3");
let diagnoal1 = document.querySelector("#diagnoal1");
let diagnoal2 = document.querySelector("#diagnoal2");



let turnO = true;
let n=0;
const winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

cards.forEach ((box)=> {
    box.addEventListener("click", () =>{
        console.log("You have clicked the card");
        if(turnO){
        box.innerText="O";
        turnO=false;
        n++;
        console.log(n);
        }else if(turnO==false){
            box.innerText="X";
            turnO=true;
            n++;
            console.log(n);
        }
        box.disabled =true;
        checkWinner();
        
       
    });
});

const disableAll=()=>{
    for(let box of cards){
        box.disabled=true;
    }
}

const showWinner=(winner,p0,p1,p2)=>{
    winline(p0,p1,p2);
    mesg.innerText=`Congratulations, Winner is ${winner} `;
    wdiv.classList.remove("hide");

}

const greset = ()=>{
    for(let box of cards){
        box.innerText=" ";
        box.disabled=false;
    }
    turnO = true;
    n=0;
    wdiv.classList.add("hide");

    // Hide all winning lines
    row1.classList.add("hideclass");
    row2.classList.add("hideclass");
    row3.classList.add("hideclass");
    column1.classList.add("hideclass");
    column2.classList.add("hideclass");
    column3.classList.add("hideclass");
    diagnoal1.classList.add("hideclass");
    diagnoal2.classList.add("hideclass");
}

reset[1].addEventListener("click",greset);
newgame.addEventListener("click",greset);

const checkWinner = ()=> {
    for(pattern of winpattern){
        let p0 = pattern[0];
        let p1= pattern[1];
        let p2= pattern[2];
        let pattern1 = cards[pattern[0]].innerText;
        let pattern2 = cards[pattern[1]].innerText;
        let pattern3 = cards[pattern[2]].innerText;

    if(pattern1 !=="" && pattern2 !=="" && pattern3 !==""){
        if(pattern1===pattern2 && pattern2===pattern3){
            console.log(pattern1," is winner");
            disableAll();
            showWinner(pattern1,p0,p1,p2);
            return true;
        } else {
             checkCondition();
        }
        }

    }
};


const winline = (pattern0, pattern1, pattern2) => {
    console.log(pattern0, pattern1, pattern2);

    if (pattern0 === 0 && pattern1 === 1 && pattern2 === 2) {
        row1.classList.remove("hideclass"); // Top row
    } else if (pattern0 === 3 && pattern1 === 4 && pattern2 === 5) {
        row2.classList.remove("hideclass"); // Middle row
    } else if (pattern0 === 6 && pattern1 === 7 && pattern2 === 8) {
        row3.classList.remove("hideclass"); // Bottom row
    } else if (pattern0 === 0 && pattern1 === 3 && pattern2 === 6) {
        column1.classList.remove("hideclass"); // Left column
    } else if (pattern0 === 1 && pattern1 === 4 && pattern2 === 7) {
        column2.classList.remove("hideclass"); // Middle column
    } else if (pattern0 === 2 && pattern1 === 5 && pattern2 === 8) {
        column3.classList.remove("hideclass"); // Right column
    } else if (pattern0 === 0 && pattern1 === 4 && pattern2 === 8) {
        diagnoal1.classList.remove("hideclass"); // Diagonal top-left to bottom-right
    } else if (pattern0 === 2 && pattern1 === 4 && pattern2 === 6) {
        diagnoal2.classList.remove("hideclass"); // Diagonal top-right to bottom-left
    }
};

const checkCondition = ()=> {

    if(n===9){
        // console.log("Draw")
        mesg.innerText=`Game was a Draw`;
        newgame.innerText="Play Again";
        wdiv.classList.remove("hide");
        decor.forEach(node => node.remove());  // Removes each element
    }
}






