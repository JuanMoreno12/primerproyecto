import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';
import Header from './Header';
import PersonajeDetalle from './PersonajeDetalle';
import Menu from './Menu';


const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/jugadores" exact component={ Contenedor } />
      <Route path="/jugadores/:id" exact component={ PersonajeDetalle } />
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)
export default App;
