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
          <p className="overlay-text-montserrat">Desde combinações clássicas até criações surpreendentes, <br></br> cada mordida é uma experiência única de prazer e indulgência. Corra para a nossa loja e mergulhe nessa tentação de sabores!</p>

          <div class="buttons">
            <button class="saiba-mais-button">Saiba mais</button>
            <button class="comprar-button">Comprar</button>
          </div>
        </div>
      </section>


      <section className="centered-image">
        <div className="menino-img">
          <img src="menino-comendo.png" alt="Sua Imagem" className="image-menino" />
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

      <div className="buy-button-container">
          <button className="buy-button">B<span>UY</span></button>
        </div>

        <footer id="footer" >
      <div class="container">
        <div class="row">
          <div class="col-md-3">
          <a href="index.html"><img src="alpha.jpeg"alt="" class="img-fluid logo-footer" width={170} /></a>
                      <div class="footer-about">
                          <p>   </p>
                      </div>

          </div>
          <div class="col-md-3">
            <div class="useful-link">
              <h2>Useful Links</h2>
              <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
              <div class="use-links">
                <li><a href="index.html"><i class="fa-solid fa-angles-right"></i> FALE CONOSCO</a></li>
                <li><a href="about.html"><i class="fa-solid fa-angles-right"></i> FEEDBACK</a></li>
                <li><a href="gallery.html"><i class="fa-solid fa-angles-right"></i> SUPORTE</a></li>
                <li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> REGULAMENTOS</a></li>
              </div>
            </div>

          </div>
                    <div class="col-md-3">
                        <div class="social-links">
              <h2>Follow Us</h2>
              <img src="./assets/images/about/home_line.png" alt=""/>
              <div class="social-icons">
                <li><a href=""><i class='bx bxl-facebook'></i> Facebook</a></li>
                <li><a href=""><i class='bx bxl-instagram' ></i> Instagram</a></li>
                <li><a href=""><i class='bx bxl-linkedin' ></i> Linkedin</a></li>
              </div>
            </div>
                    

                    </div>
          <div class="col-md-3">
            <div class="address">
              <h2>Address</h2>
              <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
              <div class="address-links">
                <li class="address1"><i class="fa-solid fa-location-dot"></i> Kolathur ramankulam-
                  Malappuram Dt 
                   Kerala 679338</li>
                   <li><a href=""><i class="fa-solid fa-phone"></i> +91 90904500112</a></li>
                   <li><a href=""><i class="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
              </div>
            </div>
          </div>
                  
        </div>
      </div>

    </footer>
    <section id="copy-right">
      <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>  
      2021 Chobani, LCC,  All Rights Reserved <a href="#">Privacy Policy</a> 


      </div>

    </section>

    </div>
  );
}

export default Ecommerce
