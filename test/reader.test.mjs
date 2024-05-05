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
});
