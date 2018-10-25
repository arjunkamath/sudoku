
let puzzleArray = 
[[0,8,9,7,0,0,0,0,0],
 [2,0,4,0,0,0,5,7,0],
 [0,0,0,0,0,0,1,0,0],
 [0,0,8,0,0,7,9,2,0],
 [0,7,0,0,0,2,0,5,4],
 [0,0,0,0,0,6,0,0,8],
 [7,0,1,8,0,9,0,0,0],
 [8,0,5,1,2,0,0,0,0],
 [0,4,0,0,0,0,0,0,0]];

/*

// check for nonets
let puzzleArray = 
            [[0,0,0,2,0,4,8,1,0],
             [0,4,0,0,0,8,2,6,3],
             [3,0,0,1,6,0,0,0,4],
             [1,0,0,0,4,0,5,8,0],
             [6,3,5,8,2,0,0,0,7],
             [2,0,0,5,9,0,1,0,0],
             [9,1,0,7,0,0,0,4,0],
             [0,0,0,6,8,0,7,0,1],
             [8,0,0,4,0,3,0,5,0]];


// check for nonets

let puzzleArray = 
            [[0,8,9,7,0,0,0,0,0],
             [2,0,4,0,0,0,5,7,0],
             [0,0,0,0,0,0,1,0,0],
             [0,0,8,0,0,7,9,2,0],
             [0,7,0,0,0,2,0,5,4],
             [0,0,0,0,0,6,0,0,8],
             [7,0,1,8,0,9,0,0,0],
             [8,0,5,1,2,0,0,0,0],
             [0,4,0,0,0,0,0,0,0]];

let puzzleArray = 
            [[0,2,0,6,0,8,0,0,0],
             [5,8,0,0,0,9,7,0,0],
             [0,0,0,0,4,0,0,0,0],
             [3,7,0,0,0,0,5,0,0],
             [6,0,0,0,0,0,0,0,4],
             [0,0,8,0,0,0,0,1,3],
             [0,0,0,0,2,0,0,0,0],
             [0,0,9,8,0,0,0,3,6],
             [0,0,0,3,0,6,0,9,0]];

// check for nonets
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

function printMain(mainArray){
  console.log();
  mainArray.forEach(innerArray => {
    process.stdout.write("|  ");
    innerArray.forEach(elem => {
      process.stdout.write(elem + "  |")
    })
    process.stdout.write("\n");
  });
  process.stdout.write("\n");
}

*/

let possibilitiesSetObj = {};
let nonetsObj = {};

// To start with, fill the possibilities set with all values
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

fillpossibilitiesSetObj(puzzleArray);
//console.log(possibilitiesSetObj);

// Simplest solution is to solve by elimination. 
function solveByElimination(){
  puzzleArray.forEach((innerArray, i) => {
    innerArray.forEach((elem, j) => {
      // if a box is empty, check the possibilitiesSet and eliminate options
      if(elem == 0){
        let boxesToCheck = shouldBeUniqueIn(i,j);
        let setToCheck = possibilitiesSetObj[i + "" + j];

        boxesToCheck.forEach(boxIndex => {
          setToCheck.delete(puzzleArray[boxIndex[0]][boxIndex[1]]);
        })

        // If set of possibilities has just one element, we have our winner!
        if(setToCheck.size == 1){
          console.log([...setToCheck][0] + " goes to " + i + "" + j);
          
          puzzleArray[i][j] = [...setToCheck][0];

          // If there was a deletion, re-run elimination program again
          delete possibilitiesSetObj[i + "" + j];
          solveByElimination(puzzleArray)
        }
      }
    })
  });
}

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
  return setToReturn;
}


