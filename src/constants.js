export const Color = {
    BLACK: "#000",
    WHITE: "#fff"
}

export const PIECE_ICONS = {
    BLACK : {
        KING : "♚",
        QUEEN : "♛",
        ROOK : "♜",
        KNIGHT : "♝",
        BISHOP : "♞",
        PAWN : "♟︎"
    },
    WHITE : {
        KING : "♔",
        QUEEN : "♕",
        ROOK : "♖",
        KNIGHT : "♗",
        BISHOP : "♘",
        PAWN : "♙"
    }
}

export const PIECE_KEYS = {
    KING: "K",
    QUEEN: "Q",
    ROOK: "R",
    KNIGHT: "N",
    BISHOP: "B",
    PAWN: "P"
}

export const PIECES = {
    "wR" : {
        KEY: PIECE_KEYS.ROOK,
        VALUE: 0,
        ICON: PIECE_ICONS.WHITE.ROOK,
        COLOR: Color.WHITE
    },
    "wN" : {
        KEY: PIECE_KEYS.KNIGHT,
        VALUE: 0,
        ICON: PIECE_ICONS.WHITE.KNIGHT,
        COLOR: Color.WHITE
    },
    "wB" : {
        KEY: PIECE_KEYS.BISHOP,
        VALUE: 0,
        ICON: PIECE_ICONS.WHITE.BISHOP,
        COLOR: Color.WHITE
    },
    "wK" : {
        KEY: PIECE_KEYS.KING,
        VALUE: 0,
        ICON: PIECE_ICONS.WHITE.KING,
        COLOR: Color.WHITE
    },
    "wQ" : {
        KEY: PIECE_KEYS.QUEEN,
        VALUE: 0,
        ICON: PIECE_ICONS.WHITE.QUEEN,
        COLOR: Color.WHITE
    },
    "wP" : {
        KEY: PIECE_KEYS.PAWN,
        VALUE: 0,
        ICON: PIECE_ICONS.WHITE.PAWN,
        COLOR: Color.WHITE
    },
    "bR" : {
        KEY: PIECE_KEYS.ROOK,
        VALUE: 0,
        ICON: PIECE_ICONS.BLACK.ROOK,
        COLOR: Color.BLACK
    },
    "bN" : {
        KEY: PIECE_KEYS.KNIGHT,
        VALUE: 0,
        ICON: PIECE_ICONS.BLACK.KNIGHT,
        COLOR: Color.BLACK
    },
    "bB" : {
        KEY: PIECE_KEYS.BISHOP,
        VALUE: 0,
        ICON: PIECE_ICONS.BLACK.BISHOP,
        COLOR: Color.BLACK
    },
    "bK" : {
        KEY: PIECE_KEYS.KING,
        VALUE: 0,
        ICON: PIECE_ICONS.BLACK.KING,
        COLOR: Color.BLACK
    },
    "bQ" : {
        KEY: PIECE_KEYS.QUEEN,
        VALUE: 0,
        ICON: PIECE_ICONS.BLACK.QUEEN,
        COLOR: Color.BLACK
    },
    "bP" : {
        KEY: PIECE_KEYS.PAWN,
        VALUE: 0,
        ICON: PIECE_ICONS.BLACK.PAWN,
        COLOR: Color.BLACK
    }
}

export const STARTING_POSITIONS = [
    "wR","wN","wB","wK","wQ","wB","wN","wR",
    "wP","wP","wP","wP","wP","wP","wP","wP",
    null,null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,
    "bP","bP","bP","bP","bP","bP","bP","bP",
    "bR","bN","bB","bK","bQ","bB","bN","bR"
]