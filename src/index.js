import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style/index.css'
import App from './view/App'
import registerServiceWorker from './registerServiceWorker'

import reducersTodos from './reducers/todos.js'
let store = createStore(reducersTodos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
