import { describe, test } from "vitest";
import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";
import { Cell } from "../src/cell.mjs";
import { Writer } from "../src/writer.mjs";

describe("Test life", () => {
    test("Write a line of pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePatternLine(pattern, { width: 3, x: -1, y: 2 })).toBe("1b1o1b!")
    });

    test("Write a line of pattern with multiple cells with the same status in row", () => {
        const pattern = new Pattern()
        const cell = new Cell(-1, 0)
        const cell1 = new Cell(0, 0)
        const cell2 = new Cell(3, 0)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePatternLine(pattern, { width: 5, x: -1, y: 0 })).toBe("2o2b1o!")
    });

    /*     test("Write pattern clitter", () => {
            const pattern = new Pattern()
            const cell = new Cell(0, 0)
            const cell1 = new Cell(0, 1)
            const cell2 = new Cell(0, 2)
            pattern.add(cell);
            pattern.add(cell1);
            pattern.add(cell2);
            expect(Writer.writePattern(pattern))
                .toBe(`
                1o1b1o!
                1o1b1o!
                1o1b1o!
                `)
        }); */
});
