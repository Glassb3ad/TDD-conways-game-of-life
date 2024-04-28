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

    leftMostCell() {
        if (this.amountOfLivingCells() === 0) return null;
        let leftMostLivingCell;
        this.livingCells.forEach(cell => {
            if (!leftMostLivingCell) leftMostLivingCell = cell
            if (cell.x < leftMostLivingCell.x) leftMostLivingCell = cell
        })
        const leftMostCell = new Cell(leftMostLivingCell.x - 1, leftMostLivingCell.y)
        return leftMostCell
    }

    rightMostCell() {
        if (this.amountOfLivingCells() === 0) return null;
        let rightMostLivingCell;
        this.livingCells.forEach(cell => {
            if (!rightMostLivingCell) rightMostLivingCell = cell
            if (cell.x > rightMostLivingCell.x) rightMostLivingCell = cell
        })
        const rightMostCell = new Cell(rightMostLivingCell.x + 1, rightMostLivingCell.y)
        return rightMostCell
    }
}