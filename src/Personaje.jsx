import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Personaje=({nombre,imagenes,id})=>(
<div className="card">
<div class="card-body">
<h5 className="card-title">
                {nombre}
            </h5>
            <img src= {imagenes} border="1"  width="200" height="200" />
          
        </div>
    </div>
);
Personaje.propTypes={
    nombre:PropTypes.string,

}

Personaje.defaultProps={
    nombre:"no tiene nombre"
}
export default Personaje;