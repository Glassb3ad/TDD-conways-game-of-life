
export class Cell {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return `x${this.x}y${this.y}`
    }

    leftNeighbour() {
        return new Cell(this.x - 1, this.y)
    }
}