import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MagisHogarLogo from '../../assets/logos/logo.png'
import SelectHoue from '../../assets/illustrations/select-house.svg'
import { APP_VERSION } from '../../constants/app'
import { toast } from 'react-toastify'

export default function Register() {
    const [data, setData] = useState({})
    const history = useHistory()

    const register = async () => {
        console.log('DATA', data)
        if (checkData()) {
            toast.success(`Bienvenido, ${data.name}`)
            setTimeout(() => history.push('/dashboard'), 2000)
        } else return toast.error('Chequeá los campos')
    }

    const checkData = () => {
        if (data.name && data.email && data.password && data.password === data.password2) return true
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
                <h4 className='login__text-box'>Crea una cuenta</h4>
                <input className='input__magis' onChange={(e) => updateData('name', e)} type='text' placeholder='Nombre'></input>
                <input className='input__magis' onChange={(e) => updateData('email', e)} type='email' placeholder='Email'></input>
                <input className='input__magis' onChange={(e) => updateData('password', e)} type='password' placeholder='Contraseña'></input>
                <input className='input__magis' onChange={(e) => updateData('password2', e)} type='password' placeholder='Repite tu contraseña'></input>
                <button className='button__magis' onClick={register}>Registrarme</button>
                <button className='button__magis' style={{ backgroundColor: 'gray' }} onClick={() => history.goBack()}>Volver</button>
                <a href="" onClick={() => history.push('/login')} className="link__magis">Ya tengo una cuenta</a>
                <h4 className="app__version">{APP_VERSION}</h4>
            </div>
        </div>
    )
}