import React from 'react';
import styles from '../css/Formulario.module.css'

const Formulario = () => {
    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form action="">
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

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
