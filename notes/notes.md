
//how do i return 'invalid entry' when the Key is not present in the
//hash map>
//each piece needs it's own validator
//let's say i want to write a validator for a bishop
//if it's a bishop it can moveValidator if there is no piece blocking it
//diagonally

//first lets check if the destination is within range

//how is the validator supposed to know what the range of a bishop?

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










// TODO this is validating the move target, not just the "clearness of the path", making it confusing/nonsemantic


// TODO refactor
