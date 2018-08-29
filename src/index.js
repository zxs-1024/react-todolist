import dva from 'dva'
import './index.css'

const data = localStorage.getItem('todos')
const todos = data ? JSON.parse(data) : []

// 1. Initialize
const app = dva({
  initialState: { todo: { todos, isAllChecked: todos.every(todo => todo.isDone) } },
  onStateChange: ({ todo: { todos } }) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/todo').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
