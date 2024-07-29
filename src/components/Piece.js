import { Color, PIECE_KEYS } from "../constants";

export class Piece {

    constructor(piece_template, index, row, column, setMoves) {
        this.stats = {
            KEY: piece_template.KEY,
            VALUE: piece_template.VALUE,
            ICON: piece_template.ICON,
            COLOR: piece_template.COLOR
        };
        this.index = index;
        this.row = row;
        this.column = column;
        this.setMoves = setMoves;
        this.next_moves = [];
    }

    render = () => {
        return <span>{this.stats.ICON}</span>
    }

    calcuateMoves = () => {
        console.log(this)
        const next_moves = [];
        if (this.stats.KEY == PIECE_KEYS.PAWN) {
            this.next_moves.push(Color.BLACK == this.stats.COLOR ? this.index - this.row : this.index + this.row);
            // this.setMoves(this.next_moves);
            return this.next_moves;
        }
    }
    
}