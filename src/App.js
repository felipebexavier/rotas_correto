import React from 'react';
import './App.css';
import IndexMenu from './componentes/Index/IndexMenu.jsx';
import SecondMenu from './componentes/SecondTierPages/SecondTierMenu.jsx';
import Index from './componentes/Index/Index.jsx'
import Cardiovascular from './componentes/FirstTierPages/cardiovascular.jsx';
import Quadril from './componentes/SecondTierPages/quadril.jsx'
import Muscular from './componentes/FirstTierPages/muscular.jsx';
import Esqueletico from './componentes/FirstTierPages/esqueletico.jsx';
import Respiratorio from './componentes/FirstTierPages/respiratorio.jsx';
import Articular from './componentes/SecondTierPages/Record.jsx';
import Mao from './componentes/SecondTierPages/mao.jsx';
import Coluna from './componentes/SecondTierPages/Coluna.jsx';
import Ombro from './componentes/SecondTierPages/ombro.jsx';
import Joelho from './componentes/SecondTierPages/joelho.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path="/">
                <IndexMenu/>
                <Index/>
           </Route>
           <Route exact path="/cardiovascular">
                <IndexMenu/>
                <Cardiovascular/>
           </Route>
           <Route exact path="/muscular">
                <IndexMenu/>
                <Muscular/>
           </Route>
           <Route exact path="/esqueletico">
                <IndexMenu/>
                <Esqueletico/>
           </Route>
           <Route exact path="/respiratorio">
                <IndexMenu/>
                <Respiratorio/>
           </Route>
           <Route exact path="/articular">
                <SecondMenu/>
                <Articular/>
           </Route>
           <Route exact path="/articular/coluna">
                <SecondMenu/>
                <Coluna/>
           </Route>
           <Route exact path="/articular/joelho">
                <SecondMenu/>
                <Joelho/>
           </Route>
           <Route exact path="/articular/mao">
                <SecondMenu/>
                <Mao/>
           </Route>
           <Route exact path="/articular/ombro">
                <SecondMenu/>
                <Ombro/>
           </Route>
           <Route exact path="/articular/quadril">
               <SecondMenu/>
                <Quadril/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
