"use strict";

import * as utilities from './lib/utilities.js'
import * as update from './lib/update.js'
import * as validate from './lib/validate.js'
console.log('something sweird is going on');

function move(first, second) {
    var pawnTest = {
        'A3': {
            'type': 'QUEEN',
            'color': 'WHITE'
        },
        'A5': {
            'type': 'QUEEN',
            'color': 'WHITE'
        },
        'B2': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'B6': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'C4': {
            'type': 'QUEEN',
            'color': 'WHITE'
        },
        'D2': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'D6': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'F3': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'F5': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'F6': {
            'type': 'QUEEN',
            'color': 'BLACK'
        },
        'LastMove': {
            'type': 'PAWN',
            'color': 'WHITE',
            'from': 'A7',
            'to': 'A5'
        }
    }
//declared moveIsValid here..
    if (validate.moveIsValid(first, second, pawnTest)) {
        return true;
    }
}

//testing move here;

if (move('C4', 'E3')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('C4', 'B7')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('C4', 'E7')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('C4', 'F1')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('B2', 'D2')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('B2', 'F6')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('D6', 'D7')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('D6', 'E7')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('D6', 'C7')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('D6', 'C6')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('D6', 'D5')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
if (move('D6', 'E5')) {
    console.log('hell yes')
} else {
    console.log('hell no')
};
