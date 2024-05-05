import { Pattern } from "./pattern.mjs"

export const countLivingNeighbours = (cell, pattern) => cell.getAllNeighbours().map(cell => pattern.isAlive(cell))
    .reduce((acc, cur) => cur ? acc + 1 : acc, 0)

export const stayAlive = (cell, pattern) => {
    const livingNeighbours = countLivingNeighbours(cell, pattern)
    return livingNeighbours === 2 || livingNeighbours === 3
}

export const comesToLife = (cell, pattern) => {
    return !pattern.isAlive(cell) && countLivingNeighbours(cell, pattern) === 3
}

export const cellsStayingAlive = (pattern) => {
    const livingCells = new Pattern()
    pattern.livingCells.forEach((cell) => {
        if (stayAlive(cell, pattern)) {
            livingCells.add(cell)
        }
    })
    return livingCells;
}

export const cellsComingToLife = (pattern) => {
    const comesToAlive = new Pattern()
    pattern.livingCells.forEach((cell) => {
        cell.getAllNeighbours().forEach(cell => {
            if (comesToLife(cell, pattern)) comesToAlive.add(cell)
        })
    })
    return comesToAlive;
}

export const nextGeneration = (pattern) => {
    const comesToAlive = cellsComingToLife(pattern)
    const stayingAlive = cellsStayingAlive(pattern)
    stayingAlive.livingCells.forEach(cell => comesToAlive.add(cell))
    return comesToAlive;
}

export const generationN = (pattern, n) => {
    if (n === 0) return pattern
    return generationN(nextGeneration(pattern), n - 1)
}
