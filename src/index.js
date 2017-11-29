import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './style/index.css'
import App from './view/App'
import registerServiceWorker from './registerServiceWorker'

import reducersTodos from './reducers/todos.js'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// function logger({ getState }) {
//   return (next) => {
//     action => {
//       console.log('will dispatch', action)
//       let returnValue = next(action)
//       console.log('state after dispatch', getState())
//       return returnValue
//     }
//   }
// }
let store = createStoreWithMiddleware(reducersTodos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
