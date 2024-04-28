import { describe, test } from "vitest";
import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";
import { Cell } from "../src/cell.mjs";
import { stayAlive, countLivingNeighbours, comesToLife, cellsStayingAlive, cellsComingToLife } from "../src/evolution.mjs";


describe("Test evolution", () => {
    test("Count that number of living neighbours is 0", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        expect(countLivingNeighbours(cell, pattern)).toBe(0)
    });

    test("Count that number of living neighbours is 3", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell.downNeighbour())
        pattern.add(cell.leftNeighbour())
        pattern.add(cell.rightDownNeighbour())
        expect(countLivingNeighbours(cell, pattern)).toBe(3)
    });

    test("Count that number of living neighbours is 1", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const notNeighbour = new Cell(2, 2)
        pattern.add(notNeighbour)
        pattern.add(cell.downNeighbour())
        expect(countLivingNeighbours(cell, pattern)).toBe(1)
    });

    test("Cell with 0 alive neighbours dies", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        expect(stayAlive(cell, pattern)).toBe(false)
    });

    test("Cell with exactly 2 alive neighbours stays alive", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell.downNeighbour())
        pattern.add(cell.leftNeighbour())
        expect(stayAlive(cell, pattern)).toBe(true)
    });

    test("Cell with exactly 3 alive neighbours stays alive", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell.downNeighbour())
        pattern.add(cell.leftNeighbour())
        pattern.add(cell.upNeighbour())
        expect(stayAlive(cell, pattern)).toBe(true)
    });

    test("Cell with exactly 3 neighbours comes to live", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell.downNeighbour())
        pattern.add(cell.leftNeighbour())
        expect(comesToLife(cell, pattern)).toBe(false)
    });

    test("Get cells that stay alive", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell)
        pattern.add(cell.rightNeighbour())
        const leftNeighbour = cell.leftNeighbour()
        pattern.add(leftNeighbour)
        pattern.add(leftNeighbour.leftNeighbour())
        const newPattern = cellsStayingAlive(pattern)
        expect(newPattern.amountOfLivingCells()).toBe(2)
        expect(newPattern.isAlive(cell)).toBe(true)
        expect(newPattern.isAlive(leftNeighbour)).toBe(true)
    });

    test("Get cells that come to alive", () => {
        const pattern = new Pattern()
        const comesToAlive1 = new Cell(1, 0)
        const comesToAlive2 = new Cell(-1, 0)
        const cell = new Cell(0, 0)
        const cell2 = new Cell(0, 1)
        const cell3 = new Cell(0, -1)
        pattern.add(cell)
        pattern.add(cell2)
        pattern.add(cell3)
        const newPattern = cellsComingToLife(pattern)
        expect(newPattern.amountOfLivingCells()).toBe(2)
        expect(newPattern.isAlive(comesToAlive1)).toBe(true)
        expect(newPattern.isAlive(comesToAlive2)).toBe(true)
    });
});
