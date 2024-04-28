export const countLivingNeighbours = (cell, pattern) => {
    let livingNeighbours = 0
    if (pattern.isAlive(cell.leftNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.leftUpNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.rightNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.rightDownNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.downNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.leftDownNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.upNeighbour())) livingNeighbours++;
    if (pattern.isAlive(cell.rightUpNeighbour())) livingNeighbours++;
    return livingNeighbours
}

export const stayAlive = (cell, pattern) => {
    const livingNeighbours = countLivingNeighbours(cell, pattern)
    return livingNeighbours === 2 || livingNeighbours === 3
}