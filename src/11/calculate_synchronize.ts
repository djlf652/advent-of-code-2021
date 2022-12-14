import { padGrid, updateGrid, countFlashes } from "./count_total_flashes"

export function calculateSynchronize(grid: number[][]): number {
    let paddedGrid: number[][] = padGrid(grid)
    let gridArea: number = grid.length * grid[0].length
    let steps: number = 0
    while (countFlashes(paddedGrid) != gridArea) {
        paddedGrid = updateGrid(paddedGrid)
        steps++
    }
    return steps
}
