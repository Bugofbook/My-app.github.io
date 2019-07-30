import React from 'react'
import Board from '../Board'
import { JudgeWinner } from '../../functions/T3Fun'
import '../App.css'

export const TioTeoTic1 = ({squares,list,info,addlist=f=>f,dellist=f=>f,addchess=f=>f,changeplayer=f=>f,endgame=f=>f,begingame=f=>f,beginboard=f=>f,clearlist=f=>f}) => {
  const delPoint = (List) => {
    if ( List.length >= 6 ) {
      let OldPoint = List[0]
      addchess("","", false, OldPoint.row, OldPoint.column)
      dellist(0)
    }
  }
  const addPoint = (point) => {
    addlist(point.owner, point.value, point.rowkey, point.columnkey)
    addchess(point.value, point.owner, true, point.rowkey, point.columnkey)
  }
  const judgeGame = (point, squares) => {
    if (TTTJudge( point,squares)) {
      let winner = info.player
      let loser = (info.player === "player1") ? "player2" : "player1"
      endgame(winner, loser)
    }
    else {
      if (info.player === "player1") {
        changeplayer("player2")
      }
      else {
        changeplayer("player1")
      }
    }
  }
  const TTTchange = (rowkey, columnkey) => {
    if (squares[rowkey][columnkey].lock === true || info.gamestate === "Game End")
      return
    delPoint(list)
    let newpoint = {
      rowkey: rowkey,
      columnkey: columnkey,
      value: (info.player === "player1") ? "O" : "X",
      owner: info.player,
    }
    addPoint(newpoint)
    judgeGame(newpoint, squares)
  }
  const clear = () => {
    begingame("player1")
    beginboard(3,3)
    clearlist()
  }
  return (
      <div>
        <Board 
          Squares= {squares} 
          className='board' 
          change={(rowskey, columnkey) => {
            return (TTTchange(rowskey, columnkey));
          }}
        />
        <div className="game-info" >
          {(info.gamestate === "Game End") ? <p>Winner is {info.winner}</p> : <p>NowPlayer is {info.player}</p> }
        </div>
        <div className="game-bottons">
          <input type="button" value="New Game" onClick={clear} />
        </div>
      </div>
    )
}

// ========================================

const TTTJudge = JudgeWinner(3)
