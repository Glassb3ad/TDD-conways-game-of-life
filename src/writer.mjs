import { Cell } from "./cell.mjs"

const DEATH_CELL = 'b'
const ALIVE_CELL = 'o'
export class Writer {

    static writePattern(pattern) {
        const leftMostCell = pattern.upLeftCell()
        const width = pattern.width()
        const height = pattern.height()
        const lines = []
        for (let i = 0; i < height; i++) {
            lines.push(this.writePatternLine(pattern, { width, x: leftMostCell.x, y: leftMostCell.y - i }))
        }
        return lines
    }

    static writePatternLine(pattern, { width, x, y }) {
        let res = ""
        let count = 0
        let death = 0
        let alive = 0
        while (count < width) {
            const isAlive = pattern.isAlive(new Cell(x + count, y))
            if (isAlive) {
                alive++;
                if (death !== 0) {
                    res = res + `${death}${DEATH_CELL}`
                    death = 0
                }
            } else {
                death++;
                if (alive !== 0) {
                    res = res + `${alive}${ALIVE_CELL}`
                    alive = 0
                }
            }
            count++;
        }
        if (death !== 0) {
            res = res + `${death}${DEATH_CELL}`
        }
        if (alive !== 0) {
            res = res + `${alive}${ALIVE_CELL}`
        }
        return res + "!"
    }
}