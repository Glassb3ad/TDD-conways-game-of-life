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
}