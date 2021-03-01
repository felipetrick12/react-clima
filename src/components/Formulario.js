import React from 'react'
import { useState } from 'react';
import {Error} from './Error';

export const Formulario = ({parametros,setParametros,guardarConsultar}) => {

    const [error, guardarError] = useState(false);

    const{ciudad}=parametros;
    

    const handleChange=({target}) => {
        setParametros({
            ...parametros,
            [target.name]: target.value
        })
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(ciudad.trim() === '' ) {
            guardarError(true);
            return;
        }else {
            guardarError(false);
        }

        guardarConsultar(true);
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
         {error ? <Error mensaje="campo obligatorio" /> : null }
        <div className="input-field col s12">
            <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad: </label>
        </div>
       

        <div className="input-field col s12">
        <input  
            type="submit"
            value="Buscar Clima"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
    </div>
      </form>
    )
}
