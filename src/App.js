import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { routes } from './router/config';
import { RouterView } from './router/Routerview'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers'

let store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterView routes={routes} />
      </Router>
    </Provider>
  );
}

export default App;
