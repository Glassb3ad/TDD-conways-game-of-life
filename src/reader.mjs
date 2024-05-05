// import { Cell } from "./cell.mjs"
// import fs from "node:fs"

import { Cell } from "./cell.mjs"

/* const DEATH_CELL = 'b' */
const ALIVE_CELL = 'o'
/*const FILE_END = '!'
const LINE_END = '$' */
export class Reader {
    static readX(fileContent) {
        return Number.parseInt(fileContent.match(/x=(\d)*/g)[0].slice(2))
    }

    static readY(fileContent) {
        return Number.parseInt(fileContent.match(/y=(\d)*/g)[0].slice(2))
    }

    static extractLines(fileContent) {
        return fileContent.match(/(((\d)+o)|((\d)+b))+(\$|!)/g).map(str => str.substring(0, str.length - 1))
    }

    static readCellsFromLine(line, y) {
        const tags = line.match(/((\d)+o)|((\d)+b)/g)
/*         console.log(tags)
 */        const xOfLivingCells = tags.reduce((acc, cur) => {
            const livingCell = cur.includes(ALIVE_CELL)
            const tagCount = Number.parseInt(cur.slice(0, cur.length - 1))
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
/*         console.log(xOfLivingCells)
 */        const livingCells = xOfLivingCells.cells.map(x => new Cell(x, y))
        return livingCells
    }
}