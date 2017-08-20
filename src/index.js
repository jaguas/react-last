import React from 'react';
import {render} from 'react-dom';
import jQuery from 'jquery';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'


jQuery(function(){

    render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), document.getElementById('root'));

    registerServiceWorker();

});


