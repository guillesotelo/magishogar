import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Login() {
    const history = useHistory()

    const login = async () => {

    }
    
    return (
        <div className='login__container'>
            <div className="login__box">
                <h4 className='login__text-box'>Crea una cuenta</h4>
                <input className='input__magis' type='text' placeholder='Nombre'></input>
                <input className='input__magis' type='email' placeholder='Email'></input>
                <input className='input__magis' type='password' placeholder='Contraseña'></input>
                <input className='input__magis' type='password' placeholder='Repite tu contraseña'></input>
                <button className='button__magis' onClick={login}>Registrarme</button>
                <button className='button__magis' style={{ backgroundColor: 'gray' }} onClick={() => history.goBack()}>Volver</button>
            </div>
        </div>
    )
}