import React from 'react'
import PropTypes from 'prop-types';

export const Error = ({msj}) => {
  return (
    <p className="red darken-4 error">{msj}</p>
  )
}

Error.propTypes = {
  msj: PropTypes.string.isRequired
}
