import React from 'react'
import MagisHogarLogo from '../../assets/logos/logo.png'
import UserIcon from '../../assets/icons/user-icon.svg'

import InvestIcon from '../../assets/icons/invest-icon.svg'
import ExploreIcon from '../../assets/icons/explore-icon.svg'
import SellIcon from '../../assets/icons/sell-icon.svg'
import OptionsIcon from '../../assets/icons/options-icon.svg'
import HelpIcon from '../../assets/icons/help-icon.svg'
import LogoutIcon from '../../assets/icons/logout-icon.svg'


type Props = {}

export default function Dashboard({ }: Props) {
    return (
        <div className="dashboard__container">
            <div className="header__container">
                <img src={MagisHogarLogo} alt="" className="header__logo" />
                <img src={UserIcon} alt="" className="header__account" />
            </div>
            <div className="dashboard__row">

                <div className="sidebar__container">
                    <div className="sidebar__item">
                        <img src={InvestIcon} alt="" className="sidebar__svg" />
                        <h4 className="sidebar__module-text">Mis Inveriones</h4>
                    </div>
                    <div className="sidebar__item">
                        <img src={ExploreIcon} alt="" className="sidebar__svg" />
                        <h4 className="sidebar__module-text">Explorar</h4>
                    </div>
                    <div className="sidebar__item">
                        <img src={SellIcon} alt="" className="sidebar__svg" />
                        <h4 className="sidebar__module-text">Vender</h4>
                    </div>
                    <div className="sidebar__separator"></div>
                    <div className="sidebar__item" style={{ marginTop: '.5vw' }}>
                        <img src={OptionsIcon} alt="" className="sidebar__svg" />
                        <h4 className="sidebar__module-text">Opciones</h4>
                    </div>
                    <div className="sidebar__item">
                        <img src={HelpIcon} alt="" className="sidebar__svg" />
                        <h4 className="sidebar__module-text">Centro de Ayuda</h4>
                    </div>
                    <div className="sidebar__item">
                        <img src={LogoutIcon} alt="" className="sidebar__svg" />
                        <h4 className="sidebar__module-text">Cerrar Sesión</h4>
                    </div>
                </div>

                <div className="dashboard__home">
                    <div className="investments__container">
                        <div className="publication__card">
                            <img src="imagen1.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno en venta en zona residencial</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen2.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa moderna y amplia con jardín</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen3.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento amueblado en renta</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen4.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno con vista panorámica al mar</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen5.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa con alberca y vista a la montaña</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen6.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento con terraza en zona céntrica</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen7.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno en esquina con todos los servicios</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen8.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa con diseño exclusivo y acabados de lujo</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen9.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento en renta con seguridad 24/7</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen10.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno en venta en zona comercial</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen11.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa con amplio jardín y cochera para dos autos</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen12.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento amueblado con excelente ubicación</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen13.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno con uso de suelo mixto</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen1.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno en venta en zona residencial</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen2.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa moderna y amplia con jardín</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen3.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento amueblado en renta</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen4.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno con vista panorámica al mar</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen5.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa con alberca y vista a la montaña</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen6.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento con terraza en zona céntrica</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen7.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno en esquina con todos los servicios</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen8.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa con diseño exclusivo y acabados de lujo</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen9.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento en renta con seguridad 24/7</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen10.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno en venta en zona comercial</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen11.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Casa con amplio jardín y cochera para dos autos</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen12.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Departamento amueblado con excelente ubicación</h4>
                        </div>
                        <div className="publication__card">
                            <img src="imagen13.jpg" alt="Imagen de propiedad" className="publication__image" />
                            <h4 className="publication__title">Terreno con uso de suelo mixto</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}