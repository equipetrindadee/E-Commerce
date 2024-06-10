import React, { useState, useEffect, useRef } from 'react';
import api from "../../config/configApi";
import "./cart.css";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [imageBlob, setImageBlob] = useState(null);
    const modalRef = useRef(null);
    // const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cep: '',
        state: '',
        city: '',
        number: '',
        street: '',
        complement: '',
        paymentMethod: '',
        cardNumber: '',
        securityCode: '',
        expiryDate: ''
    });
    const [purchaseCode, setPurchaseCode] = useState('');
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    useEffect(() => {
        // Ler os itens do carrinho da sessão temporária ao carregar a tela
        const storedCartItems = sessionStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const clearCart = () => {
        // Limpar todos os itens do carrinho
        setCartItems([]);
        // Limpar a sessão temporária
        sessionStorage.removeItem('cartItems');
    };

    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePaymentMethodChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, paymentMethod: value });
    };

    const handleCheckOut = () => {
        setShowModal(false);
        setShowThankYouMessage(true);
        handleFinalizePurchase();
    };

    const handleFinalizePurchase = () => {
        const code = generatePurchaseCode();
        console.log('Código da compra:', code);
        setPurchaseCode(code);
    };

    const generatePurchaseCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 8;
        let code = '';
        for (let i = 0; i < length; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    };

    // Função para calcular o total da conta
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2); // Arredonda para 2 casas decimais
    };

    useEffect(() => {
        if (modalRef.current) {
            const modalElement = modalRef.current;
            modalElement.addEventListener('show.bs.modal', (event) => {
                // Lógica para quando o modal for exibido
                console.log('Modal is shown');
            });
        }
    }, []);



    return (
        <div>
            <header>
                <nav className="navbar nav-cart navbar-expand-lg myGrid">
                    <div className="container-fluid">

                        <button className="navbar-toggler navChoco d-block d-sm-none menuResponsi" type="button" data-bs-toggle="offcanvas"

                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasDarkNavbar"

                            aria-label="Toggle navigation">

                            <i className="bi bi-list"></i>

                        </button>

                        <div className="offcanvas offcanvas-end myGridChild1" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                            <div className="offcanvas-header">

                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>

                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                            </div>

                            <div className="offcanvas-body body-Cart col-6">

                                <ul className="nav navChocola">

                                    <li className="nav-item nav-ChocoItem">

                                        <a className="nav-link nav-chocoLink nav-alpha" href="#">Home</a>

                                    </li>

                                    <li className="nav-item nav-ChocoItem">

                                        <a className="nav-link nav-chocoLink nav-alpha" href="#">Quem somos</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="alphaBrand myGridChild2">

                        <img src="../../img/logo_Chocolate.svg" alt="Logo Eccommerce" />

                    </div>

                    <div className="input-group myGridChild3">

                        <div className="pesquisarChoco">

                            <i className="bi bi-search icon-search"></i>

                            <input type="text" classNameName="form-control" />

                        </div>

                        <i className="bi bi-cart bi-cart2"></i>
                      


                        <div class="btn-group dropdown-perfil-Ecommecer">
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-perfil-Ecommecer" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li className="carrinhoCell"><a class="dropdown-item" href="#">Entrar no Carrinho</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <div className="container-cart">

                        {/* parte dos cards */}
                        <div className='unidades-product'>
                            {/* parte link e titulo */}
                            <div className='topo-product'>
                                <a href='/rosa'> <i class='bx bx-chevron-left'></i></a>
                                <a href='/rosa'>Voltar</a>
                                <h1>Carrinho</h1>
                            </div>
                            {/* parte exibição dos produtos */}
                            {cartItems && cartItems.map((item, index) => (
                                <div className='allProducts'>
                                    <div className="card-product">
                                        <div className=" parte1-product">
                                            <img src="../../img/talento1.png" alt="chocolate" />
                                            {/* {product ? (
                                        <img className="talentoMorango" src={imageBlob} alt={product.name} /> 
                                    ) : (
                                        <p>Carregando imagem...</p>
                                    )} */}
                                            <div className=' textos'>
                                                <h5>{item.name}</h5>
                                                {/* <p>{item.id}</p> */}
                                            </div>
                                        </div>

                                        <div className='parte2-product'>
                                            <div className="price-product">
                                                <h5>Valor Individual:</h5>
                                                <p style={{ color: 'orange' }}> R$ {item.price},00</p>
                                            </div>

                                            <div className="price-product">
                                                <h5>Quantity: </h5>
                                                <p style={{ color: 'orange' }}> {item.quantity}     </p>
                                            </div>

                                            <div className="price-product">
                                                <h5>Total</h5>
                                                <p style={{ color: 'orange' }}> R$ {item.price * item.quantity},00</p>
                                            </div>

                                            <button type='button' onClick={() => removeItem(index)} className="btn btn-primary deletar-product">X</button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button className="btn limpar-cart" onClick={clearCart} style={{ color: 'orange' }}>Limpar Carrinho</button>
                        </div>

                        {/* lado direito */}
                        <div className='principal-direito'>
                            {/* Parte do Pagamento */}
                            <div class="card card-right-side">
                                <div class="card-body">
                                    <h2>Pagamento</h2>
                                    <div className="Total-product-pagamento">
                                        <h5>Total</h5>
                                        <p>{calculateTotal()}</p>
                                    </div>
                                    <div className="via-product-pagamento">
                                        <h3>Aceitamos</h3>

                                        <div className='via-cartoes-pagamento'>
                                            <img src="../../img/logoVisa.svg" alt='visa' />
                                            <img src="../../img/logoElo.svg" alt='elo' />
                                            <img src="../../img/logoMastercard.svg" alt='card' />
                                        </div>
                                    </div>
                                    {/* botão modal */}

                                    <button type="button" class="btn modal-finalizar" onClick={() => setShowModal(true)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        FINALIZAR
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
                                        <div className="modal-dialog modal-dialogCart">
                                            <div className="modal-content modal-contentCart">
                                                <div className=" modal-headerCart">
                                                    <h1 className="modal-title  CartMTitle fs-5" id="exampleModalLabel">Finalizando</h1>

                                                </div>
                                                <div className="modal-body modal-bodyCart">
                                                    <form className="modal-bodyCartGrid">
                                                        <div className="divCartM1">
                                                            <div className="cartForms">
                                                                <label htmlFor="name" className='labelCart'>Nome</label>
                                                                <input
                                                                    className='inputCart'
                                                                    type="text" id="name" name="name" onChange={handleInputChange} value={formData.name} required />
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="cep" className='labelCart'>CEP</label>
                                                                <input
                                                                    className='inputCart'
                                                                    type="text" id="cep" name="cep" onChange={handleInputChange} value={formData.cep} required />
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="street" className="labelCart">Rua</label>
                                                                <input
                                                                    className="inputCart" type="text" id="street" name="street" onChange={handleInputChange} value={formData.street} required />
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="paymentMethod" className="labelCart">Forma de Pagamento</label>
                                                                <select id="paymentMethod" name="paymentMethod" onChange={handlePaymentMethodChange} value={formData.paymentMethod} required>
                                                                    <option value="">Selecione</option>
                                                                    <option value="credito">Crédito</option>
                                                                    <option value="debito">Débito</option>
                                                                </select>
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="cardNumber" className="labelCart">Número do Cartão</label>
                                                                <input
                                                                    className="inputCart"
                                                                    type="text" id="cardNumber" name="cardNumber" onChange={handleInputChange} value={formData.cardNumber} required />
                                                            </div>
                                                        </div>
                                                        <div className="divCartM2">
                                                            <div className="cartForms">
                                                                <label htmlFor="phone" className="labelCart">Telefone</label>
                                                                <input
                                                                    className="inputCart"
                                                                    type="text" id="phone" name="phone" onChange={handleInputChange} value={formData.phone} required />
                                                            </div>
                                                            <div className='cardParentInfo'>
                                                                <div className="mb-4 cardInfo1">
                                                                    <label htmlFor="state" className="labelCart">Estado</label>
                                                                    <input
                                                                        className="inputCart"
                                                                        type="text" id="state" name="state" onChange={handleInputChange} value={formData.state} required />
                                                                </div>
                                                                <div className="mb-4 cardInfo1">
                                                                    <label htmlFor="city" className="labelCart">Cidade</label>
                                                                    <input
                                                                        className="inputCart"
                                                                        type="text" id="city" name="city" onChange={handleInputChange} value={formData.city} required />
                                                                </div>
                                                                <div className="mb-4 cardInfo1">
                                                                    <label htmlFor="number" className="labelCart">Número</label>
                                                                    <input
                                                                        className="inputCart"
                                                                        type="text" id="number" name="number" onChange={handleInputChange} value={formData.number} required />
                                                                </div>
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="complement" className="labelCart">Complemento</label>
                                                                <input
                                                                    className="inputCart"
                                                                    type="text" id="complement" name="complement" onChange={handleInputChange} value={formData.complement} />
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="securityCode" className="labelCart">Código de Segurança</label>
                                                                <input
                                                                    className="inputCart"
                                                                    type="text" id="securityCode" name="securityCode" onChange={handleInputChange} value={formData.securityCode} required />
                                                            </div>
                                                            <div className="cartForms">
                                                                <label htmlFor="expiryDate" className="labelCart">Data de Validade do Cartão</label>
                                                                <input
                                                                    className="inputCart" type="text" id="expiryDate" name="expiryDate" onChange={handleInputChange} value={formData.expiryDate} required />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer modal-footerCart">
                                                    <div className="cartFooterTotal">
                                                        <h1>Total</h1>
                                                        <h5>{calculateTotal()}</h5>
                                                    </div>
                                                    <button className="modalCartFbtn" type="button" onClick={handleCheckOut}>COMPRAR</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* fim do modal */}
                                </div>

                            </div>
                            {showThankYouMessage && (
                                <div className='final-compra'>
                                    <div class=" seu-codigo">
                                        <h4>Seu Codigo</h4>
                                        <p>Obrigado por comprar na nossa loja. Seu código de compra é: {purchaseCode}</p>
                                    </div>
                                    <div className='menina-codigo'>
                                        <img src='../../img/menina-codigo.svg' alt='menina codigo' />
                                    </div>


                                </div>
                            )}
                        </div>
                        {/* fim do conteiner */}
                    </div>



                </div>


            </div>

        </div>
    )
}

export default Cart;
