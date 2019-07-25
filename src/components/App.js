import React from 'react'
import { compose } from 'redux'
import Board from './Board'
import { ChangePlayer , JudgeWinner , SquaresDeepCopy} from '../functions/T3Fun'
import { CheckSquareLock, AddPoint, DelPoint, SetSquareLock} from '../functions/gamebasics'
import './App.css'
//輸出App元件

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Player: "Player1",
      Winner: "none",
      Squares: Array(3).fill(Array(3).fill({value:"",owner:"",lock:false})),
      PointArray: [],
    }
    this.change = this.change.bind(this)
    this.clear = this.clear.bind(this)
  }
  change(rowskey, columnkey) //click to square 
  {
    // catch info
    rowskey = parseInt(rowskey) 
    columnkey = parseInt(columnkey)
    const {Squares: NowSquares } = this.state;
    let {Winner} = this.state;
    if (!CheckSquareLock(NowSquares[rowskey][columnkey]) && Winner === "none") {
      let {Player: NowPlayer , PointArray } = this.state;
      let NextSquares = SquaresDeepCopy(NowSquares)
      let NewPoint = {
        x:rowskey,
        y:columnkey,
        owner:NowPlayer,
        value:(NowPlayer === "Player1") ? "O" : "X"
      }
      // delection point
      if (PointArray.length >= 6) {
        let Oldpoint = PointArray.shift()
        NextSquares[Oldpoint.x][Oldpoint.y] = TTTdelPoint(NextSquares, Oldpoint)
      }
      //add point
      PointArray.push(NewPoint)
      NextSquares[NewPoint.x][NewPoint.y] = TTTAddPoint(NextSquares, NewPoint)
      // judge winner
      if (TTTJudge( NewPoint,NextSquares))
        Winner = NowPlayer
      // push info
      this.setState({
        Player : ChangePlayer(NowPlayer),
        Winner : Winner,
        Squares: NextSquares,
        PointArray
      })
    }
  }
  clear() {
    this.setState({
      Player: "Player1",
      Winner: "none",
      Squares: Array(3).fill(Array(3).fill({value:"",owner:"",lock:false})),
      PointArray: [],
    })
  }

  render() {
    const {change, clear} = this
    const {Squares ,Player} = this.state
    let {Winner} = this.state
    return (
      <div>
        <Board 
          Squares= {Squares} 
          className='board' 
          change={change}
        />
        <div className="game-info" >
          {(Winner === "none") ? <p>NowPlayer is {Player}</p> : <p>Winner is {Winner}</p>}
        </div>
        <div className="game-bottons">
          <input type="button" value="New Game" onClick={clear} />
        </div>
      </div>
    );
  }    
}

export default App

// ========================================

const TTTJudge = JudgeWinner(3)
const TTTdelPoint = (NextSquares, Oldpoint) => {
  return compose(DelPoint, SetSquareLock(false))(NextSquares[Oldpoint.x][Oldpoint.y]);
}
const TTTAddPoint = (NextSquares, NewPoint) => {
  return compose(AddPoint(NewPoint.owner,NewPoint.value), SetSquareLock(true))(NextSquares[NewPoint.x][NewPoint.y]);
}