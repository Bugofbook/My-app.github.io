import React from 'react'
//import { Square } from './Square'
import Square from './Square'
import PropTypes from 'prop-types'

const Row = ({rows , onclick}) =>
  {
    return rows.map((columns , columnkey ) =>
      <Square 
        className={columns.classname}
        value={columns.value}
        key={columnkey}
        onclick={() => onclick(columnkey)}
      />
      );
  }
const Board = ({ history , className='board', onClick}) =>
  {
    return history.map((rows, rowskey) =>
      <div className="board-row" key={rowskey}>
        <Row rows={rows} onclick={(columnkey) => onclick(rowskey, columnkey)} />
      </div>
      );
  };
export default Board
      
Board.propTypes = {
  history: PropTypes.array,
  className: PropTypes.string,
  onClick : PropTypes.func
}

Row.propTypes = {
  rows: PropTypes.array,
  className: PropTypes.string,
  onClick : PropTypes.func
}



