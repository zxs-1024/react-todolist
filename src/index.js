import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddlewares } from 'redux'
import { Provider } from 'react-redux'
import './style/index.css'
import App from './view/App'
import registerServiceWorker from './registerServiceWorker'
import createSagaMiddleware from 'redux-saga'

import reducersTodos from './reducers/todos.js'
let store = createStore(reducersTodos)

// const store = createStore(
//   reducer,
//   applyMiddleware(createSagaMiddleware(reducersTodos))
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
