import { Cell } from "./cell.mjs"
import fs from "node:fs"
import { DEATH_CELL, ALIVE_CELL, LINE_END, FILE_END } from "./constants.mjs"
export class Writer {

    static async writeRLE(filename, pattern) {
        const fileContent = this.patternToRLE(pattern)
        fs.writeFileSync(`${filename}.rle`, fileContent)
    }

    static removeEmptyLines(lines) {
        const result = lines.reduce((acc, cur, i) => {
            if (cur === "$") {
                if (i === lines.length - 1) {
                    const lastLine = acc.lines.pop()
                    const newLine = `${lastLine.substring(0, lastLine.length - 1)}${acc.count + 2}$`
                    return {
                        count: 0,
                        lines: acc.lines.concat(newLine)
                    }
                }
                return { ...acc, count: acc.count + 1 }
            }
            if (acc.count > 0) {
                const lastLine = acc.lines.pop()
                const newLine = `${lastLine.substring(0, lastLine.length - 1)}${acc.count + 1}$`
                return {
                    count: 0,
                    lines: acc.lines.concat(newLine).concat(cur)
                }
            }
            return {
                ...acc, lines: acc.lines.concat(cur)
            }
        }, { count: 0, lines: [] })

        return result.lines;
    }

    static patternToRLE(pattern) {
        const heightWidth = `x=${pattern.width()} y=${pattern.height()}`
        const joinedLines = this.removeEmptyLines(this.writePattern(pattern)).join(`\n`)
        return [heightWidth, `\n`, joinedLines, FILE_END].join("")
    }

    static writePattern(pattern) {
        if (pattern.amountOfLivingCells() === 0) return []
        const leftMostCell = pattern.upLeftCell()
        const width = pattern.width()
        const height = pattern.height()
        const lines = []
        for (let i = height - 1; i >= 0; i--) {
            lines.push(this.writePatternLine(
                pattern,
                { width, x: leftMostCell.x, y: leftMostCell.y - i },
                i !== 0 ? LINE_END : ""
            ))
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

    static writePatternLine(pattern, { width, x, y }, lineEnd = "") {
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
        return line + lineEnd
    }
}