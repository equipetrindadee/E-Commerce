import React, { useState, useEffect } from 'react';
import "./cart.css";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
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

                        <i className="bi bi-person-circle person-circle"></i>

                    </div>
                </nav>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <div className="container">

                        {/* parte dos cards */}
                        <div className='unidades-product'>

                            {/* parte link e titulo */}
                            <div className='topo-product'>
                                <i class='bx bx-chevron-left'></i>
                                <a href='#'>voltar</a>
                                <h1>Carrinho</h1>
                            </div>
                            {/* parte exibição dos produtos */}
{/* 
                            <div className='allProducts'>
                                <div className="card-product">
                                    <div className=" parte1-product">
                                        {cartItems && cartItems.map((item, index) => (
                                            <li key={index}>
                                                <span>{item.name}</span>

                                            </li>
                                        ))}
                                         <img src="talento1.png" alt="chocolate" />
                                            <div className=' textos'>
                                                <h5>Chocolate Talento recheado Cookies e Cream 85g</h5>
                                                <p>Codigo do Produto</p>
                                            </div> 
                                    </div>

                                    <div className='parte2-product'>
                                        <div className="price-product">


                                            {cartItems && cartItems.map((item, index) => (
                                                <li key={index}>

                                                    <span>Valor Individual: ${item.price}</span>
                                                    <span>Valor total Produto: ${item.price * item.quantity}</span>
                                                    <span>Quantity: {item.quantity}</span>

                                                </li>
                                            ))}
                                        </div>
                                        {cartItems && cartItems.map((item, index) => (
                                            <li key={index}>

                                                <button type='button' onClick={() => removeItem(index)}>X</button>
                                            </li>
                                        ))}
                                    </div>

                                </div>


                            </div> */}
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
                                        <p>R$9,00</p>
                                    </div>
                                    <div className="via-product-pagamento">
                                        <h3>Aceitamos</h3>

                                        <div className='via-cartoes-pagamento'>
                                            <img src="visa.png" alt='visa' />
                                            <img src="elo.png" alt='elo' />
                                            <img src="mastercard.png" alt='card' />
                                        </div>
                                    </div>
                                    {/* botão modal */}

                                    {/* <button type="button" class="btn modal-finalizar"  onClick={() => setShowModal(true)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        FINALIZAR
                                    </button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">

                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    tesddadate
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">sair</button>
                                                    <button type="button" class="btn btn-primary">salvar dddalterações</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* fim do modal */}
                                </div>

                            </div>
                            <div class=" seu-codigo">
                                <h4>Seu Codigo</h4>
                                <p>teste do codigo</p>
                            </div>
                            <div className='menina-codigo'>
                                <img src='menina-codigo.png' alt='menina codigo' />
                            </div>
                        </div>
                        {/* fim do conteiner */}
                    </div>

                    <div className='pagamento-Cell'>
                        <div class="seu-codigoCell">
                            <h4>Seu Codigo</h4>
                            <p>teste do codigo</p>
                        </div>

                        <img className='menina-codigoCell' src='menina-codigo.png' alt='menina codigo' />

                        <div class="card card-pagemento-Cell">
                            <div class="card-body">
                                <h2>Pagamento</h2>
                                <div className="Total-product-pagamento">
                                    <h5>Total</h5>
                                    <p>R$9,00</p>
                                </div>
                                <div className="via-product-pagamento">
                                    <h3>Aceitamos</h3>

                                    <div className='via-cartoes-pagamento'>
                                        <img src="visa.png" alt='visa' />
                                        <img src="elo.png" alt='elo' />
                                        <img src="mastercard.png" alt='card' />
                                    </div>
                                </div>
                                {/* botão modal */}

                                <button type="button" class="btn modal-finalizar" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    FINALIZAR
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                teste
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">sair</button>
                                                <button type="button" class="btn btn-primary">salvar alterações</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* fim do modal */}
                            </div>

                        </div>
                    </div>


                </div>

            </div>

            <div className='cart'>
                <h2>Shopping Cart</h2>
                <ul>
                    {cartItems && cartItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span>Valor Individual: ${ item.price }</span>
                            <span>Valor total Produto: ${ item.price * item.quantity }</span>
                            <span>Quantity: { item.quantity }</span>
                            <button onClick={() => removeItem(index)}>X</button>
                        </li>
                    ))}
                </ul>
                <button onClick={clearCart}>Limpar Carrinho</button>
                <button onClick={() => setShowModal(true)}>Check Out</button>
                {showThankYouMessage    && <p>Obrigado por comprar na nossa loja. Seu código de compra é: {purchaseCode}</p>}
            </div>
            {showModal && (
                <div className="modal-cart">
                    <div className="modal-content-cart">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Checkout</h2>
                        <form className="checkout-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nome:</label>
                                    <input type="text" id="name" name="name" onChange={handleInputChange} value={formData.name} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefone:</label>
                                    <input type="text" id="phone" name="phone" onChange={handleInputChange} value={formData.phone} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="cep">CEP:</label>
                                    <input type="text" id="cep" name="cep" onChange={handleInputChange} value={formData.cep} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">Estado:</label>
                                    <input type="text" id="state" name="state" onChange={handleInputChange} value={formData.state} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">Cidade:</label>
                                    <input type="text" id="city" name="city" onChange={handleInputChange} value={formData.city} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="number">Número:</label>
                                    <input type="text" id="number" name="number" onChange={handleInputChange} value={formData.number} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="street">Rua:</label>
                                    <input type="text" id="street" name="street" onChange={handleInputChange} value={formData.street} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complement">Complemento:</label>
                                    <input type="text" id="complement" name="complement" onChange={handleInputChange} value={formData.complement} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="paymentMethod">Forma de Pagamento:</label>
                                    <select id="paymentMethod" name="paymentMethod" onChange={handlePaymentMethodChange} value={formData.paymentMethod} required>
                                        <option value="">Selecione</option>
                                        <option value="credito">Crédito</option>
                                        <option value="debito">Débito</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cardNumber">Número do Cartão:</label>
                                    <input type="text" id="cardNumber" name="cardNumber" onChange={handleInputChange} value={formData.cardNumber} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="securityCode">Código de Segurança:</label>
                                    <input type="text" id="securityCode" name="securityCode" onChange={handleInputChange} value={formData.securityCode} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="expiryDate">Data de Validade do Cartão:</label>
                                    <input type="text" id="expiryDate" name="expiryDate" onChange={handleInputChange} value={formData.expiryDate} required />
                                </div>
                            </div>
                            <button type="button" onClick={handleCheckOut}>Finalizar Compra</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;
