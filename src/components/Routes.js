import { compile } from 'path-to-regexp';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GetPosts from './GetPosts';
import About from './About';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/posts' component={ GetPosts } />
        </Switch>
    </main>
)

export default Routes;
