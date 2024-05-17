import React from "react"
import '../PageChocolateRosa/chocolateRosa.css'

export const ChocolateRosa = ()=>{

    return(
        <div>
            <body>

            <p
             class="descricao-chocolateRosa">Descrição do produto
             </p>

            <div class="container-rosa">
                <div className="mobile-chocolateRosa">

                <img c src="../img/Chocolate_Garoto_Talento_Branco_Com_Doce_De_Leite_85g-removebg-preview.png"/>
                </div>
         <div class="chocolate-rosa-info">
            <h1 className="chocoRosa-h1">Chocolate Talento</h1>
            
            <p>
                <span class="text-marcado">Branco com Doce de Leite 85g</span>
            </p>

            <p
             class="preco-rosa">R$ 9,00
             </p>

            {/* estrelas */}
             <div class="rating">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text"></label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text"></label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text"></label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text"></label>
                <input checked="" type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text"></label>
             </div>
            {/* estrelas */}


            <p
             class="descricao-chocoRosa">DESCRIÇÃO
             </p>

            <p 
            class="descricao-text-chocoRosa">Uma combinação perfeita entre o chocolate branco  Talento® e o delicioso sabor de Doce de Leite. 
            </p>
           <div className="compra-chocolateRosa">
            <div className="icone-chocolateRosa">
            <i class="bi bi-cart"></i>
            </div>

            <button class="comprar-chocoRosa">COMPRAR</button>
        </div>
           </div>
        <div class="chocolate-image">
            <img c src="../img/Chocolate_Garoto_Talento_Branco_Com_Doce_De_Leite_85g-removebg-preview.png"/>
        </div>
     </div>
            </body>
        </div>
    )
}

export default ChocolateRosa