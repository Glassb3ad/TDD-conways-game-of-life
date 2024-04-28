import { Cell } from "./cell.mjs";
import { nextGeneration } from "./evolution.mjs";

export class Life {
    constructor(pattern) {
        this.life = [pattern]
    }

    length() {
        return this.life.length
    }

    initialState() {
        return this.life[0];
    }

    evolve(steps) {
        let step = 1
        while (step <= steps) {
            this.life.push(nextGeneration(this.life[this.life.length - 1]))
            step++;
        }
    }

    topLeftCell() {
        const leftMost = this.leftMostCell()
        const upMost = this.life.map(pattern => pattern.upMostCell())
            .filter(a => a !== null).map(a => a.y).sort().pop()
        return new Cell(leftMost, upMost)
    }

    patternWidth() {
        const leftMost = this.leftMostCell()
        const rightMost = this.rightMostCell()
        if (leftMost === undefined) return null
        const distanceBetweenCells = Math.abs(leftMost - rightMost) + 1
        return distanceBetweenCells
    }

    leftMostCell() {
        return this.life.map(pattern => pattern.leftMostCell())
            .filter(a => a !== null).map(a => a.x).sort()[0]
    }

    rightMostCell() {
        return this.life.map(pattern => pattern.rightMostCell())
            .filter(a => a !== null).map(a => a.x).sort().pop()
    }

    patternHeight() {
        const downMost = this.life.map(pattern => pattern.downMostCell())
            .filter(a => a !== null).map(a => a.y).sort()[0]
        const upMost = this.life.map(pattern => pattern.upMostCell())
            .filter(a => a !== null).map(a => a.y).sort().pop()
        if (downMost === undefined) return null
        const height = Math.abs(downMost - upMost) + 1
        return height
    }
}