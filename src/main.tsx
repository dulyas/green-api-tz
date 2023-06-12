
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { createContext } from 'react'
import Store from './store/store'

const store = new Store()

interface State {
  store: Store
}

export const Context = createContext<State>({
  store
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Context.Provider value={{
    store
  }}>
      <App />
  </Context.Provider>
)
