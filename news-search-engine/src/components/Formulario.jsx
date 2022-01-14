import React from 'react';
import styles from '../css/Formulario.module.css'
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    //Utilizar costom hook para el select
    const [ categoria, SelectNoticias ] = useSelect();

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form action="">
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

                    <SelectNoticias/>

                    <div className='input-field col s12'>
                        <input 
                            type="text"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value='Buscar' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
