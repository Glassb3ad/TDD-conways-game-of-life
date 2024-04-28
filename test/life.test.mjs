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

    test("Evolution steps are saved to life", () => {
        const pattern = new Pattern()
        const cell = new Cell(1, 1)
        pattern.add(cell);
        const life = new Life(pattern)
        life.evolve(1000)
        expect(life.length()).toBe(1001)
    });
});
