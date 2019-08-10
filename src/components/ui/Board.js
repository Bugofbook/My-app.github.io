import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'

const Row = ({rows=[] , rowclass='board-row' , change=f=>f}) =>
  <div className={rowclass} >
    {rows.map((columns , columnkey ) =>
      <Square 
        className={columns.classname}
        value={columns.value}
        key={columnkey}
        onClick={() => change(columnkey)}
      />
      )}
  </div>

const Board = ({ Squares=[] , boardclass='board', change=f=>f}) =>
  <div className={boardclass}>
    {Squares.map((rows, rowskey) =>
      <div className="board-row" key={rowskey}>
        <Row rows={rows} key={rowskey} change={(columnkey) => change(rowskey, columnkey)} />
      </div>
    )}
  </div>

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



