
export class Cell {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return `x${this.x}y${this.y}`
    }

    upNeighbour() {
        return new Cell(this.x, this.y + 1)
    }

    rightUpNeighbour() {
        return new Cell(this.x + 1, this.y + 1)
    }

    rightNeighbour() {
        return new Cell(this.x + 1, this.y)
    }

    rightDownNeighbour() {
        return new Cell(this.x + 1, this.y - 1)
    }

    downNeighbour() {
        return new Cell(this.x, this.y - 1)
    }

    leftDownNeighbour() {
        return new Cell(this.x - 1, this.y - 1)
    }

    leftNeighbour() {
        return new Cell(this.x - 1, this.y)
    }

    leftUpNeighbour() {
        return new Cell(this.x - 1, this.y + 1)
    }
}