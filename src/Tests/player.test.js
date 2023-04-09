/* eslint-disable no-undef */
import Player from "../Scripts/player";
import GameBoard from "../Scripts/gameBoard";

test("Making a player returns the correct object", () => {
    const mockPlayer = new Player();
    const mockBoard = new GameBoard;

    expect(mockPlayer.isMyTurn).toBe(false);
    expect(mockPlayer.board).toEqual(mockBoard);
    expect(mockPlayer.oppBoard).toEqual({});
});