import React, { Fragment, useEffect, useState } from 'react';
import { Clima } from './components/Clima';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Error } from './components/Error';


function App() {

  
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  });
  
  const [consult, setConsult] = useState(false);

  const [result, setResult] = useState({})
  
  const { ciudad, pais } = search;

  const [error, setError] = useState(false);
  
  useEffect( () => {

    if ( consult ){
      const appId = 'e4633c3fa00bcac033457aeb91b73baa';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const getAPI = async () => {
        const response = await fetch(url);
        const data     = await response.json();
        setResult(data);
        if (data.cod === "404"){
          setError(true);
        } else {
          setError(false);
        }
      }
      getAPI();
      setConsult(false);
    }
    // eslint-disable-next-line
  }, [consult]);
  

  let component;
  if (error){
    component = <Error msj={'No hay resultados'} />
  } else {
    component = <Clima
                  result={result}
                />
  }

  return (
    <Fragment>
      <Header 
        title={'Clima React App'}
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form 
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className='col m6 s12'>
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
