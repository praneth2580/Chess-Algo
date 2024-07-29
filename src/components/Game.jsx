    import React, { useEffect, useReducer, useState } from 'react';
import { PIECES, STARTING_POSITIONS } from '../constants';
import { Piece } from './Piece';
import { Tile } from './Tile';

function GameBoard() {

    const [tiles, setTiles] = useState([]);
    const [board_dimentions, setBoardDimentions] = useState({
        rows: 8,
        columns: 8
    })
    const [grid_columns, setGridColumns] = useState("");
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [clicked_piece_index, setClickedPieceIndex] = useState(-1);

    const setColumnCount = () => {
        var columns = "";
        for (let i = 0; i < board_dimentions.columns; i++) {
            columns += ' auto';
        }
        setGridColumns(columns);
    }

    const initPieces = () => {
        const temp_tiles = [];
        for (let row = 0; row < board_dimentions.rows; row++) {
            for (let column = 0; column < board_dimentions.columns; column++) {

                const piece = STARTING_POSITIONS[temp_tiles.length]
                var piece_class = null;

                if (piece) {
                    const temp_piece = PIECES[piece];
                    piece_class = new Piece(temp_piece, temp_tiles.length, board_dimentions.rows, board_dimentions.columns, setMoves);
                }
                const tile = new Tile(piece_class);
                temp_tiles.push(tile)
            }            
        }
        setTiles(temp_tiles);
    }

    const setMoves = (moves) => {
        
        if (!moves) return null;
        
        const temp_tiles = tiles;
        for (let i = 0; i < temp_tiles.length; i++) {
            if (moves.includes(i)) {
                temp_tiles[i].setState(1);
            } else {
                temp_tiles[i].setState(0);
            }
        }

        setTiles(temp_tiles);
        forceUpdate();
    }

    const movePiece = (piece, index) => {

    }

    const onClick = (piece, index) => {
        if (piece) {
            const moves = piece.calcuateMoves();
            setMoves(moves);
            setClickedPieceIndex(index);
        } else {
            if (clicked_piece_index != -1) {
                
            }
        }
    }

    useEffect(() => {
        setColumnCount();
    },[board_dimentions])

    useEffect(() => {
        initPieces();
    },[])

  return (
    <div
    key={ignored}
    style={{
        display: "grid",
        gridTemplateColumns: grid_columns,
        border: "var(--border-color) solid 10px"
    }}>
        {
            tiles.map((tile, i) => <GameSquare key={i} index={i} tile={tile} onClick={onClick}/>)
        }
    </div>
  );
}

function GameSquare(props) {

    const isDark = (parseInt(props.index / 8) % 2) == 0 ? (props.index % 2) != 0 : (props.index % 2) == 0;
    const tile = props.tile;
    const piece = tile.piece;
    const tile_state = tile.state;
    const [className, setClassName] = useState("chess-piece");

    useEffect(() => {
        setClassName(`chess-piece ${piece ? 'piece' : ( tile_state == 1 ? 'movable' : "" )} ${isDark ? 'dark' : 'light'}`)
    },[])

    

    const onClick = () => {
        if (!piece) return null;

        props.onClick(piece,props.index);
    }

    return <div className={className} onClick={onClick}>
        {piece ? piece.render() : <></>}
    </div>
}

export default GameBoard;
