import { Platform } from 'react-native'
import {
  createStore,
  applyMiddleware,
  compose  
} from 'redux'

import devtools from 'remote-redux-devtools'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import RootReducer from './reducers'

const middleWare = applyMiddleware(thunk, promise, logger)

const Store = createStore(
  RootReducer,
  compose(
    middleWare,
    devtools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  )
)

export default Store
