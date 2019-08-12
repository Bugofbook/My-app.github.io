import React from 'react'

export const PAGES = [
	{
		id: "TicTacToe",
		router: "/TicTacToe",
		zh_name: "井字棋"
	},
	{
		id: "TicTacToeSpecial",
		router: "/TicTacToeSpecial",
		zh_name: "井字棋變化版"
	},	
	{
		id: "Othello",
		router: "/Othello",
		zh_name: "黑白棋"
	}
]
export const TicTacToeRule =  
	<React.Fragment>
		<li>雙方輪流放子</li>
		<li>先連成一線者得勝</li>
	</React.Fragment>

	export const TicTacToeSpecialRule = 
	<React.Fragment>
		<li>是井字棋的變化版</li>
		<li>雙方輪流放子</li>
		<li>先連成一線者得勝</li>
		<li>當現在盤面上有六顆棋子時。在第七個棋子落下前，會先移出最早放的棋子，再放下第七顆</li>
	</React.Fragment>

	export const GomokuRule = 
	<React.Fragment>
		<li>是五子棋的”極簡化版“</li>
		<li>雙方輪流放子</li>
		<li>先連成一線者得勝</li>
		<li>之後也許會把棋盤換成圍棋用棋盤</li>
		<li>還沒有設定連珠規則或RIF規則，之後會補上功能</li>
	</React.Fragment>


	export const OthelloRule = 
	<React.Fragment>
		<li>是奧賽羅棋的”極簡化版“</li>
		<li>雙方輪流放子</li>
		<li>當棋盤上都放滿棋子時，棋子多的玩家得勝</li>
		<li>還沒有設定起始棋子，之後會補上功能</li>
		<li>還沒有限制下棋子的地方，之後會補上功能</li>
	</React.Fragment>
