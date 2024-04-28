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