
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

//changeArrays = calculationArrays(chess, squares).reduce((accumulator,currentValue)=> accumulator.concat(currentValue),[])

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

export const BoardProcessedChess = (chessarray, Board) => {
	//return chessarray.reduce((presquares,nowchess) => setChessToSquares(nowchess,presquares),Board)
	return Board
	}
	
	

const OthelloStartArray = [
	{ rowskey: 3, columnskey: 3, value:"O",owner:"player1",lock: true},
	{ rowskey: 3, columnskey: 4, value:"X",owner:"player2",lock: true},
	{ rowskey: 3, columnskey: 3, value:"X",owner:"player2",lock: true},
	{ rowskey: 4, columnskey: 4, value:"O",owner:"player1",lock: true}
]

const OthelloStartBoard = makeEmptyBoard(8,8)
const OthelloBoard = BoardProcessedChess(OthelloStartArray,OthelloStartBoard)


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