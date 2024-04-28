import { nextGeneration } from "./evolution.mjs";

export class Life {
    constructor(pattern) {
        this.life = [pattern]
    }

    length() {
        return this.life.length
    }

    initialState() {
        return this.life[0];
    }

    evolve(steps) {
        let step = 1
        while (step <= steps) {
            this.life.push(nextGeneration(this.life[this.life.length - 1]))
            step++;
        }
    }
}