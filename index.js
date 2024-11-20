const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newgamebtn=document.querySelector(".btn"); 

let currentplayer;
let gameGrid;

const winningposition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initGame(){
    currentplayer='X';
    gameGrid=["","","","","","","","",""];

    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";

        box.classList=`box box${index+1}`;
    });

    newgamebtn.classList.remove("active");
    gameInfo.innerText=`current player- ${currentplayer}`;

}

initGame();

function swapTurn(){
    if(currentplayer==="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X";
    }
    gameInfo.innerText=`Current Player -${currentplayer}`;
}

function checkGameOver() {
    let answer="";
     
    winningposition.forEach((position)=>{
        if((gameGrid[position[0]] !=="" || gameGrid[position[1]]!=="" || gameGrid[poaition[2]] !=="")
        && (gameGrid[position[0]]===gameGrid[position[1]]) && (gameGrid[position[1]]===gameGrid[position[2]])){
            
            if(gameGrid[position[0]]==="X")
                answer="X";
            else
                answer="O";

                boxes.forEach((box)=>{
                    box.style.pointerEvents="none";
                })

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");

        }
    });
    if(answer !==""){
        gameInfo.innerText=`winner player- ${answer}`;
        newgamebtn.classList.add("active");
        return;
    }
    let fillcount=0;
    gameGrid.forEach((box)=>{
        if(box!=="")
        fillcount++;
    });

    if(fillcount===9){
        gameInfo.innerText="Game Tie";
        newgamebtn.classList.add("active");
    }
}

function handleClick(index){
    if(gameGrid[index]=== ""){
        boxes[index].innerText=currentplayer;
        gameGrid[index]=currentplayer; 
        boxes[index].style.pointerEvents="none";

        swapTurn();

        checkGameOver();
    }
}

boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        handleClick(index);
    })
    
});