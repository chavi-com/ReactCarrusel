import React from "react";
//import carrusel from ".components/carrusel.js"
import Botonprev from "./components/BotonPrev.js";
import Contador from "./components/contador.js";
import BotonNext from "./components/BotonNext.js"
import VerCategorias from "./components/categoriesView.js";

function menuCategorias(prev,categorias,mostrarCategorias,next){ 
    

    categorias = [
        {Image:URL, value: "Tema1", },
        {Image:URL, value: "Tema2", },
        {Image:URL, value: "Tema3", },
        {Image:URL, value: "Tema4", },
        {Image:URL, value: "Tema5", },
        {Image:URL, value: "Tema6", },
        {Image:URL, value: "Tema7", }
    ];
    mostrarCategorias = []
    //estadoDelclciNex = 0;
    //estadoDelclciPrev = 0;

    const prevClic=()=>{
         
         prev = ()=>{
        Contador
        const [numClics,setNumClics] = useState(0);
        const prevClic=()=>{
            setNumClics(numClics + 1)
       // estadoDelclciPrev = prevClic

        if (setNumClics===0){
            mostrarCategorias=categorias[2,3,4,5,6]
        }
        if(setNumClics===1){
            mostrarCategorias=categorias[0,1,2,3,4]
        }
        
    }
    const nextClic=()=>{
        next = ()=>{
        Contador
        const [numClics,setNumClics] = useState(0);
        const nextClic=()=>{
            setNumClics(numClics);
        
        if (setNumClics===0){
            mostrarCategorias=categorias[0,1,2,3,4]
        }
        if(setNumClics===1){
            mostrarCategorias=categorias[2,3,4,5,6]
        }
    }
     
    return (
        <div className="contenedor">
            <div className="contenedor-header">
                <div className="preview">
                    <Botonprev imagen='clic'
                     esBotonDeclic={true}
                     manejarClic={prevClic}
                    />
                </div>
                <div className="categorias">
                    <VerCategorias categorias={this.state.categorias}/>
                 </div>
                    <div className="Nextview">
                    <BotonNext imagen='clic'
                     esBotonDeclic={true}
                     manejarClic={nextClic}
                    />
                </div>    
            </div>            
           
        </div>

    )
    
}

export default Contenedor

