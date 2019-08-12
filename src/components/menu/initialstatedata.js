

export const makeEmptyBoard = (row,column) => Array(row).fill(Array(column).fill({value:"", owner:"", lock: false}))

export const makeGameHistoryObject = (board,objecta = {}) => Object.assign({	nowplayer: "player1"},{squares: board},objecta)
	
export const makeGameInfoObject = (gamename) => ({
	gamename,
	gamestate: "Game Begin",
	winner: "",
	loser: "",
	turns: 0,
	actionlists: [],
})

//

const TicTacToeBoard = makeEmptyBoard(3,3)
const TicTacToeNeedKey = {showlists : []}

export const TicTacToeInitialData = {
	history: [makeGameHistoryObject(TicTacToeBoard,TicTacToeNeedKey)],
	gameinfo: makeGameInfoObject("TioTeoTic"),
}

export const TicTacToeSpecialInitialData = {
	history: [makeGameHistoryObject(TicTacToeBoard,TicTacToeNeedKey)],
	gameinfo: makeGameInfoObject("TioTeoTicSpecial"),
}

//
const GomokuBoard = makeEmptyBoard(15,15)
export const GomokuInitialData = {
	history: [makeGameHistoryObject(GomokuBoard,TicTacToeNeedKey)],
	gameinfo: makeGameInfoObject("Gomoku"),
}

//

	
let  OthelloStartArray = [
	{rowskey: 3, columnskey: 3, value: "BlackChess", owner: "player1", lock: true},
	// {rowskey: 3, columnskey: 4, value: "WhiteChess", owner: "player1", lock: true},
	// {rowskey: 4, columnskey: 3, value: "WhiteChess", owner: "player1", lock: true},
	// {rowskey: 4, columnskey: 4, value: "BlackChess", owner: "player1", lock: true}
]

let  OthelloStartBoard = makeEmptyBoard(8,8)

export const setChessToSquareskk = (chess, squares) => {
	squares[chess.rowskey][chess.columnskey] = {value: chess.value, owner: chess.owner, lock: chess.lock}
	return squares
}


export const BoardProcessedChess = (chessarray, Board) => {
	//chessarray.reduce((presquares,nowchess) => setChessToSquareskk(nowchess,presquares),Board)
	return Board
	}

let OthelloBoard = BoardProcessedChess(OthelloStartArray,OthelloStartBoard)


const OthelloNeedKey = { player1chess:  0,	player2chess:  0 }



export const OthelloInitialData = {
	history: [makeGameHistoryObject(OthelloBoard,OthelloNeedKey)],
	gameinfo: makeGameInfoObject("Othello"),
}

/*
export const OthelloInitialData ={
	history: [{
					squares : Array(8).fill(Array(8).fill({value:"", owner:"", lock: false})), // construct 8* 8 squares 
					player1chess:  0,
					player2chess:  0,
					nowplayer: "player1"
	}],
	gameinfo:{
					gamename: "Othello",
					gamestate: "Game Begin",
					player1: "Tom",
					player2: "Jerry",
					winner: "",
					loser:"",
					turns: 0,
					actionlists:[],
	},
}
*/