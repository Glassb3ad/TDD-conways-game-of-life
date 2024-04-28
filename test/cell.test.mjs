import { describe, test } from "vitest";
import { expect } from "chai";
import { Cell } from "../src/cell.mjs";

describe("Test Cell", () => {
    test("Create a new cell at location (0,0)", () => {
        const cell = new Cell(0, 0)
        expect(cell.x).to.equal(0);
        expect(cell.y).to.equal(0);
    });

    test("Get cell as string", () => {
        const cell = new Cell(1, 2)
        expect(cell.toString()).to.equal("x1y2");
    });

    test("Get left neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.leftNeighbour()
        expect(leftNeighbour.x).to.equal(-1);
        expect(leftNeighbour.y).to.equal(0);
    });
});
