import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria y noticia 
  const [ categoria, setCategoria ] = useState('');
  const [ noticias, setNoticias ] = useState([]);

  useEffect(() => {

    const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=ee15347b7d6a4ac3928f65ab1fbad111`;
        const rpta = await fetch(url);
        const result = await rpta.json();

        setNoticias(result.articles);
    }

    consultarApi();

  }, [categoria])

  return (
      <Fragment>
        <Header 
            titulo='Buscador de Noticias'/>

        <div className='container white'>
          <Formulario 
                setCategoria={setCategoria} />
          <ListadoNoticias
                noticias={noticias} />
        </div>
      </Fragment>
  );
    
}

export default App;
