import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MagisHogarLogo from '../../assets/logos/logo.png'
import SelectHoue from '../../assets/illustrations/select-house.svg'
import { APP_VERSION } from '../../constants/app'
import { toast } from 'react-toastify'


export default function Login() {
    const [data, setData] = useState({})
    const history = useHistory()

    const login = async () => {
        // console.log('DATA', data)
        if (checkData()) {
            toast.success(`Bienvenido!`)
            setTimeout(() => history.push('/dashboard'), 2000)
        } else return toast.error('Chequeá los campos')
    }

    const checkData = () => {
        if (data.email && data.password) return true
        return false
    }

    const updateData = (key, { target }) => {
        setData({ ...data, [key]: target.value })
    }

    return (
        <div className='login__container'>
            <img src={SelectHoue} alt="" className="login__bg" />
            <div className="login__box">
                <img src={MagisHogarLogo} alt="" className="login__logo" />
                <h4 className='login__text-box'>Entrar con mi cuenta</h4>
                <input className='input__magis' onChange={(e) => updateData('email', e)} type='email' placeholder='Email'></input>
                <input className='input__magis' onChange={(e) => updateData('password', e)} type='password' placeholder='Contraseña'></input>
                <button className='button__magis' onClick={login}>Iniciar sesión</button>
                <button className='button__magis' style={{ backgroundColor: 'gray' }} onClick={() => history.goBack()}>Volver</button>
                <h4 className="app__version">{APP_VERSION}</h4>
            </div>
        </div>
    )
}