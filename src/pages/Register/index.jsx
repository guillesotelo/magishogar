import React from 'react'
import { useHistory } from 'react-router-dom'
import MagisHogarLogo from '../../assets/logos/logo.png'
import SelectHoue from '../../assets/illustrations/select-house.svg'
import { APP_VERSION } from '../../constants/app'


export default function Register() {
    const history = useHistory()

    const register = async () => {

    }

    return (
        <div className='login__container'>
            <img src={SelectHoue} alt="" className="login__bg" />
            <div className="login__box">
                <img src={MagisHogarLogo} alt="" className="login__logo" />
                <h4 className='login__text-box'>Entrar con mi cuenta</h4>
                <input className='input__magis' type='email' placeholder='Email'></input>
                <input className='input__magis' type='password' placeholder='Contraseña'></input>
                <button className='button__magis' onClick={register}>Iniciar sesión</button>
                <button className='button__magis' style={{ backgroundColor: 'gray' }} onClick={() => history.goBack()}>Volver</button>
                <h4 className="app__version">{APP_VERSION}</h4>
            </div>
        </div>
    )
}