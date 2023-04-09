import { areEqualArrays } from "./utils";

export default class Ship {
    constructor(length = 0, hits = 0, coordinates = []) {
        this.length = length;
        this.hits = hits;
        this.sunk = false;
        this.coordinates = coordinates;
    };

    hit() {
        this.hits += 1;
        this.isSunk();
    };

    isSunk() {
        this.sunk = this.length <= this.hits;
        return this.sunk;
    };

    isPlaceInCoordinates(place) {
        for (let i = 0; i < this.coordinates.length; i++) {
            if (areEqualArrays(place, this.coordinates[i])) return true;
        };

        return false;
    };

    addPlaceToCoordinates(place) {
        this.coordinates.push(place);
    };
};