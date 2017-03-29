var map = {
  'A1': {'type': 'ROOK', 'color': 'white'},
  'B1': {'type': 'KNIGHT', 'color':'white'},
  'C1': {'type': 'BISHOP', 'color':'white'},
  'D1': {'type': 'QUEEN', 'color': 'white'},
  'E1': {'type': 'KING', 'color': 'white'},
  'F1': {'type': 'BISHOP', 'color': 'white'},
  'G1': {'type': 'KNIGHT', 'color': 'white'},
  'H1': {'type': 'ROOK', 'color': 'white'},
  'A2': {'type': 'PAWN', 'color': 'white'},
  'B2': {'type': 'PAWN', 'color': 'white'},
  'C2': {'type': 'PAWN', 'color': 'white'},
  'D2': {'type': 'PAWN', 'color': 'white'},
  'E2': {'type': 'PAWN', 'color': 'white'},
  'F2': {'type': 'PAWN', 'color': 'white'},
  'G2': {'type': 'PAWN', 'color': 'white'},
  'H2': {'type': 'PAWN', 'color': 'white'}
  'A8': {'type': 'ROOK', 'color': 'white'},
  'B8': {'type': 'KNIGHT', 'color':'white'},
  'C8': {'type': 'BISHOP', 'color':'white'},
  'D8': {'type': 'QUEEN', 'color': 'white'},
  'E8': {'type': 'KING', 'color': 'white'},
  'F8': {'type': 'BISHOP', 'color': 'white'},
  'G8': {'type': 'KNIGHT', 'color': 'white'},
  'H8': {'type': 'ROOK', 'color': 'white'},
  'A7': {'type': 'PAWN', 'color': 'white'},
  'B7': {'type': 'PAWN', 'color': 'white'},
  'C7': {'type': 'PAWN', 'color': 'white'},
  'D7': {'type': 'PAWN', 'color': 'white'},
  'E7': {'type': 'PAWN', 'color': 'white'},
  'F7': {'type': 'PAWN', 'color': 'white'},
  'G7': {'type': 'PAWN', 'color': 'white'},
  'H7': {'type': 'PAWN', 'color': 'white'}
};

//how do i return 'invalid entry' when the Key is not present in the
//hash map>
//each piece needs it's own validator
//let's say i want to write a validator for a bishop
//if it's a bishop it can move if there is no piece blocking it
//diagonally

//first lets check if the destination is within range

//how is the validator supposed to know what the range of a bishop?

//range validator

//bishop

//can't move onto it's own rank or file
//can only move diagonal
//how is the board supposed to know what a diagonal move is?
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
//if move valid
//if there is a piece between the two points
//convert each number up to end into a string
//check if any string is a key in the map
//it's invalid if their own piece is in path/end, or if opponent's piece is
//on path
//if valid the key is rewritten



//the young are only attractive if they show pretention in presentation

//an idea is to give both men and women in the exact same way

//will commit my ideas to paper tonight for my nightly ritual and give
//myself 3 reasons to wake up tomorrow morning

//another thing to do is to listen to men the same way you listen to women

//recognizing feminine gestures and intonations and de-eroticizing them

//give myself a reason why this is important

//look at men and women as worhol does

//k q r b p

//assume user input is passed to this function
//just have it only take squares as input
//i have the square converted
//how do I check if something is in an object
//map.hasOwnProperty(note)
//a=1 b=2 c=3 d=4 e=5 f=6 g=7 h=8
//so converter needs to convert the string into a number
//if letter === 'a' 'b' 'c' etc.
//then return num

