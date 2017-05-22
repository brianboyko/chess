function isDiagonalPathClear(nota1, nota2) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  if ((x2 > x1) && (y2 > y1)) {
    var xDirection = 1;
    var yDirection = 1;
    var path = getPath(nota1, nota2, xDirection, yDirection);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if ((x2 > x1) && (y2 < y1)) {
    var xDirection = 1;
    var yDirection = -1;
    var path = getPath(nota1, nota2, xDirection, yDirection);
    if (path) {
      var notatedPath = pathNotation(path)
      console.log(isPathClear(notatedPath, nota2, board))
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
    //i don't need the rest of the arrays once end coordinates are in path
  }
  else if((x2 < x1) && (y2 > y1)) {
    console.log('check133')
    var xDirection = -1;
    var yDirection = 1;
    var path = getPath(nota1, nota2, xDirection, yDirection);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if((x2 < x1) && (y2 < y1)) {
    console.log('check 145')
    var xDirection = -1;
    var yDirection = -1;
    var path = getPath(nota1, nota2, xDirection, yDirection);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
}

function getPath(nota1, nota2, x, y) {
  console.log('getPath lines 89-107 adds steps to the path')
  var path = [];
  var step = [nota1[0], nota1[1]]
  while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0] - x) && (step[1] !== nota2[1] - y)) {
    step = [step[0]+x, step[1]+y]
    console.log(step)
    if ((step[0] < 9) && (step[1] < 9)) {
      path.push(step)
    }
  }

  function isPathClear(array, nota2, board) {
    var path = array
    console.log('225')
    console.log(path)
    var numberOfPiecesOnPath = path.filter(function(e) {return board[e]}).length
    console.log(numberOfPiecesOnPath)
    var destination = path.length
    //console.log(path.filter(function(e) {return map[e]}), '37')
    if (numberOfPiecesOnPath > 0) {
      console.log('path is greater than zero')
      return false
    }
    else {
      return true
    }
    for (var square = 0; square < path.length - 1; square++){
      console.log(path[square], '39')
      // if ((path[square] in board) && (square !== path[destination])) {
      //   return path.filter(function(e))
      // }
      // else if ((path[square] in board) && (path[square] === path[destination])) {
      //   return true
      // }
      // else if (path[square] in board) {
      //   return false
      // }
    }
  }

  // i need to be eager about getting the money, and maintaining cordial w/
  // others when talking about business --- will reflect on this.
  // asking yourself and reflect tonight on what that was about...
//
//
// x2 = x1
// y2 = y1 +1
//
// x2 = x1 +1
// y2 = y2+1
//
// x2 = x1 +1
// y2 = y1
//
// x2 = x1 +1
// y2 = y1 -1
//
// x2 = x1
// y2 = y1 -1
//
// x2 = x1 -1
// y2 = y1 -1
//
// x2 = x1 -1
// y2 = y1
//
// x2 = x1 -1
// y2 = y1 +1
//
//
function isKingPathClear(nota1, nota2) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  return(((x2 = x1) && (y2 = y1 +1)) || ((x2 = x1 +1) && (y2 = y2+1)) ||
  ((x2 = x1 +1) && (y2 = y1)) || ((x2 = x1 +1) && (y2 = y1 -1)) || ((x2 = x1) && (y2 = y1 -1)) ||
  (x2 = x1 -1) && (y2 = y1 -1) || ((x2 = x1 -1) && (y2 = y1)) || ((x2 = x1 -1) && (y2 = y1 +1)))
}
if (((x2 = x1) && (y2 = y1 +1)) || ((x2 = x1 +1) && (y2 = y2+1)) ||
((x2 = x1 +1) && (y2 = y1)) || ((x2 = x1 +1) && (y2 = y1 -1)) || ((x2 = x1) && (y2 = y1 -1)) ||
(x2 = x1 -1) && (y2 = y1 -1) || ((x2 = x1 -1) && (y2 = y1)) || ((x2 = x1 -1) && (y2 = y1 +1)))
//
// a monkey, an elephant, and a partridge are standing around a fig tree
// discussing who deserves veneration
//
// the monkey attests when he was young he could hug the fig tree
// the elephant counters saying when he was young he could trample the fig tree
// finally the partridge settles the dispute saying when he was young
// he carried the seed that became the fig tree.
//
// what does this mean to you?
