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

    test("Get left-up neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.leftUpNeighbour()
        expect(leftNeighbour.x).to.equal(-1);
        expect(leftNeighbour.y).to.equal(1);
    });

    test("Get right neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.rightNeighbour()
        expect(leftNeighbour.x).to.equal(1);
        expect(leftNeighbour.y).to.equal(0);
    });

    test("Get right-down neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.rightDownNeighbour()
        expect(leftNeighbour.x).to.equal(1);
        expect(leftNeighbour.y).to.equal(-1);
    });

    test("Get down neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.downNeighbour()
        expect(leftNeighbour.x).to.equal(0);
        expect(leftNeighbour.y).to.equal(-1);
    });

    test("Get left-down neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.leftDownNeighbour()
        expect(leftNeighbour.x).to.equal(-1);
        expect(leftNeighbour.y).to.equal(-1);
    });

    test("Get up neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.upNeighbour()
        expect(leftNeighbour.x).to.equal(0);
        expect(leftNeighbour.y).to.equal(1);
    });

    test("Get right-up neighbour", () => {
        const cell = new Cell(0, 0)
        const leftNeighbour = cell.rightUpNeighbour()
        expect(leftNeighbour.x).to.equal(1);
        expect(leftNeighbour.y).to.equal(1);
    });

    test("Get all neighbours", () => {
        const cell = new Cell(0, 0)
        const neighbours = cell.getAllNeighbours()
        expect(neighbours.some(cell => cell.x === 0, cell.y === 1)).to.equal(true);
        expect(neighbours.some(cell => cell.x === 1, cell.y === 1)).to.equal(true);
        expect(neighbours.some(cell => cell.x === 1, cell.y === 0)).to.equal(true);
        expect(neighbours.some(cell => cell.x === 1, cell.y === -1)).to.equal(true);
        expect(neighbours.some(cell => cell.x === 0, cell.y === -1)).to.equal(true);
        expect(neighbours.some(cell => cell.x === -1, cell.y === -1)).to.equal(true);
        expect(neighbours.some(cell => cell.x === -1, cell.y === 0)).to.equal(true);
        expect(neighbours.some(cell => cell.x === -1, cell.y === 1)).to.equal(true);
    });
});
