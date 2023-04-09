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

export function isValidShipPlacement(length, startPosition, direction) {
    const places = direction === "horizontal" ? [0, length] : [length, 0];
    const endPosition = [startPosition[0] + places[0], startPosition[1] + places[1]];
    
    return endPosition[0] <= 9 && endPosition[1] <= 9;
};
