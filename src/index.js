import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

// Importing Views
import Introduction from './Views/Welcome';
import Home from './Views/Home';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Introduction}/>
            <Route exact path='/home' component={Home}/>
            <Route component={()=> (<h1>Nothing here!</h1>)}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
