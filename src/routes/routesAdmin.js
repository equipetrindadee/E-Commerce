import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/index.js";
import { Dashboard } from "../pages/Dashboard/index.js";
import { Context } from "../Context/AuthContext";
//Rotas

import Forms from "../pages/forms/index.js";
import Listar from "../pages/listAtual/index.js";
import View from "../pages/toView/index.js";
import CriarConta from "../pages/criarConta/index.js";
import ChangePass from "../pages/changePass/index.js";
import Alert from "../pages/alert/index.js";
import Cart from "../pages/cart/index.js"
import Real from "../pages/real/index.js"
import ChocolateRosa from "../pages/Product/index.js";
import Ecommerce from "../pages/Ecommerce/index.js";



export default function RoutesAdmin() {

    const { authenticated } = useContext(Context)

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={authenticated ? <Dashboard /> : <Navigate to="/#" />} />
            <Route path='/formulario' element={authenticated ? <Forms/> : <Navigate to="/" />} />
            <Route path='/listar' element={authenticated ? <Listar /> : <Navigate to="/" />} />
            <Route path='/visualizar' element={authenticated ? <View /> : <Navigate to="/" />} />
            <Route path='/mudar-senha' element={ <ChangePass />} />
            <Route path='/criarConta' element={ <CriarConta  />} />
            <Route path='/real' element={ <Real/>} />
            <Route path='/alerta' element={authenticated ? <Alert /> : <Navigate to="/" />} />
            <Route path='/carrinho' element={ <Cart /> }/>
            <Route path='/rosa' element={ <ChocolateRosa/> }/>
            <Route path='/' element={ <Ecommerce/> }/>
        </Routes>
    )
}
