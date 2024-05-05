// import { Cell } from "./cell.mjs"
// import fs from "node:fs"

/* const DEATH_CELL = 'b'
const ALIVE_CELL = 'o'
const FILE_END = '!'
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
}