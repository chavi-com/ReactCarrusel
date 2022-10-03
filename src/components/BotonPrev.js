
import React from "react";
import '../holas-de-estilo/botonprev.css'

function BotonPrev({ imagen,esBotonDeclic,manejarClic }) {
    return (
        <div className={esBotonDeclic ? 'boton-prev': 'boton-next'} onClick={manejarClic}>
            {imagen}
        </div>
    )
}

export default BotonPrev;