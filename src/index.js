import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './store/store'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
