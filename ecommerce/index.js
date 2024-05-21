import React from "react"
import "../ecommerce/doceTalento.css"

export const ProductTalentoRosa = () => {
    return (

        <div>
            {/* NavBar  */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary myGrid">

                <div className="container-fluid">

                    <i className='bx bx-menu navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
                    <div className="offcanvas offcanvas-end myGridChild1" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <ul className="nav">

                            <li className="nav-item">
                                <a className="nav-link active nav-alpha" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-alpha" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-alpha" aria-disabled="true">About us</a>
                            </li>

                        </ul>

                        <div className="offcanvas-header ">

                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                            <div className="offcanvas-body">

                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#">Store</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">About us</a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="alphaBrand myGridChild2">

                    <a className="navbar-brand justify-content-center" href="#">
                        <img className="chocoRosa" src="chocoalphaBrand.png" alt="Bootstrap" />
                    </a>

                </div>

                <div className="myGridChild3">

                    <form className="d-flex pinkGForms" role="search">
                        <input className="form-control me-2" placeholder="Search" aria-label="Search" />
                        <i class='bx bxs-cart'></i>
                        <i class='bx bx-user'></i>
                    </form>

                </div>

            </nav>
            {/* Content */}
            <section className="PinkContent" >

                <div className="talentoRosaContent">

                    <div className="pinkTop">
                        <h2 className="pinkHeader"> Chocolate Talento
                            <span className="lightPinkBg">Branco com Doce de Leite 85g</span>
                        </h2>
                        <h5 className="pinkAmount">
                            R$ 9,00
                        </h5>
                    </div>

                    <div className="pinkMiddle">

                        <div className="pinkMiddleTop">
                            <h6 className="pinkTitle">Descrição</h6>
                            <div className="pinkStarts">
                                😍😍😍😍😍😍😍
                            </div>
                        </div>

                        <p className="pinkDescription">Uma combinação perfeita entre o chocolate branco  Talento® e o delicioso sabor de Doce de Leite.</p>
                    </div>

                    <div className="pinkFooter">
                        <div className="pinkCart">
                            <i class='bx bxs-cart'></i>
                        </div>
                        <button className="pinkBtn">COMPRAR</button>
                    </div>


                </div>
                <div className="talentoRosaContent2">
                    <img className="pinkTalent" src="pinkTalento.png" />
                    <div className="pinkBg">

                    </div>
                </div>

            </section>

        </div>

    )
}

export default ProductTalentoRosa