import React from "react";
import '../holas-de-estilo/botonNext.css'

function BotonNext({ imagen,esBotonDeclic,manejarClic }) {
    return (
        <div className={esBotonDeclic ? 'boton-prev': 'boton-next'} onClick={manejarClic}>
            {imagen}
        </div>
    )
}

export default BotonNext;