import React from 'react'
import Board from './Board'
import './App.css'
//輸出App元件

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        history: [
            [{value: "O" },{value: "O" },{value: "O" }],
            [{value: "O" },{value: "O" },{value: "O" }],
            [{value: "O" },{value: "O" },{value: "O" }]
        ]
    }
    this.change = this.change.bind(this)
  }
  change(rowskey, columnkey) //指定行列的內容改成"X"
  {
    alert('開始改變')
    const history = this.state.history;
    history[rowskey][columnkey].value = "X"
    this.setState({history})
  }      
  render() {
    const {change} = this
    const {history} = this.state
    return (
      <Board 
        history= {history} 
        className='board' 
        onClick={(rowskey, columnkey) => change(rowskey, columnkey)}
      />
    );
  }    
}

export default App

// ========================================
