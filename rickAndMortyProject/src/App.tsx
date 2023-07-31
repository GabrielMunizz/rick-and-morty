import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import CharacterPage from './components/CharacterPage'
import NotFound from './components/NotFound'

import './App.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/home/character/:id' element={ <CharacterPage /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
