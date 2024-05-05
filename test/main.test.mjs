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
        expect(fileContent).toBe(`x=2 y=2
2o$
2o$
!`)
    });
});
