/* eslint-disable no-undef */
import Ship from "../Scripts/ship";

test("Ship class Returns an object with the correct values", () => {
    const mockShip = new Ship(4);
    expect(mockShip).toEqual({ length: 4, hits: 0, isSunk: false });
});

test("hit method in Ship class increases hits", () => {
    const mockShip = new Ship(5);
    mockShip.hit();
    expect(mockShip.hits).toBe(1);
    mockShip.hit();
    expect(mockShip.hits).toBe(2);
});