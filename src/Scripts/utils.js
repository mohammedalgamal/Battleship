export default function makeBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            row.push(0);
        };
        board.push(row);
    };

    return board;
};

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};
  
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function isValidShipPlacement(length, startPosition, direction, board) {
    const move = direction === "horizontal" ? [0, 1] : [1, 0];
    let positionPointer = startPosition;

    for (let i = 0; i < length; i++) {
        if (positionPointer[0] > 9 || positionPointer[1] > 9) return false;
        if (board[positionPointer[0]][positionPointer[1]] !== 0) return false;
        positionPointer = [positionPointer[0] + move[0], positionPointer[1] + move[1]];
    };

    return true;
};

export function areEqualArrays(arr1, arr2) {
    return Array.isArray(arr1) &&
           Array.isArray(arr2) &&
           arr1.length === arr2.length &&
           arr1.every((val, index) => val === arr2[index]);
};

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        const temp = array[i];
        // eslint-disable-next-line no-param-reassign
        array[i] = array[j];
        // eslint-disable-next-line no-param-reassign
        array[j] = temp;
    };
};

export function getAllPositions() {
    const result = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            result.push([i, j]);
        };
    };
    return result;
};

export function countOnes(board) {
    let counter = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] === 1) {
                counter++;
            };
        };
    };

    return counter;
};

export function countOnesAndThrees(board) {
    let counter = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] === 1 || board[i][j] === 3) {
                counter++;
            };
        };
    };

    return counter;
};

export function getUsedPositions(length, startPosition, direction) {
    const columns = direction === "horizontal" ? length + 2 : 3;
    const rows = direction === "horizontal" ? 3 : length + 2;
    const result = [];
    
    for (let i = startPosition[0] - 1; i < startPosition[0] - 1 + rows; i++) {
        for (let j = startPosition[1] - 1; j < startPosition[1] - 1 + columns; j++) {
            result.push([i, j]);
        };
    };
    
    return result;
};

export function checkArrayInArray(bigArray, targetArray) {
    for (let i = 0; i < bigArray.length; i++) {
        if (areEqualArrays(bigArray[i], targetArray)) return true;
    };

    return false;
};

function getShipCells(length, startPosition, direction) {
    const move = direction === "horizontal" ? [0, 1] : [1, 0];
    const result = [];
    let positionPointer = startPosition;

    for (let i = 0; i < length; i++) {
        result.push(positionPointer);
        positionPointer = [positionPointer[0] + move[0], positionPointer[1] + move[1]];
    };

    return result;
};

export function isCollide(length, startPosition, direction, usedPositions) {
    const positions = getShipCells(length, startPosition, direction);

    for (let i = 0; i < positions.length; i++) {
        if (checkArrayInArray(usedPositions, positions[i])) return true;
    };

    return false;
};