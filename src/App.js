import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import EstudianteDetalle from './EstudianteDetalle';
import MainMenu from './MainMenu';


const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/Jugadores" exact component={ Contenedor } />
      <Route path="/Jugador/:id" exact component={ EstudianteDetalle } />
      <Route path="/contacto" exact  component={ Contacto } />

      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)

export default App;