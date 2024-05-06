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
o!`)
    });

    test("Test block with 100 steps", () => {
        main("test/testPatterns/block.rle", 3)
        const fileContent = fs.readFileSync("test/testPatterns/block_result.rle", "utf8")
        expect(fileContent).toBe(`x=2 y=2
2o$
2o!`)
    });

    test("Test glider with 1 step", () => {
        main("test/testPatterns/glider.rle", 1)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
obo$
b2o$
bo!`)
    });

    test("Test glider with 2 step", () => {
        main("test/testPatterns/glider.rle", 2)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
2bo$
obo$
b2o!`)
    });

    test("Test glider with 2 step", () => {
        main("test/testPatterns/glider.rle", 2)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
2bo$
obo$
b2o!`)
    });

    test("Test glider with 3 step", () => {
        main("test/testPatterns/glider.rle", 3)
        const fileContent = fs.readFileSync("test/testPatterns/glider_result.rle", "utf8")
        expect(fileContent).toBe(`x=3 y=3
o$
b2o$
2o!`)
    });

    test("Test beehive with 6 steps", () => {
        main("test/testPatterns/beehive.rle", 6)
        const fileContent = fs.readFileSync("test/testPatterns/beehive_result.rle", "utf8")
        expect(fileContent).toBe(`x=4 y=3
b2o$
o2bo$
b2o!`)
    });

    test("Test 10-cell infinite growth with 10 steps", () => {
        main("test/testPatterns/10_cell_infinite.rle", 10)
        const fileContent = fs.readFileSync("test/testPatterns/10_cell_infinite_result.rle", "utf8")
        expect(fileContent).toBe(`x=10 y=9
4b2o$
3bo2bo$
4bo2b2o$
4b2ob2o$
5bo3bo$
bo2b2obobo$
o2b3ob2o$
3b2o$
b2o2b2o!`)
    });

    test("Test 10-cell infinite growth with 100 steps", () => {
        main("test/testPatterns/10_cell_infinite.rle", 100)
        const fileContent = fs.readFileSync("test/testPatterns/10_cell_infinite_result.rle", "utf8")
        expect(fileContent).toBe(`x=18 y=28
6b2o$
5bob2o$
2bobo3bo$
b2o3bo$
obo3b2o2bo$
ob3o5bo$
b4o4b2o$
4bo5b2o$
bo2bo4b2o$
o3bo4b2obo$
4ob2o4bo$
bo4b2o$
13b3o$
10bo3b3o$
9bo5bobo$
8bo4bo$
7b2o3bo$
7b2o3bobo$
7b2obobob2o$
7b4o4bo$
6b2o3bo3bo$
6b3o3b2obo$
6bo2bo3bobo$
6bo2bo$
10bo$
7bo2bo$
10bo$
8b3o!`)
    });

    test("Test 10-cell infinite growth with 150 steps", () => {
        main("test/testPatterns/10_cell_infinite.rle", 150)
        const fileContent = fs.readFileSync("test/testPatterns/10_cell_infinite_result.rle", "utf8")
        expect(fileContent).toBe(`x=16 y=28
5b2o2$
12b2o$
12b2o$
2o5bo$
2o3b2ob2o$
5b2o3bob2o$
5bo4bob2o$
5b2ob2o2bobo$
6bo7bo$
11bo$
2b2o7bo2bo$
bobo$
2bo$
3b2o5b2ob3o$
3b2o4bo2bob2o$
2bo4bobob3o$
3b3o3bob2o$
5bo6bo$
6bobo$
6bobob2o$
8bo$
8b2o$
5b2o$
5b2o$
7b4o$
8b3o$
9bo!`)
    });

    test("Test gosper glider gun with 1 step", () => {
        main("test/testPatterns/gosper_glider_gun.rle", 1)
        const fileContent = fs.readFileSync("test/testPatterns/gosper_glider_gun_result.rle", "utf8")
        expect(fileContent).toBe(`x=36 y=9
23bo$
21bobo$
12bo7bobo11b2o$
11b2o6bo2bo11b2o$
2o8b2o4b2o2bobo$
2o7b3o4b2o3bobo$
10b2o4b2o5bo$
11b2o$
12bo!`)
    });

    test("Test gosper glider gun with 10 steps", () => {
        main("test/testPatterns/gosper_glider_gun.rle", 10)
        const fileContent = fs.readFileSync("test/testPatterns/gosper_glider_gun_result.rle", "utf8")
        expect(fileContent).toBe(`x=36 y=9
23b2o$
23b2o$
10bo4bo10b2o6b2o$
8bobo4bo10b3o5b2o$
2o4b2o7bo10b2o$
2o4b2o11b2o2b2o$
6b2o8b2o2bo2b2o$
8bobo5b4o$
10bo7bo!`)
    });
});