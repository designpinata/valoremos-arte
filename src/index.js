import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss';
import * as serviceWorker from './serviceWorker';

// Importing Views
import Introduction from './Views/Welcome';
import Home from './Views/Home';
import CaraDiablo from './Views/CaraDiablo';
import Cobre from './Views/Cobre';
import Canteria from './Views/Canteria';
import Alfareria from './Views/Alfareria';


ReactDOM.render(
    <BrowserRouter>
        <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition key={location.key} timeout={300} classNames='fade'>
                      <Switch>
                        <Route exact path='/' component={Introduction}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/cara-diablo' component={CaraDiablo}/>
                        <Route exact path='/cobre' component={Cobre}/>
                        <Route exact path='/canteria' component={Canteria}/>
                        <Route exact path='/alfareria' component={Alfareria}/>
                        <Route component={()=> (<h1>Nothing here!</h1>)}/>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
