import { describe, test } from "vitest";
import { expect } from "chai";
// import { Pattern } from "../src/pattern.mjs";
// import { Cell } from "../src/cell.mjs";
import { Reader } from "../src/reader.mjs";
import fs from "node:fs"

describe("Test life", () => {

    test("Read x value from rle file", () => {
        const fileContent = fs.readFileSync("test/test_file.rle", "utf8")
        const x = Reader.readX(fileContent)
        expect(x).toBe(1)
    });

    test("Read two-digit x value from rle file", () => {
        const fileContent = fs.readFileSync("test/test_large.rle", "utf8")
        const x = Reader.readX(fileContent)
        expect(x).toBe(10)
    });

    test("Read y value from rle file", () => {
        const fileContent = fs.readFileSync("test/test_file.rle", "utf8")
        const x = Reader.readY(fileContent)
        expect(x).toBe(3)
    });

    test("Extract lines from pattern with only o cells", () => {
        const fileContent = fs.readFileSync("test/test_file.rle", "utf8")
        const x = Reader.extractLines(fileContent)
        expect(x).toEqual(["1o", "1o", "1o"])
    });

    test("Extract lines from pattern with both o and b cells", () => {
        const fileContent = fs.readFileSync("test/test_large.rle", "utf8")
        const x = Reader.extractLines(fileContent)
        expect(x).toEqual(["1o8b1o", "1o8b1o", "1o8b1o"])
    });

    test("Extract cells from pattern with only single o cell", () => {
        const cells = Reader.readCellsFromLine("1o", 2)
        expect(cells).toEqual([{ x: 0, y: 2 }])
    });

    test("Extract cells from pattern with multiple o cells", () => {
        const cells = Reader.readCellsFromLine("2o", 2)
        expect(cells).toEqual([{ x: 0, y: 2 }, { x: 1, y: 2 }])
    });

    test("Extract cells from line with multiple cells", () => {
        const cells = Reader.readCellsFromLine("2o2b1o", 1)
        expect(cells).toEqual([{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 4, y: 1 }])
    });

    test("Extract cells from multiple lines", () => {
        const cells = Reader.readCellsFromLines(["1o2b1o", "1o2b1o", "1o2b1o"])
        expect(cells).toEqual([{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 1 },
        { x: 0, y: 2 }, { x: 3, y: 2 }])
    });
});
