export class Pattern {
    constructor() {
        this.livingCells = new Map()
    }

    amountOfLivingCells() {
        return this.livingCells.size
    }

    add(cell) {
        this.livingCells.set(`x${cell.x}y${cell.y}`, cell)
    }

    isAlive(cell) {
        return this.livingCells.has(`x${cell.x}y${cell.y}`)
    }
}