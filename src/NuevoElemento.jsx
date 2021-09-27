import React from 'react';

let personaje={nombre:"maria",edad:23};

const NuevoElemento=(props)=>(
    <div>
<h3>personaje</h3>
<h4>{personaje.nombre}</h4>
<h3>Tipo de documento:{props.tipodocumento}</h3>
  <h3>numero de documento:{props.ndocumento}</h3>
  <p>edad:{personaje.edad}</p>
    </div>

);
export default NuevoElemento;