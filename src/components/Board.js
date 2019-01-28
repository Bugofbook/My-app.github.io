import React from 'react'
//import { Square } from './Square'
import Square from './Square'
import PropTypes from 'prop-types'

const Row = ({rows , change}) =>
  {
    return rows.map((columns , columnkey ) =>
      <Square 
        className={columns.classname}
        value={columns.value}
        key={columnkey}
        onClick={() => change(columnkey)}
      />
      );
  }
const Board = ({ history , className='board', change=f=>f}) =>
  {
    return history.map((rows, rowskey) =>
      <div className="board-row" key={rowskey}>
        <Row rows={rows} change={(columnkey) => change(rowskey, columnkey)} />
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



