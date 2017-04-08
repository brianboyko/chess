var history = [];

// var board = {
//   'A1': {'type': 'ROOK', 'color': 'WHITE'},
//   'B1': {'type': 'KNIGHT', 'color':'WHITE'},
//   'C1': {'type': 'BISHOP', 'color':'WHITE'},
//   'D1': {'type': 'QUEEN', 'color': 'WHITE'},
//   'E1': {'type': 'KING', 'color': 'WHITE'},
//   'F1': {'type': 'BISHOP', 'color': 'WHITE'},
//   'G1': {'type': 'KNIGHT', 'color': 'WHITE'},
//   'H1': {'type': 'ROOK', 'color': 'WHITE'},
//   'A2': {'type': 'PAWN', 'color': 'WHITE'},
//   'B2': {'type': 'PAWN', 'color': 'WHITE'},
//   'C2': {'type': 'PAWN', 'color': 'WHITE'},
//   'D2': {'type': 'PAWN', 'color': 'WHITE'},
//   'E2': {'type': 'PAWN', 'color': 'WHITE'},
//   'F2': {'type': 'PAWN', 'color': 'WHITE'},
//   'G2': {'type': 'PAWN', 'color': 'WHITE'},
//   'H2': {'type': 'PAWN', 'color': 'WHITE'},
//   'A8': {'type': 'ROOK', 'color': 'BLACK'},
//   'B8': {'type': 'KNIGHT', 'color':'BLACK'},
//   'C8': {'type': 'BISHOP', 'color':'BLACK'},
//   'D8': {'type': 'QUEEN', 'color': 'BLACK'},
//   'E8': {'type': 'KING', 'color': 'BLACK'},
//   'F8': {'type': 'BISHOP', 'color': 'BLACK'},
//   'G8': {'type': 'KNIGHT', 'color': 'BLACK'},
//   'H8': {'type': 'ROOK', 'color': 'BLACK'},
//   'A7': {'type': 'PAWN', 'color': 'BLACK'},
//   'B7': {'type': 'PAWN', 'color': 'BLACK'},
//   'C7': {'type': 'PAWN', 'color': 'BLACK'},
//   'D7': {'type': 'PAWN', 'color': 'BLACK'},
//   'E7': {'type': 'PAWN', 'color': 'BLACK'},
//   'F7': {'type': 'PAWN', 'color': 'BLACK'},
//   'G7': {'type': 'PAWN', 'color': 'BLACK'},
//   'H7': {'type': 'PAWN', 'color': 'BLACK'},
// };

var pawnTest = {
  'A4': {'type': 'PAWN', 'color': 'WHITE'},
  'B4': {'type': 'PAWN', 'color': 'BLACK'},
  'LASTMOVE:' : {'type': 'PAWN', 'color': 'WHITE', 'from': 'A2', 'to': 'A4'}
}

/**
 * whatColorForStartingPiece
 * A function to determine what color a piece should be, based on its
 *   starting position.
 * @param  {string} startingPosition This is a string describing the starting position.
 * @return {string} either 'WHITE' or 'BLACK'
 */
var whatColorForStartingPiece = function(startingPosition) {
  // This grabs the second character of the starting position.
  // If the character is either "7" or "8", it will fail the test and return BLACK,
  // otherwise it will return WHITE.
  return ('78'.indexOf(startingPosition.charAt(1)) === -1) ? 'WHITE' : 'BLACK';
}

/**
 * whatRankForStartingPiece
 *  Determines the rank of the starting piece based on if it is in a
 *  pawn or noble row & what rank it is.
 * @method whatRankForStartingPiece
 * @param  {string} startingPosition This is a string describing the starting position.
 * @return {string} The rank that should fill that position.
 */
var whatRankForStartingPiece = function(startingPosition) {
  var row = startingPosition.charAt(1);
  if(row === '7' || row === '2'){
    return 'PAWN';
  }
  var col = startingPosition.charAt(0);
  // we use the switch statement here to take advantage of the
  // "fallthrough" inherent to switch statements.
  switch(col){
    case 'A':
    case 'H':
      return 'ROOK';
    case 'B':
    case 'G':
      return 'KNIGHT';
    case 'C':
    case 'F':
      return 'BISHOP';
    case 'D':
      return 'QUEEN';
    case 'E':
      return 'KING';
    default:
      throw new Error('This is not a valid starting position row');
      break;
  }
  return null;
}

var makeStartingSquares = function(rows, cols){
  let squares = [];
  rows.forEach(function(row) {
    cols.forEach(function(col) {
      squares.push("" + col + row);
    })
  })
  return squares;
}

