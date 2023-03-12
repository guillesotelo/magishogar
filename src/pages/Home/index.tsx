import React from 'react'
require('./js/scripts.js')
type Props = {}

export default function Home({ }: Props) {

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
                            <a className="a nav-link active" aria-current="page" href="#header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="a nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="a nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="a nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="a nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a className="a dropdown-item" href="article.html">Article Details</a></li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="a dropdown-item" href="terms.html">Terms Conditions</a></li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="a dropdown-item" href="privacy.html">Privacy Policy</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <a className="a btn-solid-sm" href="#contact">Get quote</a>
                    </span>
                </div>
            </div>
        </nav>


        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            <div className="section-title">Lorem ipsum dolor sit amet</div>
                            <h1 className="h1 h1-large">Consectetur adipisg elit sed do eiusm</h1>
                            <p className="p p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut ultrices sollicitudin</p>
                            <a className="a btn-solid-lg" href="#services">Offered services</a>
                            <a className="a quote" href="#contact"><i className="fas fa-paper-plane"></i>Get quote</a>
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
                            <h2><span>Maecenas fringil</span><br /> quam posu pele est</h2>
                            <p>Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis. Integer vitae mollis felis. Integer id quam id tellus hendrerit laciniad binfer</p>
                            <p>Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor velit, sed viverra dui rem dina</p>
                            <a className="a btn-solid-reg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Modal</a>
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
                            <h3>Lorem Ipsum</h3>
                            <hr />
                            <p>In gravida at nunc sodales pretium. Vivamus semper, odio vitae mattis auctor, elit elit semper magna ac tum nico vela spider</p>
                            <h4>Dolor Sit Amet</h4>
                            <p>Sapien vitae eros. Praesent ut erat a tellus posuere nisi more thico cursus pharetra finibus posuere nisi. Vivamus feugiat</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Tincidunt sem vel brita bet mala</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Sapien condimentum sacoz sil necr</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Fusce interdum nec ravon fro urna</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Integer pulvinar biolot bat tortor</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="flex-grow-1">Id ultricies fringilla fangor raq trinit</div>
                                </li>
                            </ul>
                            <a id="modalCtaBtn" className="btn-solid-reg" href="#">Details</a>
                            <button type="button" className="btn-outline-reg" data-bs-dismiss="modal">Close</button>
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
                            <h2><span>Vitae tincidu reno</span><br /> imperdi ant pelle ali</h2>
                            <p>In gravida vitae nulla vitae tincidunt imperdiet ante. Pellentesque aliquet mi eu tortor dictum, non imperdiet ante viverra. Phasellus eget enim orci flig rine bilo</p>

                            <div className="counter-container">
                                <div className="counter-cell">
                                    <div data-purecounter-start="0" data-purecounter-end="1250" data-purecounter-duration="2" className="purecounter">1</div>
                                    <div className="counter-info">Happy Customers</div>
                                </div>
                                <div className="counter-cell red">
                                    <div data-purecounter-start="0" data-purecounter-end="1380" data-purecounter-duration="2" className="purecounter">1</div>
                                    <div className="counter-info">Issues Solved</div>
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
                        <h2 className="h2-heading">Tidunt leo eu laoreedt inter</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        <div className="button-group filters-button-group">
                            <button className="button is-checked" data-filter="*">ALL</button>
                            <button className="button" data-filter=".design">DESIGN</button>
                            <button className="button" data-filter=".development">DEVELOPMENT</button>
                            <button className="button" data-filter=".marketing">MARKETING</button>
                        </div>
                        <div className="grid">
                            <div className="element-item development">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-1.jpg" alt="alternative" />
                                    <p><strong>Online banking</strong> - pellentesque tincidunt leo eu laoreedt integer quis vanos compren</p>
                                </a>
                            </div>
                            <div className="element-item development">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-2.jpg" alt="alternative" />
                                    <p><strong>Loans company</strong> - odio semper, interdum orci molestie, mattis lectus pellentesq aliqu</p>
                                </a>
                            </div>
                            <div className="element-item development">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-3.jpg" alt="alternative" />
                                    <p><strong>Refinance firm</strong> - arcu a neque congue finibus doneci malesuada et purus melan bris</p>
                                </a>
                            </div>
                            <div className="element-item design development">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-4.jpg" alt="alternative" />
                                    <p><strong>Financial products</strong> - id aliquam ut malesuada eros utr varius blandit aliquam tinci bist</p>
                                </a>
                            </div>
                            <div className="element-item design development">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-5.jpg" alt="alternative" />
                                    <p><strong>Credit cards</strong> - magna a feugiat cras a semper tellus in rhoncus vehicula tellus rugo</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-6.jpg" alt="alternative" />
                                    <p><strong>Software robots</strong> - vel sodales dolor donec a est sapien integer pharetr bilom conva</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-7.jpg" alt="alternative" />
                                    <p><strong>Company control</strong> - ut quam aliquam elemo de vestibulum fringilla porttitor vanic tres</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-8.jpg" alt="alternative" />
                                    <p><strong>Audit reports</strong> - sed tempor, metus vel pharetra finibus, est ante hendrerit augue</p>
                                </a>
                            </div>
                            <div className="element-item design marketing">
                                <a href="article.html">
                                    <img className="img-fluid" src="images/project-9.jpg" alt="alternative" />
                                    <p><strong>Big business</strong> - aliquam semper molestie nisi, at porttitor lacus suscipit in mole richter</p>
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
                                                <p className="p testimonial-text">Fusce tincidunt dui nec diam varius venenatis. Nullam tristique rutrum odio, ut tincidunt erat dictum in. Etiam et aliquet mi, et vehicula elit fusce porta ullamcorper</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-1.jpg" alt="alternative" />
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
                                                <p className="p testimonial-text">Nam sit amet eleifend justo. Aliquam sit amet lacinia enim, eget facilisis ex. Ut pretium cursus eleifend. Integer feugiat malesuada quam vel basil venis proca jilo</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-3.jpg" alt="alternative" />
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
                                                <p className="p testimonial-text">Lorem ipsum dolor sit amet, consectetur ing elit. Nulla id nisl tempus risus facilisis efficr ut tincidunt vitae enim non vehicula. Phases vitae metus in felis gravida ultrices zimbo</p>
                                                <div className="details">
                                                    <img className="testimonial-image" src="images/testimonial-4.jpg" alt="alternative" />
                                                    <div className="text">
                                                        <div className="testimonial-author">Lorem Ipsum</div>
                                                        <div className="occupation">Job Title - Name</div>
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
                        <h2 className="h2-heading"><span>Alim mada bib arcu</span><br /> vitae elemem sisse ultrices</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">


                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img className="decoration-lines" src="images/decoration-lines.svg" alt="alternative" /><span>Landing page</span><img className="decoration-lines flipped" src="images/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul className="list-unstyled li-space-lg">
                                    <li>Fusce pulvinar eu mi acm</li>
                                    <li>Curabitur consequat nisl bro</li>
                                    <li>Reget facilisis molestie</li>
                                    <li>Vivamus vitae sem in tortor</li>
                                    <li>Pharetra vehicula ornares</li>
                                    <li>Vivamus dignissim sit amet</li>
                                    <li>Ut convallis aliquama set</li>
                                </ul>
                                <div className="price">$200</div>
                                <a href="#contact" className="btn-outline-reg">Get quote</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img className="decoration-lines" src="images/decoration-lines.svg" alt="alternative" /><span>Corporate site</span><img className="decoration-lines flipped" src="images/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul className="list-unstyled li-space-lg">
                                    <li>Nunc commodo magna quis</li>
                                    <li>Lacus fermentum tincidunt</li>
                                    <li>Nullam lobortis porta diam</li>
                                    <li>Announcing of invita mro</li>
                                    <li>Dictum metus placerat luctus</li>
                                    <li>Sed laoreet blandit mollis</li>
                                    <li>Mauris non luctus est</li>
                                </ul>
                                <div className="price">$300</div>
                                <a href="#contact" className="btn-outline-reg">Get quote</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img className="decoration-lines" src="images/decoration-lines.svg" alt="alternative" /><span>Online shop</span><img className="decoration-lines flipped" src="images/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul className="list-unstyled li-space-lg">
                                    <li>Quisque rutrum mattis</li>
                                    <li>Quisque tristique cursus lacus</li>
                                    <li>Interdum sollicitudin maec</li>
                                    <li>Quam posuere, pellentesque</li>
                                    <li>Est nec, gravida turpis integer</li>
                                    <li>Mollis felis. Integer id quam</li>
                                    <li>Id tellus hendrerit lacinia</li>
                                </ul>
                                <div className="price">$400</div>
                                <a href="#contact" className="btn-outline-reg">Get quote</a>
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
                            <h4>In gravida at nunc sodales pretium. Vivamus semper, odio vitae mattis auctor, elit elit semper magna rico</h4>
                            <p className="p p-large">Ac tristique velit sapien vitae eros. Praesent ut erat a tellus cursus pharetra finibus posuere nisi. Vivamus feugiat tincidunt sem pre toro</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact" className="form-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading"><span>Dictum fusce ut placerat</span><br /> faucibus turpis in eu mi ultrices</h2>
                        <p className="p p-heading">Vel malesuada sapien condimentum nec. Fusce interdum nec urna et finibus pulvinar tortor id</p>
                        <ul className="list-unstyled li-space-lg">
                            <li><i className="fas fa-map-marker-alt"></i> &nbsp;22 Praesentum, Pharetra Fin, CB 12345, KL</li>
                            <li><i className="fas fa-phone"></i> &nbsp;<a href="tel:008123456789">+12 345 6789</a></li>
                            <li><i className="fas fa-envelope"></i> &nbsp;<a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">

                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control-input" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control-select" required>
                                    <option className="select-option" value="Company Website">Company Website</option>
                                    <option className="select-option" value="Landing Page">Landing Page</option>
                                    <option className="select-option" value="Online Shop">Online Shop</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control-textarea" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">Submit</button>
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
                        <h4>Pellentesque aliquet mi eu tortor dictum, non imperdiet ante viverra. Phasellus eget enim orci ut pellentes troc</h4>
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
                                    <i className="fab fa-pinterest-p fa-stack-1x"></i>
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
                            <li><a href="article.html">Article Details</a></li>
                            <li><a href="terms.html">Terms & Conditions</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
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
    </div>
}