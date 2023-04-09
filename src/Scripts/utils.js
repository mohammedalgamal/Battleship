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