var mapCreator = function(){
  var rows = ['1', '2', '7', '8'];
  var cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  var startingSquares = makeStartingSquares(rows, cols);
  console.log(startingSquares)
}

var createMap = function () {
  var map = {};
  var rookStartingPositions = ['A1', 'H1', 'A7', 'H7']
  var rooks = ['A1', 'H1', 'A7', 'H7'].map(function(square){
    var color = 'WHITE';
    if (square.slice(1) === '7' || square.slice === '8'){
      color = 'BLACK'
    };
    map[square] = {type: "ROOK", color: color}
  })
  return map;
}

var bishopTest = {
  'B2': {'type': 'BISHOP', 'color': 'WHITE'},
  'B6': {'type': 'BISHOP', 'color': 'WHITE'},
  'D4': {'type': 'BISHOP', 'color': 'WHITE'},
  'F6': {'type': 'BISHOP', 'color': 'WHITE'},
  'F2': {'type': 'BISHOP', 'color': 'BLACK'}
};





//how do i return 'invalid entry' when the Key is not present in the
//hash map>
//each piece needs it's own validator
//let's say i want to write a validator for a bishop
//if it's a bishop it can moveValidator if there is no piece blocking it
//diagonally

//first lets check if the destination is within range

//how is the validator supposed to know what the rang``e of a bishop?

//range validator

//bishop

//can't moveValidator onto it's own rank or file
//can only moveValidator diagonal
//how is the board supposed to know what a diagonal moveValidator is?
//relative to its own postion

//is it +letter in proportion to +number 1 for 1?
//what does it

//have to convert letters to numbers
//a=1 b=2 c=3 d=4 e=5 f=6 g=7 h=8

//convert position to number
//positioncoverter function returns number returns (num1, num2)
//what is a short way to write if a position desination position equal to
//starting position (st1+n, st2+n)

//starting position (st1-n, st2-n)
//(st1-n, st2 +n)
//st1+n, st2-n)

//how can i make sure that the either number doesn't exceed 8?
//if st+n/-n < 9
//i can't check for other pieces until after the number is converted back into
//a string


//how to check if piece on bishop path?
//if moveValidator valid
//if there is a piece between the two points
//convert each number up to end into a string
//check if any string is a key in the map
//it's invalid if their own piece is in path/end, or if opponent's piece is
//on path
//if valid the key is rewritten


//assume user input is passed to this function
//just have it only take squares as input
//i have the square converted
//how do I check if something is in an object
//map.hasOwnProperty(note)
//a=1 b=2 c=3 d=4 e=5 f=6 g=7 h=8
//so converter needs to convert the string into a number
//if letter === 'a' 'b' 'c' etc.
//then return num



function intoNum(letter) {
  var reference = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8
  }
  return reference[letter]
}

var Notation = function(number) {
  var numMap = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H'
  }
  return numMap[number]
}

function isPathClear(array, nota1, nota2, board) {
  console.log(nota2, 'nota2')
  var path = array
  var pathClear = false
  var beginPos = arrayNotation(nota1)
  console.log(nota1,'here')
  console.log('nota2', nota2, 'nota2')
  var endPos = arrayNotation(nota2)
  console.log('225')
  console.log(path)
  var numberOfPiecesOnPath = path.filter(function(e) {return board[e]}).length
  console.log(numberOfPiecesOnPath, 'number of pieces')
  var destination = path.length
  //console.log(path.filter(function(e) {return map[e]}), '37')
  console.log(board, nota1, 'board and nota1')

  if ((numberOfPiecesOnPath > 0) && (board[endPos]) && (board[beginPos].color !== board[endPos].color)) {
    console.log('path is greater than zero')
    return true
  }
  else if (numberOfPiecesOnPath > 0) {
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

function isRookPathClear(nota1, nota2, board) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  if ((x1 = x2) && (y1 < y2)) {
    var type = "ROOK1"
    var xDirection = 0
    var yDirection = 1
    path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type)
    console.log('here', path, 'this is the path')
    if (path.length > 0) {
      notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota1, nota2, board)
    }
    else {return false}
  }
  else if ((x1 = x2) && (y1 > y2)) {
    var type = "ROOK2"
    var xDirection = 0
    var yDirection = -1
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type)
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota1, nota2, board)
    }
    else {return false}
  }
  else if ((x1 > x2) && (y1 = y2)) {
    var type = "ROOK3"
    var xDirection = -1
    var yDirection = 0
    path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type)
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if ((x1 < x2) && (y1 = y2)) {
    var type = "ROOK4"
    console.log('testing my rook')
    var xDirection = 1
    var yDirection = 0
    path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type)
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
}

