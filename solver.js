//let puzzleArray = [9][9];

//const zeroToEight = [0,1,2,3,4,5,6,7,8];

//test
// hard
let puzzleArray = 
            [[0,2,0,6,0,8,0,0,0],
             [5,8,0,0,0,9,7,0,0],
             [0,0,0,0,4,0,0,0,0],
             [3,7,0,0,0,0,5,0,0],
             [6,0,0,0,0,0,0,0,4],
             [0,0,8,0,0,0,0,1,3],
             [0,0,0,0,2,0,0,0,0],
             [0,0,9,8,0,0,0,3,6],
             [0,0,0,3,0,6,0,9,0]]
/*
let puzzleArray = 
            [[0,0,4,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0],
             [0,4,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0],
             [5,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,4,0,0,0]]


// hard
let puzzleArray = 
            [[2,0,0,3,0,0,0,0,0],
             [8,0,4,0,6,2,0,0,3],
             [0,1,3,8,0,0,2,0,0],
             [0,0,0,0,2,0,3,9,0],
             [5,0,7,0,0,0,6,2,1],
             [0,3,2,0,0,6,0,0,0],
             [0,2,0,0,0,9,1,4,0],
             [6,0,1,2,5,0,8,0,9],
             [0,0,0,0,0,1,0,0,2]]



// Really hard
let puzzleArray = 
            [[0,2,0,0,0,0,0,0,0],
             [0,0,0,6,0,0,0,0,3],
             [0,7,4,0,8,0,0,0,0],
             [0,0,0,0,0,3,0,0,2],
             [0,8,0,0,4,0,0,1,0],
             [6,0,0,5,0,0,0,0,0],
             [0,0,0,0,1,0,7,8,0],
             [5,0,0,0,0,9,0,0,0],
             [0,0,0,0,0,0,0,4,0]]



//Easy
let puzzleArray = 
            [[0,0,0,2,6,0,7,0,1],
             [6,8,0,0,7,0,0,9,0],
             [1,9,0,0,0,4,5,0,0],
             [8,2,0,1,0,0,0,4,0],
             [0,0,4,6,0,2,9,0,0],
             [0,5,0,0,0,3,0,2,8],
             [0,0,9,3,0,0,0,7,4],
             [0,4,0,0,5,0,0,3,6],
             [7,0,3,0,1,8,0,0,0]]


let puzzleArray = [[0,2,5,0,4,1,0,0,3],
             [9,4,0,0,0,0,0,0,0],
             [3,0,6,0,0,2,0,7,8],
             [0,8,0,1,7,0,0,0,0],
             [6,7,0,5,0,3,0,8,2],
             [0,0,0,0,2,8,0,4,0],
             [5,9,0,4,0,0,8,0,6],
             [0,0,0,0,0,0,0,5,1],
             [7,0,0,2,1,0,9,3,0]]
*/

let possibilitiesSetObj = {};

function printMain(mainArray){
  mainArray.forEach(innerArray => {
    process.stdout.write("|  ");
    innerArray.forEach(elem => {
      process.stdout.write(elem + "  |")
    })
    process.stdout.write("\n");
  });
  process.stdout.write("\n");
}

function fillpossibilitiesSetObj(puzzle){
  puzzle.forEach((innerArray, i) => {
    innerArray.forEach((elem, j) => {
      // for each empty box, create a set of all possibilities i,e 1 through 9
      if(elem == 0){
        possibilitiesSetObj[i + "" + j] = new Set([1,2,3,4,5,6,7,8,9])
      }
    })
  });
}

function printPossibilities(){
  console.log(possibilitiesSetObj);
}

printMain(puzzleArray);
fillpossibilitiesSetObj(puzzleArray)
printPossibilities();

//Given i,j index of empty spot in the puzzle area, return the indices where to look
function shouldBeUniqueIn(i,j){
  let setToReturn = new Set();
  let startX;
  let startY;

  [0,1,2,3,4,5,6,7,8].forEach(element => {
    setToReturn.add(i + "" + element);
  });

  [0,1,2,3,4,5,6,7,8].forEach(element => {
    setToReturn.add(element + "" + j);
  });

  if(i/3 < 1){
    startX = 0;
  } else if (i/3 < 2){
    startX = 3;
  } else{
    startX = 6;
  }

  if(j/3 < 1){
    startY = 0;
  } else if (j/3 < 2){
    startY = 3;
  } else{
    startY = 6;
  }

  [0,1,2].forEach(xToAdd => {
    [0,1,2].forEach(yToAdd => {
      setToReturn.add( (startX + xToAdd) + "" + (startY + yToAdd))
    })
  })

  // remove this entry itself
  setToReturn.delete(i + "" + j);
  //console.log(setToReturn.size);
  return setToReturn;
}

//Testing of shouldBeUniqueIn
//console.log(shouldBeUniqueIn(4,4));

function solvePuzzle(puzzleArray){
  puzzleArray.forEach((innerArray, i) => {
    innerArray.forEach((elem, j) => {
      // if a box is empty, check the possibilitiesSet and eliminate options
      if(elem == 0){
        //console.log();
        //console.log("checking box: " + i + "" + j);
        let boxesToCheck = shouldBeUniqueIn(i,j);
        let setToCheck = possibilitiesSetObj[i + "" + j];

        //console.log("State of Set before checking");
        //console.log(setToCheck);

        boxesToCheck.forEach(boxIndex => {
          //console.log("Removing: " + puzzleArray[boxIndex[0]][boxIndex[1]]);
          setToCheck.delete(puzzleArray[boxIndex[0]][boxIndex[1]]);
        })

        //console.log("State of Set after checking");
        //console.log(setToCheck);

        // If set of possibilities has just one element, we have our winner!
        if(setToCheck.size == 1){
          puzzleArray[i][j] = [...setToCheck][0];

          // If one the first try, there was never a deletion, no need to do this
          // elimination program again
          
          delete possibilitiesSetObj[i + "" + j];
        }
      } else {
        let boxesToCheck = shouldBeUniqueIn(i,j);
        
        //console.log(elem + " should be unique in ");
        //console.log(boxesToCheck);

        //This part below does exactly the same thing :(
        /*
          boxesToCheck.forEach(boxIndex => {
            
            if(possibilitiesSetObj[boxIndex[0] + "" + boxIndex[1]]){
              //console.log("remove " + elem + " from set: " + boxIndex[0] + "" + boxIndex[1]);
              //console.log("Before removing");
              //console.log(possibilitiesSetObj[boxIndex[0] + "" + boxIndex[1]]);

              if(puzzleArray[boxIndex[0]][boxIndex[1]] == 0){
                possibilitiesSetObj[boxIndex[0] + "" + boxIndex[1]].delete(elem)
              }

              //console.log("After removing");
              //console.log(possibilitiesSetObj[boxIndex[0] + "" + boxIndex[1]]);
              //console.log();
            }
          })
        */

        //setToCheck.forEach
      }
    })
  });
}


solvePuzzle(puzzleArray);
//printMain(puzzleArray);

printPossibilities();