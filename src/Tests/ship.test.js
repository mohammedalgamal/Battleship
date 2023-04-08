/* eslint-disable no-undef */
import Ship from "../Scripts/ship";


// Ship class test cases
test("Ship class Returns an object with the correct values", () => {
    const mockShip = new Ship(4);
    expect(mockShip).toEqual({ length: 4, hits: 0, sunk: false });
});

test("Hit method in Ship class increases hits", () => {
    const mockShip = new Ship(5);
    mockShip.hit();
    expect(mockShip.hits).toBe(1);
    mockShip.hit();
    expect(mockShip.hits).toBe(2);
});

test("isSunk method in Ship class works correctly", () => {
    const mockShip = new Ship(2);
    expect(mockShip.isSunk()).toBe(false);
    mockShip.hit();
    mockShip.hit();
    expect(mockShip.isSunk()).toBe(true);
}); 
