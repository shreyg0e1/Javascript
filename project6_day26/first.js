//  features:-
// 1. Two-player mode 
// 2. 3x3 game board
// 3. Player turn display
// 4. Win detection (8 combinations)
// 5. Draw detection
// 6. Winning cells highlighted (golden)
// 7. Undo last move (double-click)
// 8. 3-second undo timeout
// 9. Only last move can be undone
// 10. Reset button (clears board & state)
// 11. Active player image highlight (scale & opacity)
// 12. Visual undo cue (box-shadow)
// 13. Prevent move after win/draw
// 14. Prevent clicking filled cells
// 15. Uses image-based symbols (g\_zero, g\_cross)


// // ====================================================================
//                              TIC TAC TOE
// // ====================================================================
// 

// // STEP1: Acessing gameboard

const board = document.querySelector("#game_board");

let turn="o"; // taki hum 0 and X place kr ske
let total_turn=0; // draw ke liye hai

//last move undo k liye
let lastMoveIndex = null;
let canUndo = false;
let undoTimer = null;
let gameOver = false;



function scaleActivePlayer() { //image badi krna current player ki
  if (turn === "o") {
    document.getElementById("img1").style.transform = "scale(1.2)";
    document.getElementById("img2").style.transform = "scale(1)";
    document.getElementById("screen").innerHTML="Player 1"
  } else {
    document.getElementById("img1").style.transform = "scale(1)";
    document.getElementById("img2").style.transform = "scale(1.2)";
    document.getElementById("screen").innerHTML="Player 2"
  }
}


function undoMove(index) { // undo k liye function

   if (gameOver) {
    document.getElementById("screen").innerHTML = "Game over. Undo not allowed.";
    return;
  }

  if (canUndo && lastMoveIndex == index) {
       // Clear cell
      document.getElementById(index).innerHTML = "";
      board_array[index] = "E"; // clear the board_array again
    
        // Adjust turn
       if (turn === "o") {
      turn = "x";
    } else {
      turn = "o";
    }

     total_turn--; // turn jo bhadgyi hongi unhe minus krna
     canUndo = false;
     lastMoveIndex = null;

     scaleActivePlayer();
       document.getElementById("screen").innerHTML = "Undo successful!";
     } 
  else {
    document.getElementById("screen").innerHTML = "Undo failed!";
  }
}


const winner_Case=[

    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]


]

let board_array= new Array(9).fill("E") //We need to initialize all cells as empty so that we can track when they are filled or used.

//   0    1    2    3    4    5    6    7    8
// ["E", "E", "E", "E", "E", "E", "E", "E", "E"] 


// checking winner

function check_winner(){

  for(let [index0, index1, index2] of winner_Case){
    if(board_array[index0]!="E" && board_array[index1]!="E" && board_array[index2]!="E" && board_array[index0]==board_array[index1] && board_array[index1]==board_array[index2] )
  

     
      return [index0,index1,index2];
  }  

 return 0;

}


// writing everthing in a function (jo call back vala tha taki addeventlistenr and removeeventlistner me ache se use easy krske)

let printer= (event) => {
  const element = event.target;
  if (board_array[element.id]==="E"){
 
// STEP2: try putting values "0" or "X" as images by using "turn"
  total_turn++;
  if(turn==="o"){
    
    element.innerHTML= `<img src="g_zero.png" alt="circle" style="height: 120px; width: 120px;">`;
    board_array[element.id]="o" // update value each time in empty array i.e board_array
    lastMoveIndex = element.id; // storing last index of clicked cell
    canUndo = true; // allowing it for undo 
    clearTimeout(undoTimer); //Let’s cancel the previous timer. Now we’ll start a fresh 3-second timer for the new move.
    undoTimer = setTimeout(() => {  // 3 sec hote hi canUndo=false taki fir undo na hopai
    canUndo = false;
  }, 3000);

    // highlighting winning cells and cheching winners each time
    let who_won=check_winner() // stores the value indexes of winning cells 
    if(who_won){ // checing winner using check_winner()
    
       gameOver = true;




      who_won.forEach((i)=>{
        document.getElementById(`${i}`).style.background = "yellow";
        document.getElementById(`${i}`).style.boxShadow = "0 0 15px 5px gold";
        
       })

      document.getElementById("screen").innerHTML="winner is Player 1"
      return;
      

      // board.removeEventListener("click",callback ) : remove kree hai event listener taki jitne ke baad khi type na ho
board.removeEventListener("click", printer)
  } 

    turn="x";
    


}

else{

   element.innerHTML=  `<img src="g_cross.png" alt="circle" style="height: 120px; width: 120px;">`;
  board_array[element.id]="x" // update value each time in empty array i.e board_array
      
  lastMoveIndex = element.id; // storing last index of clicked cell
    canUndo = true; // allowing it for undo 
    clearTimeout(undoTimer); //Let’s cancel the previous timer. Now we’ll start a fresh 3-second timer for the new move.
    undoTimer = setTimeout(() => {  // 3 sec hote hi canUndo=false taki fir undo na hopai
    canUndo = false;
  }, 3000); 
  
  
  // highlighting winning cells and cheching winners each time
    let who_won=check_winner() // stores the value indexes of winning cells 
    if(who_won){ // checing winner using check_winner()
     
      gameOver = true;
      who_won.forEach((i)=>{ //coloring the winning cells
        document.getElementById(`${i}`).style.background = "yellow";
        document.getElementById(`${i}`).style.boxShadow = "0 0 15px 5px gold";
        
       })
      document.getElementById("screen").innerHTML="winner is Player 2"
      return;


       // board.removeEventListener("click",callback ) : remove kree hai event listener taki jitne ke baad khi type na ho
          board.removeEventListener("click", printer)
         } 
         turn="o";
         
        }
        
        scaleActivePlayer(); // image scale up hori hai 

        if(total_turn==9){
          document.getElementById("screen").innerHTML="Its a Draw"

        }

       
      }

 


}




board.addEventListener("click",printer);

//undo k liye 
let allCells = document.getElementsByClassName("cell");
Array.from(allCells).forEach((cell) => {
  cell.addEventListener("dblclick", (e) => {
   undoMove(e.currentTarget.id); //Because e.target.id is not the cell if you double-click on the <img>. It gives undefined.
// easy hindi me: jb e.target likhra hu toh jb double click krra hu undo ke liye tb cell pe nahi image pe bhi click hora hai
// isi vja sae program nhi jaan para kya htana hai
// pr jb current target likhra hu tb ache se confirm hai ki cell pr click hora hai beshak and image ho cross ya circle ki
// e.target	The exact element where the user clicked (could be <img>, <span> etc.)
// e.currentTarget	The element on which the event listener is attached (in our case, .cell)

});
});



// Reset button
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
  let clear= document.getElementsByClassName("cell");
Array.from(clear).forEach((val)=>{
 val.innerHTML=""
 val.style.background=""
 val.style.boxShadow=""
})

// Reset game logic
  turn="o";
  total_turn=0;
  board_array= new Array(9).fill("E")
  board.addEventListener("click",printer);
  document.getElementById("screen").innerHTML="Let's Play!"

// Reset scaling images
  document.getElementById("img1").style.transform = "scale(1)";
  document.getElementById("img2").style.transform = "scale(1)";
 
//  Reset undo mechanism
  clearTimeout(undoTimer);
  canUndo = false;
  lastMoveIndex = null;

//  Reset game over state
  gameOver = false;
   
})










