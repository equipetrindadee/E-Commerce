import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./pages/login";
import { Dashboard } from "./pages/Dashboard"
import { Listar } from "./pages/listAtual";
import { User } from "./pages/user";
import { CriarConta } from "./pages/criarConta";
import { Forms } from "./pages/forms"
import { View } from "./pages/toView"
import { Alert } from "./pages/alert"
import { AddUser } from "./pages/addUser"
import { ChangePass } from "./pages/changePass"
import { Formulario } from "./pages/formsTeste";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importe o JavaScript do Bootstrap
import { AuthProvider } from "./Context/AuthContext";
import RoutesAdmin from "./routes/routesAdmin";
import Real from "./pages/real";

// import Visualizar from "./pages/toViewTeste";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <RoutesAdmin />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