// Constructing an object with all the 27 nonets, ie 9 horizontals, 9 verticals, 8 boxes
function fillnonetsObj(){
  // {'x0' = {[00,01,02,03....]},
  //  'x1' = {[10,11,12,13....]} ...,
  //  'y0' = {[00,11,12,13....]} ...,
  //  'b0' = {[00,01,02,10,11,12,20,21,22]} ...,}

  [0,1,2,3,4,5,6,7,8].forEach(xIndex => {
    nonetsObj["x" + xIndex] = new Set();
    [0,1,2,3,4,5,6,7,8].forEach(yIndex => {
      nonetsObj["x" + xIndex].add(xIndex + "" + yIndex)
    })
  });

  [0,1,2,3,4,5,6,7,8].forEach(yIndex => {
    nonetsObj["y" + yIndex] = new Set();
    [0,1,2,3,4,5,6,7,8].forEach(xIndex => {
      nonetsObj["y" + yIndex].add(xIndex + "" + yIndex)
    })
  });
  
  [0,1,2].forEach(bXIndex => {
    [0,1,2].forEach(bYIndex => {
      nonetsObj["b" + bXIndex + "" + bYIndex] = new Set();
    })
  });

  [0,1,2,3,4,5,6,7,8].forEach(xIndex => {
    [0,1,2,3,4,5,6,7,8].forEach(yIndex => {
      nonetsObj["b" + Math.floor(xIndex/3) + "" + Math.floor(yIndex/3)].add(xIndex + "" + yIndex)
    })
  });
}

fillnonetsObj();

// All 9 digits must exist in each nonet
function solveByCheckingNonets(){
  Object.keys(nonetsObj).forEach(function(nonetKey) {

    [1,2,3,4,5,6,7,8,9].forEach(number => {
      if(!numberExistsInNonet(puzzleArray, number, nonetKey)){
        // assign a nonet for each number
        let nonet = new Set(nonetsObj[nonetKey]);

        // remove the boxIndex from this number's nonet, if the number cannot be 
        // in the box eg, if it exists in same vertical line in different block 
        nonet.forEach(boxIndex => {
          if(numberCannotBeInBox(number, boxIndex)){
            //console.log(number + " cannot be in " + boxIndex);
            nonet.delete(boxIndex)
          }
        })

        // if for this number's nonet, only one boxIndex remains
        // the number goes to the boxIndex
        if(nonet.size == 1){
          let iIndex = [...nonet][0];
          console.log(number + " goes to " + iIndex);
          puzzleArray[iIndex[0]][iIndex[1]] = number;
          delete possibilitiesSetObj[iIndex];
        }
      }
    })
  });
}

function numberCannotBeInBox(number, boxIndex){
  return ((puzzleArray[boxIndex[0]][boxIndex[1]]!= 0) || !((possibilitiesSetObj[boxIndex]).has(number)))
}

// Array.ForEach cannot break or return in the middle, this can be made more efficient but I'll leave this
// like this for now
function numberExistsInNonet(puzzleArray, number, nonetKey){
  let exists = false;
  nonetsObj[nonetKey].forEach(boxIndex => {
    if(puzzleArray[boxIndex[0]][boxIndex[1]] === number){
      exists = true;
    }
  })
  return exists;
};

// Read http://pi.math.cornell.edu/~mec/Summer2009/meerkamp/Site/Solving_any_Sudoku_II.html
// to understand the idea of pre-emptive sets

// Unfortunately, this also eventually requires 'guessing' and checking violations which I didn't want to do

function solveByPreemptiveSets(){
  Object.keys(nonetsObj).forEach(function(nonetKey) {
    let nonet = nonetsObj[nonetKey];
    let setsToCheck = {};
    let organizedSets = {};
    nonet.forEach((boxIndex) => {
      if(puzzleArray[boxIndex[0]][boxIndex[1]] == 0){
        setsToCheck[boxIndex] = possibilitiesSetObj[boxIndex];
      }
    })
    
    organizedSets = organizeSetAsPerNumber(setsToCheck);
    decideNumbersToEliminate(nonetKey, organizedSets);
  });
}

// assuming that we don't find pre-emptive sets that are larger than 5
function organizeSetAsPerNumber(setsObj){
  let orderedSetsObj = {};
  Object.keys(setsObj).forEach(key => {
    [2,3,4,5].forEach(num => {
      if(setsObj[key].size == num){
        if(!orderedSetsObj[num]) { orderedSetsObj[num] = {} }
        orderedSetsObj[num][key] = setsObj[key];
      }
    })
  })
  return orderedSetsObj;
}

