import { arrayNotation, pathNotation, compare, coordinates, isEndPositionInPath } from './utilities'

function isQueenPathClear(nota1, nota2, board) {
  return isRookPathClear(nota1, nota2, board) || isDiagonalPathClear(nota1, nota2, board)
}
function endinPosition(array, endPosition) {
  var inArray = false
  for(var i = 0; i < array.length; i++) {
    var elem = array[i];
    if ((elem[0] === endPosition[0]) && (elem[1] === endPosition[1])) {
      inArray = true
    }
    else { return false }
  }
  return inArray;
}
export function isPathClear(array, nota1, nota2, board) {
    var path = array;
    var pathClear = false;
    var beginPos = arrayNotation(nota1);
    var endPos = arrayNotation(nota2);
    var numberOfPiecesOnPath = path.filter(function(e) {
        return board[e]
    }).length;
    var destination = path.length;
    //console.log(path.filter(function(e) {return map[e]}), '37')

    if (numberOfPiecesOnPath > 0) {
        return false;
      }
    else {
      return true;
    }
    // } else {
    //   console.log('pathclear returned 2nd here');
    //     return true;
    // }
    for (var square = 0; square < path.length - 1; square++) {
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

export function isRookPathClear(nota1, nota2, board) {
    var x1 = nota1[0];
    var y1 = nota1[1];
    var x2 = nota2[0];
    var y2 = nota2[1];
    if ((x1 === x2) && (y1 < y2)) {
        var type = "QUEENROOK1";
        var xDirection = 0;
        var yDirection = 1;
        path = getLinearPath(nota1, nota2, xDirection, yDirection, type);
        if (path.length > 0) {
            notatedPath = pathNotation(path)
            return isPathClear(notatedPath, nota1, nota2, board)
        } else {
            return false;
        };
    } else if ((x1 === x2) && (y1 > y2)) {
        var type = "QUEENROOK2";
        var xDirection = 0;
        var yDirection = -1;
        var path = getLinearPath(nota1, nota2, xDirection, yDirection, type);
        if (path.length > 0) {
            var notatedPath = pathNotation(path);
            return isPathClear(notatedPath, nota1, nota2, board);
        } else {
            return false;
        };
    } else if ((x1 > x2) && (y1 === y2)) {
        var type = "QUEENROOK3";
        var xDirection = -1;
        var yDirection = 0;
        path = getLinearPath(nota1, nota2, xDirection, yDirection, type)
        if (path.length > 0) {
            var notatedPath = pathNotation(path);
            return isPathClear(notatedPath, nota1, nota2, board);
        } else {
            return false;
        };
    } else if ((x1 < x2) && (y1 === y2)) {
        var type = "QUEENROOK4";
        var xDirection = 1;
        var yDirection = 0;
        path = getLinearPath(nota1, nota2, xDirection, yDirection, type)
        if (path.length > 0) {
            var notatedPath = pathNotation(path);
            return isPathClear(notatedPath, nota2, board);
        } else {
            return false;
        }
    }
}

export function getLinearPath(nota1, nota2, x, y, type) {
    var path = [];
    var step = [nota1[0], nota1[1]];
    console.log(step, 'all')
    if (type === 'QUEENBISHOP') {
      console.log('hit QUEENBISHOP at least')
        // TODO refactor condition in to helpers like isInBounds(coordinates) and coordinatesEqual(coordinatesOne, coordinatesTwo)
        while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0]) && (step[1] !== nota2[1])) {
            step = [step[0] + x, step[1] + y];
            console.log(step, 'stepqueenbishop')
            // TODO test and see if a full isInBounds check is needed here (bishop moving down)
            if ((step[0] < 9) && (step[1] < 9)) {
                path.push(step);
            }
        }
        var filtered = path.filter(function(e) {
            return (compare(e, nota2))
        })
        if (path.length > 0 && endinPosition(path, nota2)) {
          console.log(path)
            return path;
        } else {
          console.log("false")
            return false;
        }
    }
    if (type === 'QUEENROOK1') {
      console.log('hitqueenrook1 at least')
        while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[1] !== nota2[1])) {
            step = [step[0] + x, step[1] + y];
            console.log(step)
            if ((step[0] < 9) && (step[1] < 9)) {
                path.push(step);
            }
        }
        var filtered = path.filter(function(e) {
            return (compare(e, nota2))
        })
        console.log(path, 'path of queenrook1')
        if (path.length > 0 && endinPosition(path, nota2)) {
            return path;
        } else {
            return false;
        }
    }
    if (type === 'QUEENROOK2') {
      console.log('hit queenrook2 at least')
        while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[1] !== nota2[1])) {
            step = [step[0] + x, step[1] + y];
            console.log('between', step, 'stepqueeenrook2')
            if ((step[0] < 9) && (step[1] < 9)) {
                path.push(step);
            }
        }
        var filtered = path.filter(function(e) {
            return (compare(e, nota2));
        })
        if (path.length > 0 && endinPosition(path, nota2)) {
            return path;
        } else {
            return false;
        }
    }
    if (type === 'QUEENROOK3') {
      console.log('hit queenrook3 at least')
        while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0])) {
            step = [step[0] + x, step[1] + y];
            console.log(step, 'stepqueenrook3');
            if ((step[0] < 9) && (step[1] < 9)) {
                path.push(step);
            }
        }
        var filtered = path.filter(function(e) {
            return (compare(e, nota2));
        })
        if (path.length > 0 && endinPosition(path, nota2)) {
            return path;
        } else {
            return false;
        }
    }
    if (type === 'QUEENROOK4') { // TODO don't extend type / direction, make direction logic distinct
        console.log('hit queenrook4 at least')
        while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0])) {
            step = [step[0] + x, step[1] + y];
            console.log(step);
            if ((step[0] < 9) && (step[1] < 9)) {
                path.push(step, 'stepqueenrook4');
            }
        }
        var filtered = path.filter(function(e) {
            return (compare(e, nota2))
        })
        if (path.length > 0 && endinPosition(path, nota2)) {
            return path;
        } else {
            return false
        }
    }
    //step[0/1] !== nota2[0/1] does not work for every case/direction/piece

}

