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
