export function intoNum(letter) {
    var reference = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    };
    return reference[letter];
}

export var notation = function(number) {
    var numMap = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H'
    };
    return numMap[number];
};

export function arrayNotation(array) {
    var letter = notation(array[0]);
    var number = array[1].toString();
    return letter + number;
}

export function pathNotation(array) {
    return array.map(function(e) {
        return arrayNotation(e)
    })
}

export function outOfBounds(a, b) {
    return ((a < 9) && (b < 9));
}

export function converter(notation) {
    return notation.toUpperCase();
}

// position should be notation for consistency
// you thought position was an array, but it's a string
export function coordinates(position) {
    var pair = [];
    pair.push(position.slice(0, 1));
    pair.push(position.slice(1, 2));
    pair[1] = parseInt(pair[1]);
    pair[0] = intoNum(pair[0]);
    return pair;
}

export function compare(a, b) {
    return a[0] === b[0] && a[1] === b[1]
}

export function isEndPositionInPath(array, target) {
  if (array.indexOf(target) > -1) {
    return true
  }
  else {return false}
}