var intoNum = function(letter) {
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

function converter(notation) {
  return notation.toUpperCase();
}
var coordinates = function(position) {
  var pair = [];
  pair.push(position.slice(0,1));
  pair.push(position.slice(1,2));
  pair[1] = parseInt(pair[1])
  pair[0] = intoNum(pair[0])
  return pair
}

function pathVal(nota1, nota2, x, y) {
  var path = [];
  var step = [nota1[0], nota1[1]]
  while ((step[0] >= 1) && (step[1] >= 1) && (step[0] <= 8) && (step[1] <= 8)) {
    step = [step[0]+x, step[1]+y]
    path.push(step)
  }
  filtered = path.filter(function(e) {return (compare(e, nota2))})
  if (filtered.length > 0) {
    return true
  }
  else { return false }
}

function compare(a, b) { return a[0] === b[0] && a[1] === b[1]}

function incrementToEight(nota1, nota2) {
  var initFirst = nota1[0]; var initSecond = nota1[1];
  var telosFirst = nota2[0]; var telosSecond = nota2[1];
  if ((telosFirst > initFirst) && (telosSecond > initSecond)) {
    var xDirection = 1;
    var yDirection = 1;
    return pathVal(nota1, nota2, xDirection, yDirection);
  }
  else if ((telosFirst > initFirst) && (telosSecond < initSecond)) {
    var xDirection = 1;
    var yDirection = -1;
    return pathVal(nota1, nota2, xDirection, yDirection);
  }
  else if((telosFirst < initFirst) && (telosSecond > initSecond)) {
    var xDirection = -1;
    var yDirection = 1;
    return pathVal(nota1, nota2, xDirection, yDirection);
  }
  else if((telosFirst < initFirst) && (telosSecond < initSecond)) {
    var xDirection = -1;
    var yDirection = -1;
    return pathVal(nota1, nota2, xDirection, yDirection);
  }
}
//here i have a function that returns a boolean
//the function only checks one out of four relative quadrants
//how do i expand the functionality to check the other quadrants so that
//i'm not repeating myself
//take the largest of the Inits
//make value a counter
//inrement it every loop
//each path function returns boolean
//the queen is going to share in rook path and bishop path
//so i should just call it diagonal path
//each path function takes two arguments
// call rook path straight path
// 4 conditionals
// if 1st number equal, 2nd larger (2nd up to 8)
// if 1st number equal, 2nd smaller (2nd down to 1)
// if 1st larger, 2nd equal (1st up to 8)
// if 1st smaller, 2nd equal (1st down to 1)

//actually...instead of down to /up to 1/8 can i do instead
// the value of notation
//this wouldn't work in the case of the bishop
//i have to go the full path
//how will it know to stop when an array pair matches note2?
//while? or for?

//what did i spend the most time on?


// for each path make and ordered array containing each pair on the path





//i've got of numbers now
//now I need to get a list of number pairs that are on the path
//first let's write this in the case of the bishop

//how to check every path for bishop
//take note2's number pair
//make an array
//push araays containing [x+1,x+1] x = note1numbers
// if either number in the pair is equal to 8 stop
// or if the
//keep adding +1 until one of the numbers in the pair is equal to 8
//
//
//would i have the loop stop when an pair is equal to note 2 number pair?
//or would i have to loop stop when one number in the pair equal to 8?
//what would happen in each case?
//if i reach a pair equal to my 2nd note/
//i don't need to count past 2nd note pair
//i must have each pair in order
//after it gets out of loop
//loop over the array and convert each number pair in the array
//into board square format

//loop through this new array and check and see if
//there is a key in the data structure
//if there is 'invalid move'
//otherwise
//move to
//didn't consider the path downward
// another conditional statement
// in both places, what should the conditional be
// it depends where end position is in relation to current postion
// 4 conditionals, 4 paths
// if the 1st and 2nd numbers are larger (up to 8 both numbers)
//if the 1rst is larger, 2nd smaller (up to 8 first number, down to 1 2nd num)
//if the 1st smaller, 2nd larger (down to 1, up to 8)
//if both are smaller (both down to 8)

//
//structure of great mass in c
//-kyrie
//-gloria
    //gloria in excelsis deo
    //laudamus te
    //gratias agimus tibi
    //domine deus
    //qui tollis
    //quaniam tu solus
    //jesu christe
//-credo
    //credo unum deum
    //et incarnatus est
//-sanctus
    //benedictus que venit

//lat:domine deus tr: lord god
//full lat:domine deus, rex coelestis, deus pater omnipotens
//full tr: lord god, king of heaven, god father almighty

//latin:et incarnatus est tr:and was made flesh
//full:et incarnatus est de spiritu sancto
//full tr: and was made flesh by the holy ghost
//misere - have mercy, lord
//
//
//
//make the first letter into a number
//so now I got an array the k & boardsquare
//i need to change if
//var note1 = converter(notation1)
//what do I do once I check if it's there
//gotta get the piece and then see if notation2 is in path
//must make a function that converts the note into a number pair array
//
function validator(board, notation1, notation2) {
  var note1 = notation1.toUpperCase()
  if (map.hasOwnProperty(note1)) (

  )
}
