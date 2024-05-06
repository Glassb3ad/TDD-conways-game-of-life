import { Cell } from "./cell.mjs"
import fs from "node:fs"

const DEATH_CELL = 'b'
const ALIVE_CELL = 'o'
const FILE_END = '!'
const LINE_END = '$'
export class Writer {

    static async writeRLE(filename, pattern) {
        const fileContent = this.patternToRLE(pattern)
        fs.writeFileSync(`${filename}.rle`, fileContent)
    }

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
        for (let i = height - 1; i >= 0; i--) {
            lines.push(this.writePatternLine(pattern, { width, x: leftMostCell.x, y: leftMostCell.y - i }))
        }
        return lines
    }

    static writeCountAndTag(line, tag, count) {
        return count > 1 ? `${line}${count}${tag}` : `${line}${tag}`
    }

    static addDeathCells(line, count) {
        return this.writeCountAndTag(line, DEATH_CELL, count)
    }

    static addLivingCells(line, count) {
        return this.writeCountAndTag(line, ALIVE_CELL, count)
    }

    static writePatternLine(pattern, { width, x, y }) {
        let line = ""
        let count = 0
        let deathCellCount = 0
        let livingCellCount = 0
        while (count < width) {
            const isAlive = pattern.isAlive(new Cell(x + count, y))
            if (isAlive) {
                livingCellCount++;
                if (deathCellCount !== 0) {
                    line = this.addDeathCells(line, deathCellCount)
                    deathCellCount = 0
                }
            } else {
                deathCellCount++;
                if (livingCellCount !== 0) {
                    line = this.addLivingCells(line, livingCellCount)
                    livingCellCount = 0
                }
            }
            count++;
        }
        if (livingCellCount !== 0) {
            line = this.addLivingCells(line, livingCellCount)
        }
        return line + LINE_END
    }
}