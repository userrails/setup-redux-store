import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

history.listen(() => {
  console.log('OK');
});

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  return store
}
