// if cases
// x dir y dir
// get rookpath(nota1, nota2, xdir, ydir)
//
// can recycle isPathClear to check if pathNotation array's elements are in board
//
// up
// x1 = x2
// y1 < y2
//
//
// down
// x1 = x2
// y1 > y2
//
// left
// x1 > x2
// y1 = y2
//
// right
// x1 < x2
// y1 = y2
//
// add moved property

function isRookPathClear(nota1, nota2, board) {
  var x1 = nota1[0]; var y1 = nota1[1];
  var x2 = nota2[0]; var y2 = nota2[1];
  if ((x1 = x2) && (y1 < y2)) {
    var xDirection = 0
    var yDirection = 1
    path = getPath(nota1, nota2, xDirection, yDirection)
    if (path.length > 0) {
      notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if ((x1 = x2) && (y1 > y2)) {
    var xDirection = 0
    var yDirection = -
    path = getPath(nota1, nota2, xDirection, yDirection)
    if (path.length > 0) {
      notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if ((x1 > x2) && (y1 = y2)) {
    var xDirection = -1
    var yDirection = 0
    path = getPath(nota1, nota2, xDirection, yDirection)
    if (path.length > 0) {
      notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
  else if ((x1 < x2) && (y1 = y2)) {
    var xDirection = 1
    var yDirection = 0
    path = getPath(nota1, nota2, xDirection, yDirection)
    if (path.length > 0) {
      notatedPath = pathNotation(path)
      return isPathClear(notatedPath, nota2, board)
    }
    else {return false}
  }
}

function getPath(nota1, nota2, x, y) {
  path = [];
  step = [nota1[0], nota2[1]];
  while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8) && (step[0] !== nota2[0] - x) && (step[1] !== nota2[1] - y)) {
    step = [step[0]+x, step[1]+y]
    console.log(step)
    if ((step[0] < 9) && (step[1] < 9)) {
      path.push(step)
    }
  }
}

///how to get path for rook
///
///not like get path
///
///what does it mean to get the path for the rook
///i'm adding x & y dir to nota 1 up until nota2
/// while (x >= 1) (y >= 1 )

function isKingPathClear() {}

//
