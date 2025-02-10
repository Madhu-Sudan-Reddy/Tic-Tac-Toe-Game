let cards = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#reset");
let wdiv = document.querySelector(".hide");
let mesg = document.querySelector("#mesg");
let newgame = document.querySelector("#reset");
let decor = document.querySelectorAll(".confetti");

let turnO = true;
let n=0;
const winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

cards.forEach ((box)=> {
    box.addEventListener("click", (event) =>{
        console.log("You have clicked the card");
        if(turnO){
        // event.target.innerText="X";
        //console.log(event);
        box.innerText="O";
        turnO=false;
        n++;
        }else if(turnO==false){
            box.innerText="X";
            turnO=true;
            n++;
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

const showWinner=(winner)=>{
    mesg.innerText=`Congratulations, Winner is ${winner} `;
    wdiv.classList.remove("hide");

}

const greset = ()=>{
    for(let box of cards){
        box.innerText=" ";
        box.disabled=false;
    }
    turnO = true;
    wdiv.classList.add("hide");
}

reset[1].addEventListener("click",greset);
newgame.addEventListener("click",greset);

const checkWinner = ()=> {
    for(pattern of winpattern){
        let pattern1 = cards[pattern[0]].innerText;
        let pattern2 = cards[pattern[1]].innerText;
        let pattern3 = cards[pattern[2]].innerText;

    if(pattern1 !=="" && pattern2 !=="" && pattern3 !==""){
        if(pattern1===pattern2 && pattern2===pattern3){
            console.log(pattern1," is winner");
            disableAll();
            showWinner(pattern1);
        } else {
            checkCondition(pattern1,pattern2,pattern3);
        }
        }
    }

}

const checkCondition = (pattern1,pattern2,pattern3)=> {

    if(n===9 && pattern1!==pattern2 && pattern2!==pattern3 ){
        mesg.innerText=`Game was a Draw`;
        newgame.innerText="Play Again";
        wdiv.classList.remove("hide");
        decor.forEach(node => node.remove());  // Removes each element
    }
}


