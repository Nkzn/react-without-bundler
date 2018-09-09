import App from './container.js'
import reducer from './module.js'

const store = Redux.createStore(reducer)
const Root = () => {
  return h(ReactRedux.Provider, {store: store}, h(App))
}
const root = document.getElementById('root')
ReactDOM.render(h(Root), root)
