import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Cheese from './components/cheese';
import store from './store';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  
  <Provider store={store}>
    <Cheese />
  </Provider>, 

  document.getElementById('root')
);


registerServiceWorker();
