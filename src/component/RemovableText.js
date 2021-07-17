import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const RemovableText = ({ text, variant, show, setShow }) => {

  const handleClose = () => setShow(false)

  const containerStyle = { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: 5, 
    margin: 5,
    border: '1px solid black', 
    borderRadius: 4, 
  }

  return (
    show && <div style={containerStyle}>
      {variant === 'h4' ? (
        <h4 style={{ margin: 0 }}>{text}</h4>
      ) : (
        <p style={{ margin: 0 }}>{text}</p>
      )}
      <button type="button" style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={handleClose}>x</button>
    </div>
  )
}

RemovableText.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  show: PropTypes.bool.isRequired,
  variasetShownt: PropTypes.func.isRequired,
}

RemovableText.defaultProps = {
  text: '',
  variant: 'p',
}

export default RemovableText
