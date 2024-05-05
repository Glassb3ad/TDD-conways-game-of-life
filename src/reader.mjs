// import { Cell } from "./cell.mjs"
// import fs from "node:fs"

/* const DEATH_CELL = 'b'
const ALIVE_CELL = 'o'
const FILE_END = '!'
const LINE_END = '$' */
export class Reader {
    static readX(fileContent) {
        const startX = fileContent.indexOf("x=")
        const startY = fileContent.indexOf("y=")
        const valueOfX = fileContent.substring(startX + 2, startY - 1)
        return Number.parseInt(valueOfX)
    }
}