export default class Ship {
    constructor(length = 0, hits = 0, sunk = false) {
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    };

    hit() {
        this.hits += 1;
    };

    isSunk() {
        this.sunk = this.length <= this.hits;
        return this.sunk;
    };

};