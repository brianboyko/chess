function isDiagonalPathClear(nota1, nota2) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  if ((x2 > x1) && (y2 > y1)) {
    var xDirection = 1;
    var yDirection = 1;
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if ((x2 > x1) && (y2 < y1)) {
    var xDirection = 1;
    var yDirection = -1;
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection);
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
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection);
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
    var path = getDiagonalPath(nota1, nota2, xDirection, yDirection);
    if (path.length > 0) {
      var notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
}

function getDiagonalPath(nota1, nota2, x, y) {
  console.log('getDiagonalPath lines 89-107 adds steps to the path')
  var path = [];
  var step = [nota1[0], nota1[1]]
  while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0] - x) && (step[1] !== nota2[1] - y)) {
    step = [step[0]+x, step[1]+y]
    console.log(step)
    if ((step[0] < 9) && (step[1] < 9)) {
      path.push(step)
    }
  }
