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

var boardBuilder = function(){
  var rows = ['1', '2', '7', '8'];
  var cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  var startingSquares = makeStartingSquares(rows, cols);
  console.log(startingSquares)
}

export default function buildBoard () {
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
