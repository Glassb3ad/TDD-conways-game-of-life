import fs from "node:fs"
import { Cell } from "./cell.mjs"
import { Pattern } from "./pattern.mjs"

const ALIVE_CELL = 'o'
export class Reader {

    static readRLE(filePath) {
        const fileContent = fs.readFileSync(filePath, "utf8")
        const pattern = new Pattern()
        const cells = this.readCellsFromLines(this.extractLines(fileContent))
        cells.forEach(cell => pattern.add(cell))
        return pattern
    }

    static readX(fileContent) {
        return Number.parseInt(fileContent.match(/x=(\d)*/g)[0].slice(2))
    }

    static readY(fileContent) {
        return Number.parseInt(fileContent.match(/y=(\d)*/g)[0].slice(2))
    }

    static extractLines(fileContent) {
        return fileContent.match(/(((\d)*o)|((\d)*b))+(\$|!)/g).map(str => str.substring(0, str.length - 1))
    }

    static readCellsFromLines(lines) {
        return lines.reduce((acc, cur, i) => acc.concat(this.readCellsFromLine(cur, i)), [])
    }

    static readCellsFromLine(line, y) {
        const tags = line.match(/((\d)*o)|((\d)*b)/g)
        const xOfLivingCells = tags.reduce((acc, cur) => {
            const livingCell = cur.includes(ALIVE_CELL)
            const tagCount = Number.parseInt(cur.slice(0, cur.length - 1)) || 1
            if (livingCell) {
                const newCells = Array(tagCount).fill(null).map((a, i) => i + acc.x)
                return {
                    cells: acc.cells.concat(newCells),
                    x: acc.x + tagCount
                }
            }
            return {
                ...acc,
                x: acc.x + tagCount
            }
        }, { cells: [], x: 0 })
        const livingCells = xOfLivingCells.cells.map(x => new Cell(x, y))
        return livingCells
    }
}