function arrayNotation(array) {
  letter = Notation(array[0]);
  number = array[1].toString();
  return letter+number
}

function pathNotation(array) {
  return array.map(function(e) {return arrayNotation(e)})
}
function outOfBounds(a, b) {
  return ((a < 9) && (b < 9));
}

function converter(notation) {
  return notation.toUpperCase();
}

// position should be notation for consistency
// you thought position was an array, but it's a string
function coordinates(position) {
  var pair = [];
  pair.push(position.slice(0,1));
  pair.push(position.slice(1,2));
  pair[1] = parseInt(pair[1])
  pair[0] = intoNum(pair[0])
  return pair
}

function getDiagonalPath(nota1, nota2, x, y, type) {
  console.log('getDiagonalPath lines 89-107 adds steps to the path')
  var path = [];
  var step = [nota1[0], nota1[1]]
  console.log(step)
  if (type === 'BISHOP') {
    // TODO refactor condition in to helpers like isInBounds(coordinates) and coordinatesEqual(coordinatesOne, coordinatesTwo)
    while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0]) && (step[1] !== nota2[1])) {
      console.log('anything?') // TODO remove unused console.logs
      step = [step[0]+x, step[1]+y]
      console.log(step, 'new step')
      // TODO test and see if a full isInBounds check is needed here (bishop moving down)
      if ((step[0] < 9) && (step[1] < 9)) {
        path.push(step)
      }
      console.log(path)
    }
    console.log(path,nota2, 'this is path in getDiagonalPath')
    filtered = path.filter(function(e) {return (compare(e, nota2))})
    console.log(filtered, 'here')
    if (path.length > 0) {
      return path
    }
    else { return false }
  }
  if (type === 'ROOK1') {
    while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[1] !== nota2[1])) {
      console.log('anything?')
      step = [step[0]+x, step[1]+y]
      console.log(step, 'new step')
      if ((step[0] < 9) && (step[1] < 9)) {
        path.push(step)
      }
      console.log(path)
    }
    console.log(path,nota2, 'this is path in getDiagonalPath')
    filtered = path.filter(function(e) {return (compare(e, nota2))})
    console.log(filtered, 'here')
    if (path.length > 0) {
      return path
    }
    else { return false }
  }
  if (type === 'ROOK2') {
    while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[1] !== nota2[1])) {
      console.log('anything?')
      step = [step[0]+x, step[1]+y]
      console.log(step, 'new step')
      if ((step[0] < 9) && (step[1] < 9)) {
        path.push(step)
      }
      console.log(path)
    }
    console.log(path,nota2, 'this is path in getDiagonalPath')
    filtered = path.filter(function(e) {return (compare(e, nota2))})
    console.log(filtered, 'here')
    if (path.length > 0) {
      return path
    }
    else { return false }
  }
  if (type === 'ROOK3') {
    while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0])) {
      console.log('anything?')
      step = [step[0]+x, step[1]+y]
      console.log(step, 'new step')
      if ((step[0] < 9) && (step[1] < 9)) {
        path.push(step)
      }
      console.log(path)
    }
    console.log(path,nota2, 'this is path in getDiagonalPath')
    filtered = path.filter(function(e) {return (compare(e, nota2))})
    console.log(filtered, 'here')
    if (path.length > 0) {
      return path
    }
    else { return false }
  }
  if (type === 'ROOK4') { // TODO don't extend type / direction, make direction logic distinct
    while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0])) {
      console.log('anything?')
      step = [step[0]+x, step[1]+y]
      console.log(step, 'new step')
      if ((step[0] < 9) && (step[1] < 9)) {
        path.push(step)
      }
      console.log(path)
    }
    console.log(path,nota2, 'this is path in getDiagonalPath')
    filtered = path.filter(function(e) {return (compare(e, nota2))})
    console.log(filtered, 'here')
    if (path.length > 0) {
      return path
    }
    else { return false }
  }
  //step[0/1] !== nota2[0/1] does not work for every case/direction/piece

}

function isKingPathClear(nota1, nota2) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  // TODO this really needs helper functions, is really hard to understand
  return(((x2 = x1) && (y2 = y1 +1)) || ((x2 = x1 +1) && (y2 = y2+1)) ||
  ((x2 = x1 +1) && (y2 = y1)) || ((x2 = x1 +1) && (y2 = y1 -1)) || ((x2 = x1) && (y2 = y1 -1)) ||
  (x2 = x1 -1) && (y2 = y1 -1) || ((x2 = x1 -1) && (y2 = y1)) || ((x2 = x1 -1) && (y2 = y1 +1)))
}