function decideNumbersToEliminate(nonetKey, organizedSets){
  Object.keys(organizedSets).forEach(numberofElementsInSet => {
    if(Object.keys(organizedSets[numberofElementsInSet]).length == numberofElementsInSet){
      let array = [];
      Object.keys(organizedSets[numberofElementsInSet]).forEach(key =>{
        array.push(organizedSets[numberofElementsInSet][key])
      })
      if(areNSetsEqual(numberofElementsInSet, array)){
        console.log("remove from " + nonetKey);
      };
    } else if (Object.keys(organizedSets[numberofElementsInSet]).length > numberofElementsInSet){
      let combs = getCombinations(Object.keys(organizedSets[numberofElementsInSet]), numberofElementsInSet);

      combs.forEach(comb => {
        let comparisonArray = [];
        let boxesToLeaveOut = [];
        comb.forEach(boxIndex => {
          comparisonArray.push(possibilitiesSetObj[boxIndex])
          boxesToLeaveOut.push(boxIndex)
        })
        
        if(areNSetsEqual(numberofElementsInSet, comparisonArray)){
          removePossibilitiesFrom(nonetKey, comparisonArray[0], boxesToLeaveOut);
        }
      })
    }
  })
}

function removePossibilitiesFrom(nonetKey, setOfNumbersToEliminate, boxesToLeaveOut){
  nonetsObj[nonetKey].forEach(boxIndex => {
    if(!boxesToLeaveOut.includes(boxIndex) && possibilitiesSetObj[boxIndex]!= null ){
      console.log(boxIndex + " does not exist");
      setOfNumbersToEliminate.forEach(possibilityToRemove => {
        console.log("removing " + possibilityToRemove + " from");
        console.log(possibilitiesSetObj[boxIndex]);
        
        possibilitiesSetObj[boxIndex].delete(possibilityToRemove);
      })
    }
  })
}

// Given an array, return combinations considering noOfBoxesToCombine at a time (permutations and combinations from mathematics class :) )
function getCombinations(arrayOfBoxes, noOfBoxesToCombine){
  let combinations = [];
  listCombinations(arrayOfBoxes, noOfBoxesToCombine, 0, [])
  return combinations;

  // this needs recursion
  // PS: I forget why 'listCombinations' is inside 'getCombinations' function body. It was late and I was tired to find a better way!
  function listCombinations(array, count, pos, output){
    if(output.length == count ){
      combinations.push(output);
    } 
    for(let i = pos; i < (array.length ) ; i++){
      let interim = output.slice(0);
      
      interim.push(array[i]);
      listCombinations(array, count, i+1, interim)
    }  
  }
}

//We already Know that sets have same size
function areTwoSetsEqual(a, b) {   
  return ([...a].every(value => b.has(value))) 
};

function areThreeSetsEqual(a, b, c) { 
  return (areTwoSetsEqual(a,b) && areTwoSetsEqual(b,c))
};

function areFourSetsEqual(a, b, c, d) { 
  return (areTwoSetsEqual(a,b) && areTwoSetsEqual(b,c) && areTwoSetsEqual(c,d))
};

function areNSetsEqual(n,arrayOfSets){
  if(n==2){
    return areTwoSetsEqual( arrayOfSets[0], arrayOfSets[1] )
  } else if (n==3){
    return areThreeSetsEqual(arrayOfSets[0], arrayOfSets[1], arrayOfSets[2])
  } else if (n==4){
    return areFourSetsEqual(arrayOfSets[0], arrayOfSets[1], arrayOfSets[2], arrayOfSets[3])
  } 
}

solveByElimination();
console.log();
console.log(puzzleArray);

solveByCheckingNonets();
console.log();
console.log(puzzleArray);

solveByElimination();
console.log();
console.log(puzzleArray);

solveByPreemptiveSets();
console.log();
console.log(puzzleArray);

solveByElimination();
console.log();
console.log(puzzleArray);

solveByCheckingNonets();
console.log();
console.log(puzzleArray);

solveByElimination();
console.log();
console.log(puzzleArray);