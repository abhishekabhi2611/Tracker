import './App.css'

import { BrowserRouter, Route } from 'react-router-dom'

import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </main>
    </BrowserRouter>
  )
}

export default App
