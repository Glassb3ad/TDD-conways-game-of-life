import { describe, test } from "vitest";
import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";
import { Cell } from "../src/cell.mjs";
import { Life } from "../src/life.mjs"

describe("Test life", () => {
    test("create life with start pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(1, 1)
        pattern.add(cell);
        const life = new Life(pattern)
        expect(life.initialState().isAlive(cell)).toBe(true)
    });

    test("Evolution steps are saved", () => {
        const pattern = new Pattern()
        const cell = new Cell(1, 1)
        pattern.add(cell);
        const life = new Life(pattern)
        life.evolve(1000)
        expect(life.length()).toBe(1001)
    });

    test("Get width of pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(1, 0)
        const cell2 = new Cell(2, 0)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        const life = new Life(pattern)
        expect(life.patternWidth()).toBe(5)
    });

    test("Get width of empty pattern", () => {
        const pattern = new Pattern()
        const life = new Life(pattern)
        life.evolve(5)
        expect(life.patternWidth()).toBe(null)
    });

    test("Get height of pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        pattern.add(cell);
        pattern.add(cell1);
        const life = new Life(pattern)
        life.evolve(5)
        expect(life.patternHeight()).toBe(4)
    });


});
