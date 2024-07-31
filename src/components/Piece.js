import { Color, PIECE_KEYS } from "../constants";

export class Piece {

    constructor(piece_template, index, row, column) {
        this.stats = {
            KEY: piece_template.KEY,
            VALUE: piece_template.VALUE,
            ICON: piece_template.ICON,
            COLOR: piece_template.COLOR
        };
        this.index = index;
        this.row = row;
        this.column = column;
    }

    render = () => {
        return <span>{this.stats.ICON}</span>
    }

    calcuateMoves = () => {
        console.log(this)
        const next_moves = [];
        if (this.stats.KEY == PIECE_KEYS.PAWN) {
            next_moves.push(Color.BLACK == this.stats.COLOR ? this.index - ( this.row - 1 ) : this.index + ( this.row + 1 ));
            next_moves.push(Color.BLACK == this.stats.COLOR ? this.index - this.row : this.index + this.row);
            next_moves.push(Color.BLACK == this.stats.COLOR ? this.index - ( this.row + 1 ) : this.index + ( this.row - 1 ));
            return next_moves;
        }
    }

    changeIndex = (index) => {
        this.index = index;
    }
    
}