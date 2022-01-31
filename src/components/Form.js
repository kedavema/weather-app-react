import React, { useState } from 'react'
import { Error } from './Error';
import PropTypes from 'prop-types';


export const Form = ({ search, setSearch, setConsult }) => {

  const [error, setError] = useState(false);

  const { ciudad, pais } = search;

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (ciudad.trim() === '' || pais.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    setConsult(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      { error ? <Error msj={'Todos los campos son obligatorios'}/> : null }
      <div className='input-field col s12'>
        <input 
          type='text'
          name='ciudad'
          id='ciudad'
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor='ciudad'>Ciudad: </label>
      </div>

      <div className='input-field col s12'>
        <select
          name='pais'
          id='pais'
          value={pais}
          onChange={handleChange}
        >
          <option value=''>-- Selecciona un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="PY">Paraguay</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor='pais'>País: </label>
      </div>

      <div className='input-field col s12'>
        <input
          type='submit'
          value='Buscar clima'
          className='waves-effect waves-light btn-large btn-block yellow accent-4'
        />
      </div>
    </form>
  )
}

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired
}
