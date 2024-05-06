import { describe, test } from "vitest";
import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";
import { Cell } from "../src/cell.mjs";
import { Writer } from "../src/writer.mjs";
import fs from "node:fs"

describe("Test life", () => {

    test("Write tag and tag count", () => {
        const line = "3b"
        const tag = "o"
        const tagCount = 2
        expect(Writer.writeCountAndTag(line, tag, tagCount)).toBe("3b2o")
    });

    test("Don't write tag count when it is 1", () => {
        const line = "3b"
        const tag = "o"
        const tagCount = 1
        expect(Writer.writeCountAndTag(line, tag, tagCount)).toBe("3bo")
    });

    test("Add dead cells to line", () => {
        const line = "3b"
        const tagCount = 2
        expect(Writer.addDeathCells(line, tagCount)).toBe("3b2b")
    });

    test("Add living cells to line", () => {
        const line = "3b"
        const tagCount = 2
        expect(Writer.addLivingCells(line, tagCount)).toBe("3b2o")
    });

    test("Write a line of pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePatternLine(pattern, { width: 2, x: -1, y: 2 })).toBe("bo$")
    });

    test("Death cells at the end of line are not written", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePatternLine(pattern, { width: 3, x: -1, y: 2 })).toBe("bo$")
    });


    test("Write a line of pattern with multiple cells with the same status in row", () => {
        const pattern = new Pattern()
        const cell = new Cell(-1, 0)
        const cell1 = new Cell(0, 0)
        const cell2 = new Cell(3, 0)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePatternLine(pattern, { width: 5, x: -1, y: 0 })).toBe("2o2bo$")
    });

    test("Write pattern with width 1", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePattern(pattern)).toEqual(["o$", "o$", "o$"])
    });

    test("Write pattern with width 3", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(1, 1)
        const cell2 = new Cell(2, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.writePattern(pattern)).toEqual(["o$", "bo$", "2bo$"])
    });

    test("Write empty pattern", () => {
        const pattern = new Pattern()
        expect(Writer.writePattern(pattern)).toEqual([])
    });

    test("Write file content for blinker pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        const cell1 = new Cell(0, 1)
        const cell2 = new Cell(0, 2)
        pattern.add(cell);
        pattern.add(cell1);
        pattern.add(cell2);
        expect(Writer.patternToRLE(pattern)).toEqual(`x=1 y=3
o$
o$
o$
!`)
    });

    test("Write file content for glider pattern", () => {
        const pattern = new Pattern()
        pattern.add(new Cell(1, 0));
        pattern.add(new Cell(2, 1));
        pattern.add(new Cell(0, 2));
        pattern.add(new Cell(1, 2));
        pattern.add(new Cell(2, 2));
        expect(Writer.patternToRLE(pattern)).toEqual(`x=3 y=3
bo$
2bo$
3o$
!`)
    });

    test("Write file content for pattern", () => {
        const pattern = new Pattern()
        const cell = new Cell(0, 0)
        pattern.add(cell);
        const fileName = "file"
        Writer.writeRLE(fileName, pattern)
        const fileExists = fs.existsSync(`${fileName}.rle`);
        if (fileExists) {
            fs.unlinkSync(`${fileName}.rle`)
        }
        expect(fileExists).toBe(true);
    });
});
