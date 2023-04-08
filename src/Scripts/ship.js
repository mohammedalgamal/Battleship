export default class Ship {
    constructor(length = 0, hits = 0, isSunk = false) {
        this.length = length;
        this.hits = hits;
        this.isSunk = isSunk;
    };

    hit() {
        this.hits += 1;
    };
};