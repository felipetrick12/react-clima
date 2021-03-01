import { useState } from "react";
import { Formulario } from "./components/Formulario";
import {Clima} from "./components/Clima"
import { Error } from "./components/Error";
import { useEffect } from "react";



export const App=()=> {

  const [parametros, setParametros] = useState({
    ciudad: '',
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { ciudad} = parametros;

  useEffect(() => {
    const consultarAPI = async () => {

        if(consultar) {
          const appId = '3fe6374765a2ad1752062ce74269719f';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appId}`;
  
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          console.log(resultado);
          guardarResultado(resultado);
          guardarConsultar(false);

          // Detecta si hubo resultados incorrectos en la consulta

          if(resultado.cod === "404") {
              guardarError(true);
          } else {
              guardarError(false);
          }
        }
        
    }
    consultarAPI();
    // eslint-disable-next-line
  },[consultar]);

  
  
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light bg-info justify-content-center">
             Clima
      </nav>

      <div className="row">
     
        <div className="col mt-5 ">
          
          <Formulario
          parametros={parametros}
          setParametros={setParametros}
          guardarConsultar={guardarConsultar}
          />
          </div>

        <div className="col ">
            {
            error ? <Error mensaje="city not found" /> : 
                  <Clima 
                    resultado={resultado}
                />
            }
         </div>

      </div>
    </div>

    </>
  );
}


