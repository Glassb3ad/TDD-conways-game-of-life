export class Life {
    constructor(pattern) {
        this.life = [pattern]
    }

    initialState() {
        return this.life[0];
    }
}