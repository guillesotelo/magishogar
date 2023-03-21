import React, { useEffect, useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
require('./js/scripts.js')
type Props = {}

export default function Home({ }: Props) {
    const history = useHistory()

    useLayoutEffect(() => {
        startCounters()
    })

    const startCounters = () => {
        const targetDiv = document.querySelector('.counter-cell');

        window.addEventListener('scroll', () => {
            const viewportHeight = window.innerHeight;
            if (targetDiv) {
                const targetDivRect = targetDiv.getBoundingClientRect();
                const targetDivTop = targetDivRect.top;
                const targetDivBottom = targetDivRect.bottom;

                if (targetDivTop < viewportHeight && targetDivBottom >= 0) {
                    const precounter1 = document.getElementById('precounter1')
                    const precounter2 = document.getElementById('precounter2')

                    if (precounter1) setInterval(() => {
                        if (Number(precounter1.innerText) < 433) precounter1.innerText = `${Number(precounter1.innerText) + 1}`
                    }, 10)
                    if (precounter2) setInterval(() => {
                        if (Number(precounter2.innerText) < 720) precounter2.innerText = `${Number(precounter2.innerText) + 1}`
                    }, 10)
                }

            }
        });
    }

    const topFunction = () => {
        document.body.scrollTop = 0; // for Safari
        document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    }

    return <div data-bs-spy="scroll" data-bs-target="#navbarExample" className='landing'>
        <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div className="container">

                <a className="a navbar-brand logo-image" href="index.html"><img src="images/logo.png" alt="Magis Hogar" /></a>

                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="a nav-link active" aria-current="page" href="#header">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="a nav-link" href="#projects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="a nav-link" href="#pricing">Cómo invertir</a>
                        </li>
                        <li className="nav-item">
                            <a className="a nav-link" href="#contact">Contacto</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="a nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Más</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a className="a dropdown-item" href="article.html">Entrevistas</a></li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="a dropdown-item" href="terms.html">Quiénes Somos</a></li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="a dropdown-item" href="privacy.html">Política de Privacidad</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <a className="a btn-solid-sm" href='' onClick={() => history.push('/register')}>Invierte ahora</a>
                    </span>
                </div>
            </div>
        </nav>


        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            {/* <div className="section-title">Lorem ipsum dolor sit amet</div> */}
                            <h1 className="h1 h1-large">Invierte inteligentemente</h1>
                            <p className="p p-large">La mejor opción para invertir en en tu próxima propiedad. Nos especializamos en ofrecer oportunidades de inversión rentables y seguras en propiedades inmobiliarias de alta calidad.</p>
                            <a className="a btn-solid-lg" href='' onClick={() => history.push('/register')}>Comienza Gratis</a>
                            <a className="a quote" href="#pricing"><i className="fas fa-paper-plane"></i>Invierte ahora</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                            <img className="img-house" src="images/header-illustration.svg" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <div id="details" className="basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                            <img className="img-fluid" src="images/details-1.svg" alt="alternative" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            <h2><b>¿Buscas una inversión segura y rentable?</b></h2>
                            <p>
                                Invertir en bienes raíces con MagisHogar es una decisión inteligente que te ayudará a construir tu patrimonio a largo plazo. Nuestro equipo de expertos en el mercado inmobiliario te guiará en todo el proceso para que puedas tomar la mejor decisión de inversión.
                            </p>
                            <a className="a btn-solid-reg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="staticBackdrop" className="modal fade" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="row">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img className="img-fluid" src="images/details-modal.jpg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3>Magis Dashboard</h3>
                            <p>Es una plataforma digital que permite a los clientes invertir en propiedades de forma sencilla y accesible. Proporcionamos oportunidades de inversión en propiedades comerciales y residenciales con un enfoque en activos de alta calidad y rentabilidad. Con MagisHogar, invertir en bienes raíces nunca ha sido tan fácil y accesible.</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Oportunidades de inversión en propiedades comerciales y residenciales</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Enfoque en activos de alta calidad y rentabilidad</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Accesible y sencillo proceso de inversión</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Plataforma digital de fácil uso</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Soporte y asesoramiento personalizado de nuestro equipo de expertos en bienes raíces</div>
                                </li>
                            </ul>
                            <a id="modalCtaBtn" className="btn-solid-reg" href="" onClick={() => history.push('/register')}>Comienza ahora</a>
                            <button type="button" className="btn-outline-reg" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="counter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            <h2><b>Nuestra Trayectoria</b></h2>
                            <p>En MagisHogar nos enorgullece el impacto que hemos tenido en el mercado inmobiliario, y la cantidad de usuarios que utilizan nuestros servicios para buscar propiedades de alta calidad y para invertir en el mercado. Nuestro compromiso con la excelencia y la satisfacción del cliente es lo que nos ha permitido crecer y convertirnos en una empresa líder en el mercado.</p>

                            <div className="counter-container">
                                <div className="counter-cell">
                                    <div data-purecounter-start="0" data-purecounter-end="1250" data-purecounter-duration="2" id='precounter1' className="purecounter">0</div>
                                    <div className="counter-info">Clientes satisfechos</div>
                                </div>
                                <div className="counter-cell red">
                                    <div data-purecounter-start="0" data-purecounter-end="1380" data-purecounter-duration="2" id='precounter2' className="purecounter">0</div>
                                    <div className="counter-info">Inversiones realizadas</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                            <img className="img-fluid" src="images/details-2.svg" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="projects" className="filter bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading"><b>Nuestros Proyectos</b></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        <div className="grid">
                            <div className="element-item development" >
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop9.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p >Hermosa casa de campo de 3 habitaciones con vistas panorámicas en una zona tranquila</p>
                                </a>
                            </div>
                            <div className="element-item development">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop1.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Terreno amplio y cercado de 1000m² listo para construir su hogar ideal</p>
                                </a>
                            </div>
                            <div className="element-item development">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop2.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Moderno apartamento de 2 habitaciones con balcón privado en el centro de la ciudad</p>
                                </a>
                            </div>
                            <div className="element-item design development">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop3.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Propiedad comercial con excelente exposición y alto flujo vehicular</p>
                                </a>
                            </div>
                            <div className="element-item design development">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop4.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Casa contemporánea de lujo con piscina privada y jardín exuberante</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop5.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Acogedor apartamento tipo estudio en una zona residencial exclusiva con amenidades de lujo</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop6.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Terreno frente al mar con acceso privado a la playa y vistas impresionantes</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop7.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Casa histórica restaurada con detalles originales y comodidades modernas</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid prop-image" src="images/prop8.jpeg" alt="alternative" style={{ width: '100%' }} />
                                    <p>Apartamento de diseño con vistas a la ciudad y acceso a una amplia gama de comodidades</p>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div className="slider-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="slider-container">
                            <div className="swiper-container card-slider">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="quotes" src="images/quotes.svg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="p testimonial-text">La atención personalizada y el servicio de calidad que recibí de MagisHogar fue excepcional. Me ayudaron a encontrar la propiedad perfecta para mi familia, y se aseguraron de que todo el proceso fuera fácil y sin estrés. ¡Gracias MagisHogar por hacer realidad el sueño de tener nuestra casa propia!</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-1.jpg" alt="alternative" />
                                                    <div className="text">
                                                        <div className="testimonial-author">Lorena Alterman</div>
                                                        <div className="occupation">Buenos Aires</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="quotes" src="images/quotes.svg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="p testimonial-text">Mauris ut mattis nisl. Nunc ultrices nisi eget nisl pulvinar iaculis vitae ac nulla. Nullam fringilla varius blandit. Nam sit amet eleifend justo blogo rovan de chichis kokos venir dab</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-2.jpg" alt="alternative" />
                                                    <div className="text">
                                                        <div className="testimonial-author">Lorem Ipsum</div>
                                                        <div className="occupation">Job Title - Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="quotes" src="images/quotes.svg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="p testimonial-text">La innovación y la tecnología de MagisHogar hacen que sea fácil y cómodo buscar propiedades de alta calidad en el mercado inmobiliario. He invertido en varias propiedades con MagisHogar y siempre he recibido un excelente retorno de mi inversión. ¡Sin duda seguiré confiando en MagisHogar para mis futuras inversiones en bienes raíces!</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-3.jpg" alt="alternative" />
                                                    <div className="text">
                                                        <div className="testimonial-author">Pedro Tolosa</div>
                                                        <div className="occupation">Santa Fe</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="quotes" src="images/quotes.svg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="p testimonial-text">El equipo de MagisHogar es excepcional en su conocimiento del mercado inmobiliario. Me ayudaron a encontrar la propiedad ideal para mi cartera de inversión, y siempre estuvieron disponibles para responder cualquier pregunta que tuviera. Estoy muy satisfecho con mi experiencia con MagisHogar y sin duda los recomendaré a cualquier persona que busque invertir en bienes raíces.</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-4.jpg" alt="alternative" />
                                                    <div className="text">
                                                        <div className="testimonial-author">Carlos Araya</div>
                                                        <div className="occupation">Montevideo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>




        <div id="pricing" className="cards-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading"><b>Inversiones Recomendadas</b></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">


                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img className="decoration-lines" src="images/decoration-lines.svg" alt="alternative" /><span>1m2</span><img className="decoration-lines flipped" src="images/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul className="list-unstyled li-space-lg">
                                    <p>Casa de campo rústica en una zona boscosa de 1 hectárea con vistas panorámicas, fuente de agua natural y acceso a senderos naturales.</p>
                                </ul>
                                <div className="price">$200</div>
                                <a href="#pricing" className="btn-outline-reg">Invierte ahora</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img className="decoration-lines" src="images/decoration-lines.svg" alt="alternative" /><span>10m2</span><img className="decoration-lines flipped" src="images/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul className="list-unstyled li-space-lg">
                                    <p>Casa de dos pisos con 3 dormitorios, garaje para dos autos, patio y amplia sala de estar en una zona tranquila y segura.</p>
                                </ul>
                                <div className="price">$1800</div>
                                <a href="#pricing" className="btn-outline-reg">Invierte ahora</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img className="decoration-lines" src="images/decoration-lines.svg" alt="alternative" /><span>50m2</span><img className="decoration-lines flipped" src="images/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul className="list-unstyled li-space-lg">
                                    <p>Apartamento amueblado de 2 habitaciones en un edificio moderno con piscina, gimnasio y seguridad las 24 horas del día.</p>
                                </ul>
                                <div className="price">$8000</div>
                                <a href="#pricing" className="btn-outline-reg">Invierte ahora</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            <p className="p p-large">Invertir en bienes raíces es una excelente forma de diversificar tu portafolio y asegurar un ingreso pasivo a largo plazo. Con MagisHogar, puedes invertir en propiedades de alta calidad y recibir un retorno sobre tu inversión que te permitirá alcanzar tus objetivos financieros. ¡No esperes más para invertir en tu futuro con MagisHogar!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact" className="form-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading"><b>Encontranos en</b></h2>
                        <ul className="list-unstyled li-space-lg">
                            <li><i className="fas fa-map-marker-alt"></i> &nbsp;Av. los Rosales 122, Cap. Bermúdez, Santa Fe, Argentina</li>
                            <li><i className="fas fa-phone"></i> &nbsp;<a href="tel:+541120828559">+54 11 208 28559</a></li>
                            <li><i className="fas fa-envelope"></i> &nbsp;<a href="mailto:info@magishogar.com">info@magishogar.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">

                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="Nombre" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control-input" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control-select" required>
                                    <option className="select-option" value="Company Website">Consulta General</option>
                                    <option className="select-option" value="Landing Page">Quiero invertir</option>
                                    <option className="select-option" value="Online Shop">Otro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control-textarea" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">Enviar</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>

        <div className="footer bg-gray">
            <img className="decoration-city" src="images/decoration-city.svg" alt="alternative" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>Conocé más a través de nuestros canales de comunicación. Nos podes encontrar en:</h4>
                        <div className="social-container">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-youtube fa-stack-1x"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-unstyled li-space-lg p-small">
                            <li><a href="article.html">Entrevistas</a></li>
                            <li><a href="terms.html">Quiénes Somos</a></li>
                            <li><a href="privacy.html">Política de Privacidad</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <p className="p p-small statement">Copyright © Magis Hogar</p>
                    </div>
                </div>
            </div>
        </div>

        <button onClick={topFunction} id="myBtn">
            <img src="images/up-arrow.png" alt="alternative" />
        </button>
    </div >
}