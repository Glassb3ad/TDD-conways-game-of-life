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

    test("Get leftmost cell", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell2 = new Cell(-1, 0)
        pattern.add(cell)
        pattern.add(cell2)
        const leftMost = pattern.leftMostCell()
        expect(leftMost.x).toBe(-1)
    })

    test("Leftmost cell of empty pattern is null", () => {
        const pattern = new Pattern()
        const leftMost = pattern.leftMostCell()
        expect(leftMost).toBe(null)
    })

    test("Get rightmost cell", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell2 = new Cell(1, 0)
        pattern.add(cell)
        pattern.add(cell2)
        const rightMost = pattern.rightMostCell()
        expect(rightMost.x).toBe(1)
    })

    test("Rightmost cell of empty pattern is null", () => {
        const pattern = new Pattern()
        const rightMost = pattern.rightMostCell()
        expect(rightMost).toBe(null)
    })

    test("Get upmost cell", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell2 = new Cell(0, 1)
        pattern.add(cell)
        pattern.add(cell2)
        const upMost = pattern.upMostCell()
        expect(upMost.y).toBe(1)
    })

    test("upmost cell of empty pattern is null", () => {
        const pattern = new Pattern()
        const upMost = pattern.upMostCell()
        expect(upMost).toBe(null)
    })

    test("Get downmost cell", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell2 = new Cell(0, 1)
        pattern.add(cell)
        pattern.add(cell2)
        const downMost = pattern.downMostCell()
        expect(downMost.y).toBe(0)
    })

    test("downmost cell of empty pattern is null", () => {
        const pattern = new Pattern()
        const downMost = pattern.downMostCell()
        expect(downMost).toBe(null)
    })

    test("get width of pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        const width = pattern.width()
        expect(width).toBe(1)
    })

    test("get height of pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        const width = pattern.height()
        expect(width).toBe(3)
    })

    test("get up-left cell", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        const upLeft = pattern.upLeftCell()
        expect(upLeft.x).toBe(0)
        expect(upLeft.y).toBe(2)
    })
});
