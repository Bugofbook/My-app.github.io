import React from 'react'
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
const Board = ({ Squares=[] , className='board', change=f=>f}) =>
  {
    return (Squares.length === 0) ?
    <div>No Board on Here, Please Click the "New Game" Bottom</div> :
    Squares.map((rows, rowskey) =>
      <div className="board-row" key={rowskey}>
        <Row rows={rows} change={(columnkey) => change(rowskey, columnkey)} />
      </div>
      );
  };
export default Board

Board.propTypes = {
  Squares: PropTypes.array,
  className: PropTypes.string,
  onClick : PropTypes.func
}

Row.propTypes = {
  rows: PropTypes.array,
  className: PropTypes.string,
  onClick : PropTypes.func
}



