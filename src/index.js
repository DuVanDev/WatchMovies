import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './redux/reducers';
import reduxThunk from 'redux-thunk'

// Import Router
import { BrowserRouter } from 'react-router-dom';

/* Import Middleware */
import  apiMiddleware from './middleware/api'

const store = createStore(
  reducers,
  {},
  applyMiddleware( reduxThunk , apiMiddleware )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
