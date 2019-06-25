import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';
import {AppContainer} from 'react-hot-loader';

const store = configureStore(/* provide initial state if any */)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

serviceWorker.unregister();

render ()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}
