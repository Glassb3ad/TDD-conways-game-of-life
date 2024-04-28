import { describe, test } from "vitest";
import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";
import { Cell } from "../src/cell.mjs";


describe("Test Pattern", () => {
    test("Create pattern without any living cells", () => {
        const pattern = new Pattern()
        expect(pattern.amountOfLivingCells()).toBe(0)
    });

    test("Add a new living cell", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell)
        expect(pattern.amountOfLivingCells()).toBe(1)
    });

    test("Check that living cell is alive", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell)
        expect(pattern.isAlive(cell)).toBe(true)
    })

    test("Check that death cell is not alive", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        expect(pattern.isAlive(cell)).toBe(false)
    })

    test("Check that left neighbour is alive", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell2 = new Cell(-1, 0)
        pattern.add(cell2)
        const leftNeighbour = cell.leftNeighbour()
        expect(pattern.isAlive(leftNeighbour)).toBe(true)
    })
});
