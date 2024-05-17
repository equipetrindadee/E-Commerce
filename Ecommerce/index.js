import React, { useState } from "react";
import '../Ecommerce/Ecommerce.css';

export const Ecommerce = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["talento1.png", "talento2.png", "talento3.png"];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div>

      <section className="orange-container">
        <div className="row">
          <div className="col-md-12  space-above">
            <h2 className="pattaya-text">Shop now</h2>
            <p className="montserrat-text">Entre e mergulhe em um mundo de delícias! Bem-vindo ao paraíso dos chocolates, onde cada pedaço é uma tentação irresistível.</p>
          </div>
        </div>
        <img src="menina-chocolate.png" alt="Sua Imagem" className="image-menina" />
      </section>

      <section className="colorful-background">
        <div className="overlay-content">
          <h2 className="overlay-title-righteous"> Descubra Nossos Novos Sabores!</h2>
          <p className="overlay-text-montserrat">Desde combinações clássicas até criações surpreendentes, cada mordida é uma experiência única de prazer e indulgência. Corra para a nossa loja e mergulhe nessa tentação de sabores!</p>

        <div class="buttons">
          <button class="saiba-mais-button">Saiba mais</button>
          <button class="comprar-button">Comprar</button>
        </div>
        </div>
      </section>


      <section className="centered-image">
        <div className="menino-img">
        <img src="menino-comendo.png" alt="Sua Imagem" className="image-menino"/>
        <div className="carousel-section">
          <div className="carousel">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={index === currentSlide ? "slide active" : "slide"}
              />
            ))}
            <button className="prev" onClick={prevSlide}><i class='bx bx-chevron-left'></i></button>
            <button className="next" onClick={nextSlide}><i class='bx bx-chevron-right'></i></button>
          </div>
        </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <h2>Informações de Contato</h2>
          <p>Endereço: 123 Rua da Amostra, Cidade, País</p>
          <p>Telefone: (123) 456-7890</p>
          <p>Email: exemplo@email.com</p>
        </div>
      </footer>
      
    </div>
  );
}

export default Ecommerce