function compare(a, b) { return a[0] === b[0] && a[1] === b[1]}

// TODO this is validating the move target, not just the "clearness of the path", making it confusing/nonsemantic
function isKnightPathClear(nota1, nota2) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  return (((x2 === x1 + 2) && ((y2 === y1+1) || (y2 === y1 -1))) ||
  ((x2 === x1 + 1) && ((y2 === y1 -2) || (y2 === y1 +2))) ||
  ((x2 === x1 - 1) && ((y2 === y1 - 2) || (y2 === y1 + 2))) ||
  ((x2 === x1 -2) && ((y2 === y1 -1) || (y2 === y1 + 1))))
}

// TODO refactor
function isPawnPathClear(nota1, nota2, endPos, color, board) {
  function enPassantPossible(endSquare) {
  var fromRank = board['LastMove'].from[1]
  var toRank = board['LastMove'].to[1]
  var emptySquare = (!(board[endSquare]))
  var lastPieceColor = board['LastMove'].color
  var whiteJustMovedTwo = ((lastPieceColor === 'WHITE') && (fromRank == 2) && (toRank == 4))
  var blackJustMovedTwo = ((lastPieceColor === 'BLACK') && (fromRank == 7) && (toRank == 5))
  console.log((emptySquare) && (whiteJustMovedTwo || blackJustMovedTwo) && (endPos[0] ===  board['LastMove'].to[0]), 'this 326')

  return (emptySquare) && (whiteJustMovedTwo || blackJustMovedTwo) && (endPos[0] ===  board['LastMove'].to[0])
}
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  var love = board
  var whiteCanMoveTwoAhead = (((x1 === x2) && (y1 < y2)) && ((y2 === y1+2) && (y1 === 2)) && (!(board[endPos])))
  var whiteCanMoveOneAhead = ((y2 === y1+1) && (x1 === x2) && (!(board[endPos])))
    console.log(whiteCanMoveOneAhead, 'here')
  console.log('whiteCanMoveTwoAhead', whiteCanMoveTwoAhead)
  console.log('enPassantPossible', enPassantPossible(endPos))
  var whiteCanCapture = (((x2 === x1+1) || (x2 === x1-1)) && ((y2 === y1+1) && (board[endPos])))
  console.log(board[endPos], endPos)
  console.log(x2, x1)
  console.log(((x2 === x1+1) || (x2 === x1-1)), 'moving left or right?')
    console.log('whiteCanCapture', whiteCanCapture)
  var whiteInCaptureRange = (((x2 === x1+1) || (x2 === x1-1)) && (y2 === y1+1))
  var blackCanMoveTwoAhead = ((((x1 === x2) && (y1 > y2)) && (y2 === y1-2) && y1 === 7) && (!(board[endPos])))
  console.log(blackCanMoveTwoAhead, 'blackCanMoveTwoAhead')
  var blackCanMoveOneAhead = ((y2 === y1-1) && (x1 === x2) && (!(board[endPos])))
  console.log(blackCanMoveOneAhead, 'blackCanMoveOneAhead')
  var blackCanCapture = (((x2 === x1+1) || (x2 === x1-1)) && (y2 === y1-1) && (board[endPos]))
  var blackInCaptureRange = (((x2 === x1+1) || (x2 === x1-1)) && (y2 === y1-1))
  if (color === 'WHITE') {
    return (whiteCanMoveTwoAhead || whiteCanMoveOneAhead || whiteCanCapture || ((enPassantPossible(endPos, board)) && whiteInCaptureRange))
  }
  if (color === 'BLACK') {
    return (blackCanMoveTwoAhead||blackCanMoveOneAhead||blackCanCapture|| ((enPassantPossible(endPos, board)) && blackInCaptureRange))
  }
}

function isDiagonalPathClear(nota1, nota2, board) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  var type = 'BISHOP'
  console.log(x1, x2, y1, y2)
  if ((x2 > x1) && (y2 > y1)) {
    var xDirection = 1;
    var yDirection = 1;
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type);
    console.log(path, 'path')
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      console.log(notatedPath)
      console.log(isPathClear(notatedPath, nota1, nota2, board))
      return isPathClear(notatedPath, nota1, nota2, board)
    }
    else {return false}
  }
  else if ((x2 > x1) && (y2 < y1)) {
    var xDirection = 1;
    var yDirection = -1;
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type);
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
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota1, nota2, board)
    }
    else {return false}
  }
  else if((x2 < x1) && (y2 < y1)) {
    console.log('check 145')
    var xDirection = -1;
    var yDirection = -1;
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection, type);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
}