export function isKingPathClear(nota1, nota2) {
    var x1 = nota1[0];
    var y1 = nota1[1];
    var x2 = nota2[0];
    var y2 = nota2[1];
    // TODO this really needs helper functions, is really hard to understand
    return (((x2 = x1) && (y2 = y1 + 1)) || ((x2 = x1 + 1) && (y2 = y2 + 1)) ||
        ((x2 = x1 + 1) && (y2 = y1)) || ((x2 = x1 + 1) && (y2 = y1 - 1)) || ((x2 = x1) && (y2 = y1 - 1)) ||
        (x2 = x1 - 1) && (y2 = y1 - 1) || ((x2 = x1 - 1) && (y2 = y1)) || ((x2 = x1 - 1) && (y2 = y1 + 1)))
}

export function isKnightPathClear(nota1, nota2) {
    var x1 = nota1[0];
    var y1 = nota1[1];
    var x2 = nota2[0];
    var y2 = nota2[1];
    return (((x2 === x1 + 2) && ((y2 === y1 + 1) || (y2 === y1 - 1))) ||
        ((x2 === x1 + 1) && ((y2 === y1 - 2) || (y2 === y1 + 2))) ||
        ((x2 === x1 - 1) && ((y2 === y1 - 2) || (y2 === y1 + 2))) ||
        ((x2 === x1 - 2) && ((y2 === y1 - 1) || (y2 === y1 + 1))))
}




export function moveIsValid(begInput, endInput, board) {
    //console.log(board.LastMove)
    var beginPos = begInput.toUpperCase();
    var endPos = endInput.toUpperCase();


    if (board[beginPos]) {
        var pieceIsBishop = (board[beginPos].type === "BISHOP");
        var pieceIsPawn = (board[beginPos].type === "PAWN");
        var pieceIsKnight = (board[beginPos].type === "KNIGHT");
        var pieceIsRook = (board[beginPos].type === "ROOK");
        var pieceIsKing = (board[beginPos].type === "KING");
        var pieceIsQueen = (board[beginPos].type === "QUEEN");
        var whiteTurn = ((board[beginPos]) && ((board.LastMove.color === 'BLACK') || (board === undefined)));
        var blackTurn = (board[beginPos]) && (board.LastMove.color === 'WHITE');
        var notTakingWhite = ((board[endPos] === undefined) || (board[endPos].color === 'BLACK'));
        var notTakingBlack = ((board[endPos] === undefined) || (board[endPos].color === 'WHITE'));
        if ((whiteTurn && notTakingWhite) || (blackTurn && notTakingBlack)) {
            var beginPosCoor = coordinates(beginPos);
            var endPosCoor = coordinates(endPos);
            if (pieceIsBishop) {
                return isDiagonalPathClear(beginPosCoor, endPosCoor, board)
            }
            if (pieceIsPawn) {
                return isPawnPathClear(beginPosCoor, endPosCoor, endInput.toUpperCase(), board[beginPos].color, board)
            }
            if (pieceIsKnight) {

                return isKnightPathClear(beginPosCoor, endPosCoor)
            }
            if (pieceIsRook) {
                return isRookPathClear(beginPosCoor, endPosCoor, board);
            }
            if (pieceIsKing) {
                return isKingPathClear(beginPosCoor, endPosCoor);
            }
            if (pieceIsQueen) {
              return isQueenPathClear(beginPosCoor, endPosCoor, board)
            }
        }
    }
};

