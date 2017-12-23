// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';


// Static Routes (secured against manual injection)
import { 
        BrowserRouter as Router,
        Route,
        Link
        } from 'react-router-dom';


// Redux
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';

// Global css
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