function move(first, second){
  var pawnTest = {
    'A3': {'type': 'KING', 'color': 'BLACK'},
    'A5': {'type': 'KING', 'color': 'WHITE'},
    'B2': {'type': 'KING', 'color': 'BLACK'},
    'B6': {'type': 'KING', 'color': 'BLACK'},
    'C4': {'type': 'KING', 'color': 'WHITE'},
    'D2': {'type': 'KING', 'color': 'BLACK'},
    'D6': {'type': 'KING', 'color': 'BLACK'},
    'F3': {'type': 'KING', 'color': 'BLACK'},
    'F5': {'type': 'KING', 'color': 'BLACK'},
    'LastMove': {'type': 'PAWN', 'color': 'WHITE', 'from': 'A7', 'to': 'A5'}
  }
  function moveValidator(begInput, endInput, board) {
    //console.log(pawnTest.LastMove)
    var beginPos = begInput.toUpperCase();
    var endPos = endInput.toUpperCase();


    if (pawnTest[beginPos]) {
      var pieceIsBishop = (pawnTest[beginPos].type === "BISHOP")
      var pieceIsPawn = (pawnTest[beginPos].type === "PAWN")
      var pieceIsKnight = (pawnTest[beginPos].type === "KNIGHT")
      var pieceIsRook = (pawnTest[beginPos].type === "ROOK")
      var pieceIsKing = (pawnTest[beginPos].type === "KING")
      var whiteTurn = ((pawnTest[beginPos]) && ((pawnTest.LastMove.color === 'BLACK') || (pawnTest === undefined)))
      var blackTurn = (pawnTest[beginPos]) && (pawnTest.LastMove.color === 'WHITE')
      var notTakingWhite = ((pawnTest[endPos] === undefined) || (pawnTest[endPos].color === 'BLACK'))
      var notTakingBlack = ((pawnTest[endPos] === undefined) || (pawnTest[endPos].color === 'WHITE'))
      if ((whiteTurn && notTakingWhite) || (blackTurn && notTakingBlack)) {
        beginPosCoor = coordinates(beginPos)
        endPosCoor = coordinates(endPos)
        if (pieceIsBishop) {return isDiagonalPathClear(beginPosCoor, endPosCoor, pawnTest)}
        if(pieceIsPawn) {
          console.log('bitch', 'pawn')
          return isPawnPathClear(beginPosCoor, endPosCoor, endInput.toUpperCase(), pawnTest[beginPos].color, pawnTest)}
        if (pieceIsKnight) {
          console.log(isKnightPathClear(beginPosCoor, endPosCoor))

          return isKnightPathClear(beginPosCoor, endPosCoor)}
        if (pieceIsRook) {
          return isRookPathClear(beginPosCoor, endPosCoor, pawnTest)
        }
        if (pieceIsKing) {
          return isKingPathClear(beginPosCoor, endPosCoor)
        }
      }
    }
  }
  if (moveValidator(first, second, pawnTest)) {
    console.log(moveValidator(first, second, pawnTest), 'here')
    console.log(newBoard(pawnTest, first, second));
    return true
  }
}

function newBoard(oldBoard, first, second) {
  var board = {}
  var tempBoard = oldBoard
  tempBoard.LastMove = newLogHistory(first, second, tempBoard)
  tempBoard[second] = tempBoard[first]
  delete tempBoard[first]
  return tempBoard;
}


function newLogHistory(first, second, board) {
  var newLastMove = {}

  newLastMove.type = board[first].type
  newLastMove.color = board[first].color
  newLastMove.from = first
  newLastMove.to = second
  return newLastMove
}
function updateBoard() {

}
if(move('A3', 'A4')) {console.log('hell yes')}
else {console.log('hell no')}

/* List of questions

1) How does moveValidator know if BLACK/WHITE turn?
ANSWER: Reference history for last moveValidator.
2) How to tell if KING in check?
3) How to tell if ROOK or KING moved?
ANSWER: add a "moved" attribute
4) How to tell if PAWN vulnerable for EN PASSANT?
ANSWER: Reference history for last moveValidator.
5) How to trigger promotion?
6) How to get WHITE's moveValidator as default to start?
ANSWER: If no history.length is < 1
only WHITE can moveValidator

Only if moveValidator valid will there be history.push() &
change of board state.
*/