export function isDiagonalPathClear(nota1, nota2, board) {
    var x1 = nota1[0];
    var y1 = nota1[1];
    var x2 = nota2[0];
    var y2 = nota2[1];
    var type = 'QUEENBISHOP'
    if ((x2 > x1) && (y2 > y1)) {
        var xDirection = 1;
        var yDirection = 1;
        var path = getLinearPath(nota1, nota2, xDirection, yDirection, type);
        if (path.length > 0) {
            var notatedPath = pathNotation(path);
            return isPathClear(notatedPath, nota1, nota2, board);
        } else {
            return false
        }
    } else if ((x2 > x1) && (y2 < y1)) {
        var xDirection = 1;
        var yDirection = -1;
        var path = getLinearPath(nota1, nota2, xDirection, yDirection, type);
        if (path.length > 0) {
            var notatedPath = pathNotation(path);
            return isPathClear(notatedPath, nota1, nota2, board);
        } else {
            return false
        }
        //i don't need the rest of the arrays once end coordinates are in path
    } else if ((x2 < x1) && (y2 > y1)) {
        var xDirection = -1;
        var yDirection = 1;
        var path = getLinearPath(nota1, nota2, xDirection, yDirection, type);
        if (path.length > 0) {
            var notatedPath = pathNotation(path)
            return isPathClear(notatedPath, nota1, nota2, board)
        } else {
            return false
        }
    } else if ((x2 < x1) && (y2 < y1)) {
        var xDirection = -1;
        var yDirection = -1;
        var path = getLinearPath(nota1, nota2, xDirection, yDirection, type);
        if (path.length > 0) {
            var notatedPath = pathNotation(path);
            return isPathClear(notatedPath, nota2, board);
        } else {
            return false
        }
    }
}

export function isPawnPathClear(nota1, nota2, endPos, color, board) {
    function enPassantPossible(endSquare) {
        var fromRank = board['LastMove'].from[1];
        var toRank = board['LastMove'].to[1];
        var emptySquare = (!(board[endSquare]));
        var lastPieceColor = board['LastMove'].color;
        var whiteJustMovedTwo = ((lastPieceColor === 'WHITE') && (fromRank == 2) && (toRank == 4));
        var blackJustMovedTwo = ((lastPieceColor === 'BLACK') && (fromRank == 7) && (toRank == 5));

        return (emptySquare) && (whiteJustMovedTwo || blackJustMovedTwo) && (endPos[0] === board['LastMove'].to[0]);
    }
    var x1 = nota1[0];
    var y1 = nota1[1];
    var x2 = nota2[0];
    var y2 = nota2[1];
    var whiteCanMoveTwoAhead = (((x1 === x2) && (y1 < y2)) && ((y2 === y1 + 2) && (y1 === 2)) && (!(board[endPos])));
    var whiteCanMoveOneAhead = ((y2 === y1 + 1) && (x1 === x2) && (!(board[endPos])));
    var whiteCanCapture = (((x2 === x1 + 1) || (x2 === x1 - 1)) && ((y2 === y1 + 1) && (board[endPos])));
    var whiteInCaptureRange = (((x2 === x1 + 1) || (x2 === x1 - 1)) && (y2 === y1 + 1));
    var blackCanMoveTwoAhead = ((((x1 === x2) && (y1 > y2)) && (y2 === y1 - 2) && y1 === 7) && (!(board[endPos])));
    var blackCanMoveOneAhead = ((y2 === y1 - 1) && (x1 === x2) && (!(board[endPos])));
    var blackCanCapture = (((x2 === x1 + 1) || (x2 === x1 - 1)) && (y2 === y1 - 1) && (board[endPos]));
    var blackInCaptureRange = (((x2 === x1 + 1) || (x2 === x1 - 1)) && (y2 === y1 - 1));
    if (color === 'WHITE') {
        return (whiteCanMoveTwoAhead || whiteCanMoveOneAhead || whiteCanCapture || ((enPassantPossible(endPos, board)) && whiteInCaptureRange));
    }
    if (color === 'BLACK') {
        return (blackCanMoveTwoAhead || blackCanMoveOneAhead || blackCanCapture || ((enPassantPossible(endPos, board)) && blackInCaptureRange));
    }
}
