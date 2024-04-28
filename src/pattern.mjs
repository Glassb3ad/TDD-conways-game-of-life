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

    width() {
        const leftMost = this.leftMostCell()
        const rightMost = this.rightMostCell()
        console.log({ leftMost, rightMost })
        return Math.abs(leftMost.x - rightMost.x) + 1
    }

    height() {
        const downMost = this.downMostCell()
        const upMost = this.upMostCell()
        console.log({ downMost, upMost })
        return Math.abs(downMost.y - upMost.y) + 1
    }

    xMostCell(isMoreX) {
        if (this.amountOfLivingCells() === 0) return null;
        let xMostLivingCell;
        this.livingCells.forEach(cell => {
            if (!xMostLivingCell) xMostLivingCell = cell
            if (isMoreX(xMostLivingCell, cell)) xMostLivingCell = cell
        })
        return xMostLivingCell

    }

    leftMostCell() {
        return this.xMostCell((pre, target) => (target.x < pre.x), (cell => new Cell(cell.x - 1, cell.y)));
    }

    rightMostCell() {
        return this.xMostCell((pre, target) => (target.x > pre.x), (cell => new Cell(cell.x + 1, cell.y)));
    }

    upMostCell() {
        return this.xMostCell((pre, target) => (target.y > pre.y), (cell => new Cell(cell.x, cell.y + 1)));
    }

    downMostCell() {
        return this.xMostCell((pre, target) => (target.y < pre.y), (cell => new Cell(cell.x, cell.y - 1)));
    }

}