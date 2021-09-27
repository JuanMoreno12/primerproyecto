import React from 'react';

let estudiante={nombre:"maria",edad:23};

const NuevoElemento=(props)=>(
    <div>
<h3>estudiante</h3>
<h4>{estudiante.nombre}</h4>
<h3>Tipo de documento:{props.tipodocumento}</h3>
  <h3>numero de documento:{props.ndocumento}</h3>
  <p>edad:{estudiante.edad}</p>
    </div>

);
export default NuevoElemento;