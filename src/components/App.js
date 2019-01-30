import React from 'react'
import Board from './Board'
import { SquaresChangePoint , ChangePlayer , JudgeWinner , RestrictArray} from '../functions/T3Fun'
import './App.css'
//輸出App元件

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Player: "Player1",
      Winner: "none",
      Squares: [
        [{value: "" , lock: false},{value: "" , lock: false},{value: "" , lock: false}],
        [{value: "" , lock: false},{value: "" , lock: false},{value: "" , lock: false}],
        [{value: "" , lock: false},{value: "" , lock: false},{value: "" , lock: false}]
      ],
      Player1Array: [],
      Player2Array: []
    }
    this.change = this.change.bind(this)
  }
  change(rowskey, columnkey) //指定行列的內容改成"X"
  {
    const {Squares: NowSquares , Player: NowPlayer , Player1Array ,Player2Array } = this.state;
    let {Winner} = this.state
    let [ NextArray , ...ChangeArray ] = RestrictArray( NowPlayer , (NowPlayer === "Player1") ? Player1Array : Player2Array ,[rowskey, columnkey],6)
    const NextSquares = SquaresChangePoint(NowSquares, ChangeArray)
    if (JudgeWinner(NextSquares, rowskey, columnkey))
      Winner = NowPlayer
    this.setState({
      Player : ChangePlayer(NowPlayer),
      Winner : Winner,
      Squares: NextSquares,
      Player1Array: (NowPlayer === "Player1") ? NextArray : Player1Array,
      Player2Array: (NowPlayer === "Player2") ? NextArray : Player2Array
    })
  }      
  render() {
    const {change} = this
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
      </div>
    );
  }    
}

export default App

// ========================================
