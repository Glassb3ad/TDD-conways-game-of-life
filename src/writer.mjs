import { Cell } from "./cell.mjs"

const DEATH_CELL = 'b'
const ALIVE_CELL = 'o'
const FILE_END = '!'
const LINE_END = '$'
export class Writer {

    static patternToRLE(pattern) {
        const heightWidth = `x=${pattern.width()} y=${pattern.height()}`
        const lines = this.writePattern(pattern).join(`\n`)
        return [heightWidth, lines, FILE_END].join(`\n`)
    }


    static writePattern(pattern) {
        if (pattern.amountOfLivingCells() === 0) return []
        const leftMostCell = pattern.upLeftCell()
        const width = pattern.width()
        const height = pattern.height()
        const lines = []
        for (let i = 0; i < height; i++) {
            lines.push(this.writePatternLine(pattern, { width, x: leftMostCell.x, y: leftMostCell.y - i }))
        }
        return lines
    }

    static writeCountAndTag(line, tag, count) {
        return `${line}${count}${tag}`
    }

    static addDeathCells(line, count) {
        return this.writeCountAndTag(line, DEATH_CELL, count)
    }

    static addLivingCells(line, count) {
        return this.writeCountAndTag(line, ALIVE_CELL, count)
    }

    static writePatternLine(pattern, { width, x, y }) {
        let res = ""
        let count = 0
        let deathCount = 0
        let alive = 0
        while (count < width) {
            const isAlive = pattern.isAlive(new Cell(x + count, y))
            if (isAlive) {
                alive++;
                if (deathCount !== 0) {
                    res = this.addDeathCells(res, deathCount)
                    deathCount = 0
                }
            } else {
                deathCount++;
                if (alive !== 0) {
                    res = this.addLivingCells(res, alive)
                    alive = 0
                }
            }
            count++;
        }
        if (deathCount !== 0) {
            res = this.addDeathCells(res, deathCount)
        }
        if (alive !== 0) {
            res = this.addLivingCells(res, alive)
        }
        return res + LINE_END
    }
}