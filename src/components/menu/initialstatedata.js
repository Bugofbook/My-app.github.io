export const TicTacToeInitialData ={
	history: [{
			squares : Array(3).fill(Array(3).fill({value:"", owner:"", lock: false})), // construct 3* 3 squares 
			showlists : [],
			nowplayer: "player1"
	}],
	gameinfo:{
			gamename: "TioTeoTic",
			gamestate: "Game Begin",
			player1: "Tom",
			player2: "Jerry",
			winner: "",
			loser:"",
			turns: 0,
			actionlists:[],
	},
}

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
