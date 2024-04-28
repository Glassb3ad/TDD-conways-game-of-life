import { Pattern } from "./pattern.mjs"

export const countLivingNeighbours = (cell, pattern) => [
    pattern.isAlive(cell.leftNeighbour()),
    pattern.isAlive(cell.leftUpNeighbour()),
    pattern.isAlive(cell.rightNeighbour()),
    pattern.isAlive(cell.rightDownNeighbour()),
    pattern.isAlive(cell.downNeighbour()),
    pattern.isAlive(cell.leftDownNeighbour()),
    pattern.isAlive(cell.upNeighbour()),
    pattern.isAlive(cell.rightUpNeighbour())]
    .reduce((acc, cur) => cur ? acc + 1 : acc, 0)

export const stayAlive = (cell, pattern) => {
    const livingNeighbours = countLivingNeighbours(cell, pattern)
    return livingNeighbours === 2 || livingNeighbours === 3
}

export const comesToLife = (cell, pattern) => {
    return !pattern.isAlive(cell) && countLivingNeighbours(cell, pattern) === 3
}

export const nextLivingCells = (pattern) => {
    const livingCells = new Pattern()
    pattern.livingCells.forEach((cell) => {
        if (stayAlive(cell, pattern)) {
            livingCells.add(cell)
        }
    })
    return livingCells;
}
export const nextCellsComingToLife = (pattern) => {
    const comesToAlive = new Pattern()
    pattern.livingCells.forEach((cell) => {
        if (comesToLife(cell.leftNeighbour(), pattern)) comesToAlive.add(cell.leftNeighbour())
        if (comesToLife(cell.leftUpNeighbour(), pattern)) comesToAlive.add(cell.leftUpNeighbour())
        if (comesToLife(cell.rightNeighbour(), pattern)) comesToAlive.add(cell.rightNeighbour())
        if (comesToLife(cell.rightDownNeighbour(), pattern)) comesToAlive.add(cell.rightDownNeighbour())
        if (comesToLife(cell.downNeighbour(), pattern)) comesToAlive.add(cell.downNeighbour())
        if (comesToLife(cell.leftDownNeighbour(), pattern)) comesToAlive.add(cell.leftDownNeighbour())
        if (comesToLife(cell.upNeighbour(), pattern)) comesToAlive.add(cell.upNeighbour())
        if (comesToLife(cell.rightUpNeighbour(), pattern)) comesToAlive.add(cell.rightUpNeighbour())
    })
    return comesToAlive;
}
