/* eslint-disable no-undef */
import Ship from "../Scripts/ship";

test("Ship class Returns an object with the correct values", () => {
    const mockShip = new Ship(4);
    expect(mockShip).toEqual({ length: 4, hits: 0, isSunk: false });
});