import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board'
import '../App.css'

export const Othelloform = ({squares,list,info,addlist=f=>f,addchess=f=>f,changeplayer=f=>f,endgame=f=>f,begingame=f=>f,beginboard=f=>f,clearlist=f=>f}) => {
  const Clickchange = (rowkey, columnkey) => {
    if (squares[rowkey][columnkey].lock === true || info.gamestate === "Game End")
      return
    let newpoint = {
      rowkey: rowkey,
      columnkey: columnkey,
      value: (info.player === "player1") ? "O" : "X",
      owner: info.player,
    }
    addPoint(newpoint)
    OrganizeBoard(newpoint, squares)
    endturn(list)
  }
  const addPoint = (point) => {
    addlist(point.owner, point.value, point.rowkey, point.columnkey)
    addchess(point.value, point.owner, true, point.rowkey, point.columnkey)
  }
  const OrganizeBoard = (point, squares) => {
    const changeArrays = calcArrays(point, squares)
    changeBoard(point,changeArrays)
  }
  const calcArrays = (point ={}, squares = []) => {
    let resultArray = []
    let targetvalue = point.value
    let lengthx = squares.length
    for (let i = 0 ; i < 9 ; i++) {
      let vec = [Math.floor( i / 3) - 1 ,(i % 3) - 1]
      resultArray[i] = []
      if (vec === [0,0]) {
        continue
      }
      for (let j = 1, jth = lengthx ; j < jth ; j ++) {
        let tapointx = point.rowkey + vec[0] * j
        let tapointy = point.columnkey + vec[1] * j
        let tavalue = ""
        if ( tapointx >= 0 && tapointx < lengthx && tapointy >= 0 && tapointy < squares[tapointx].length) {
          tavalue = squares[point.rowkey + vec[0] * j][point.columnkey + vec[1] * j].value
        }
        if (tavalue === "") {
          resultArray[i] = []
          break
        }
        else if (tavalue === targetvalue) {
          break
        }
        else if (tavalue !== targetvalue) {
          resultArray[i][j - 1] = {rowkey: point.rowkey + vec[0] * j , columnkey: point.columnkey + vec[1] * j}
        }
      }
    }
    return resultArray
  }
  const changeBoard = (point ={},changeArrays = []) => {
    changeArrays.map((usearray) => {
      if (usearray.length > 0) {
        return usearray.map((changepoint) => addchess(point.value, point.owner, true, changepoint.rowkey, changepoint.columnkey))
      }
      else 
      return []
    })
  }
  const endturn = (list = []) => {
    if (list.length >= 63) {
      endgame("No Player", "No Player")
    }
    if (info.player === "player1") {
      changeplayer("player2")
    }
    else {
      changeplayer("player1")
    }

  }
  const clear = () => {
    begingame("player1")
    beginboard(8,8)
    clearlist()
  }
  return (
      <div>
        <Board 
          Squares= {squares} 
          className='board' 
          change={(rowskey, columnkey) => {
            return (Clickchange(rowskey, columnkey));
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



Othelloform.propTypes = {
  squares: PropTypes.array,
  list: PropTypes.array,
  info: PropTypes.object,
  addlist: PropTypes.func,
  dellist: PropTypes.func,
  addchess: PropTypes.func,
  changeplayer: PropTypes.func,
  endgame: PropTypes.func,
  begingame: PropTypes.func,
  beginboard: PropTypes.func,
  clearlist: PropTypes.func
}