import { Cell } from "./cell.mjs";

export class Pattern {
    constructor() {
        this.livingCells = new Map()
    }

    amountOfLivingCells() {
        return this.livingCells.size
    }

    add(cell) {
        this.livingCells.set(cell.toString(), cell)
    }

    isAlive(cell) {
        return this.livingCells.has(cell.toString())
    }

    xMostCell(isMoreX, nextDeadCell) {
        if (this.amountOfLivingCells() === 0) return null;
        let xMostLivingCell;
        this.livingCells.forEach(cell => {
            if (!xMostLivingCell) xMostLivingCell = cell
            if (isMoreX(xMostLivingCell, cell)) xMostLivingCell = cell
        })
        return nextDeadCell(xMostLivingCell)

    }

    leftMostCell() {
        return this.xMostCell((pre, target) => (target.x < pre.x), (cell => new Cell(cell.x - 1, cell.y)));
    }

    rightMostCell() {
        return this.xMostCell((pre, target) => (target.x > pre.x), (cell => new Cell(cell.x + 1, cell.y)));
    }
}