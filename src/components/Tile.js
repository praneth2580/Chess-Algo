export class Tile {

    constructor(piece) {
        this.piece = piece;
        this.state = 0;
    }

    setState = (state) => {
        this.state = state;
    } 

}