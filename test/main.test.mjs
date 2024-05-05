import { describe, test } from "vitest";
import { main } from "../src/main.mjs";
import fs from "node:fs"
import { expect } from "chai";

describe("Test main", () => {
    test("Test blinker with 3 steps", () => {
        main("test/testPatterns/blinker.rle", 3)
        const fileContent = fs.readFileSync("test/testPatterns/blinker_result.rle", "utf8")
        fs.unlinkSync("test/testPatterns/blinker_result.rle")
        expect(fileContent).toBe(`x=1 y=3
1o$
1o$
1o$
!`)
    });

    test("Test block with 100 steps", () => {
        main("test/testPatterns/block.rle", 3)
        const fileContent = fs.readFileSync("test/testPatterns/block_result.rle", "utf8")
        expect(fileContent).toBe(`x=2 y=2
2o$
2o$
!`)
    });

    test("Test glider with 1 step", () => {
        main("test/testPatterns/glider.rle", 1)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
1o1b1o$
1b2o$
1b1o1b$
!`)
    });

    test("Test glider with 2 step", () => {
        main("test/testPatterns/glider.rle", 2)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
2b1o$
1o1b1o$
1b2o$
!`)
    });

    test("Test glider with 2 step", () => {
        main("test/testPatterns/glider.rle", 2)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
2b1o$
1o1b1o$
1b2o$
!`)
    });

    test("Test glider with 3 step", () => {
        main("test/testPatterns/glider.rle", 3)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
1o2b$
1b2o$
2o1b$
!`)
    });

    test("Test beehive with 6 steps", () => {
        main("test/testPatterns/beehive.rle", 6)
        const fileContent = fs.readFileSync("test/testPatterns/beehive_result.rle", "utf8")
        expect(fileContent).toBe(`x=4 y=3
1b2o1b$
1o2b1o$
1b2o1b$
!`)
    });
});