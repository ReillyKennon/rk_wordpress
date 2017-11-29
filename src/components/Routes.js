import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Blog from './blog/Blog';
import About from './About';
import ContactForm from './ContactForm';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/blog' component={ Blog } />
            <Route exact path='/contact' component={ ContactForm } />
        </Switch>
    </main>
)

export default Routes;
