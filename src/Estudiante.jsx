import React from 'react';
import PropTypes from 'prop-types';

const Estudiante=({nombre,edad})=>(
<div className="card">
<div class="card-body">
    {/* ternario para validar un promp*/ }
    <h5 className="card-title">
        {nombre}
        </h5>
    <p className="card-text">{edad}</p>
  </div>
</div>

);
Estudiante.propTypes={
    nombre:PropTypes.string,
    edad:PropTypes.number
}

Estudiante.defaultProps={
    nombre:"no tiene nombre"
}
export default Estudiante