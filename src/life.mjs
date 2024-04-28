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

    patternWidth() {
        const leftMost = this.life.map(pattern => pattern.leftMostCell()?.x)
            .filter(a => a !== null).sort()[0]
        const rightMost = this.life.map(pattern => pattern.rightMostCell()?.x).filter(a => a !== null).sort().pop()
        if (leftMost === undefined) return null
        console.log({ leftMost, rightMost })
        const distanceBetweenCells = Math.abs(leftMost - rightMost) + 1
        return distanceBetweenCells
    }

    patternHeight() {
        const downMost = this.life.map(pattern => {
            let y = null;
            pattern.livingCells.forEach(cell => {
                if (y === null) y = cell.y
                if (cell.y < y) y = cell.y
            })
            return y
        }).sort().filter(a => a !== null)[0]
        const upMost = this.life.map(pattern => {
            let y = null;
            pattern.livingCells.forEach(cell => {
                console.log({ cell, y })
                if (y === null) y = cell.y
                if (cell.y > y) y = cell.y
                console.log({ cell, y })
            })
            return y
        }).filter(a => a !== null).sort().pop()
        console.log({ downMost, upMost })
        if (downMost === undefined) return null
        const distanceBetweenLivingCells = Math.abs(downMost - upMost) + 1
        const distanceBetweenDeathCells = distanceBetweenLivingCells + 2
        return distanceBetweenDeathCells
    }
}