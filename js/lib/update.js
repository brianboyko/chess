export function newBoard(oldBoard, first, second) {
    var board = {};
    var tempBoard = oldBoard;
    tempBoard.LastMove = newLogHistory(first, second, tempBoard);
    tempBoard[second] = Object.assign({ moved: true }, tempBoard[first]);
    delete tempBoard[first];
    return tempBoard;
};


export function newLogHistory(first, second, board) {
    var newLastMove = {};

    newLastMove.type = board[first].type;
    newLastMove.color = board[first].color;
    newLastMove.from = first;
    newLastMove.to = second
    return newLastMove
};
