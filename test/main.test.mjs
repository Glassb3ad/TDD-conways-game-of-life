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
o$
o$
o$
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
obo$
b2o$
bo$
!`)
    });

    test("Test glider with 2 step", () => {
        main("test/testPatterns/glider.rle", 2)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
2bo$
obo$
b2o$
!`)
    });

    test("Test glider with 2 step", () => {
        main("test/testPatterns/glider.rle", 2)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
2bo$
obo$
b2o$
!`)
    });

    test("Test glider with 3 step", () => {
        main("test/testPatterns/glider.rle", 3)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
o$
b2o$
2o$
!`)
    });

    test("Test beehive with 6 steps", () => {
        main("test/testPatterns/beehive.rle", 6)
        const fileContent = fs.readFileSync("test/testPatterns/beehive_result.rle", "utf8")
        expect(fileContent).toBe(`x=4 y=3
b2o$
o2bo$
b2o$
!`)
    });

    /*     test("Test gosper glider gun with 300 steps", () => {
            main("test/testPatterns/gosper_glider_gun.rle", 300)
            const fileContent = fs.readFileSync("test/testPatterns/gosper_glider_gun_result.rle", "utf8")
            expect(fileContent).toBe(`x = 93, y = 80
    24bo$
    22bobo$
    12b2o6b2o12b2o$
    11bo3bo4b2o12b2o$
    2o8bo5bo3b2o$
    2o8bo3bob2o4bobo$
    10bo5bo7bo$
    11bo3bo$
    12b2o$
    23bo$
    24b2o$
    23b2o6$
    30bobo$
    31b2o$
    31bo5$
    38bo$
    39b2o$
    38b2o6$
    45bobo$
    46b2o$
    46bo5$
    53bo$
    54b2o$
    53b2o6$
    60bobo$
    61b2o$
    61bo5$
    68bo$
    69b2o$
    68b2o6$
    75bobo$
    76b2o$
    76bo5$
    83bo$
    84b2o$
    83b2o6$
    90bobo$
    91b2o$
    91bo$
    !
    `)
        }); */
});