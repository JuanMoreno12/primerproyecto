import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estudiante = ({nombre, imagenes, id}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {nombre}
            </h5>
            <img src= {imagenes} border="1"  width="200" height="200" />
            <p><Link to={`/estudiantes/${id}`}>Detalle</Link></p>
        </div>
    </div>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "no tiene nombre"
}

export default Estudiante;