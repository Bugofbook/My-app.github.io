import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value='none', className='square', onClick}) =>
  {
    return <button className={className} onClick={onClick}>
        {value}
      </button>;
  }

export default Square


Square.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick : PropTypes.func
}
