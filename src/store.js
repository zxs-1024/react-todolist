import { init } from '@rematch/core'
import * as models from './models/todo'

const store = init({ models })

export default store
