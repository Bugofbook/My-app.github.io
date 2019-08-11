import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value='none', className='square', onClick}) =>
  <button className={className} onClick={onClick}>
        <div style={showChess(value)}></div>
  </button>

export default Square


Square.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick : PropTypes.func
}

const showChess = (value) => {
  switch (value) {
    case "BlackChess":
      return {
        width: "20px",
        height: "20px",
        borderRadius:"10px",
        backgroundColor: "Black",
        border: "1px solid #4d4d4d",
      }
      case "WhiteChess":
        return {
          width: "20px",
          height: "20px",
          borderRadius:"10px",
          backgroundColor: "white",  
          border: "1px solid #4d4d4d",
        }
    default:
      return {
        width: "20px",
        height: "20px",
        borderRadius:"10px",
      }
  }
}

/*
const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}
*/