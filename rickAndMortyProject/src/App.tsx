import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import CharacterPage from './components/CharacterPage'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import Search from './components/Search'
import MemoryGame from './components/MemoryGame/MemoryGame'

import './App.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path='/home' element={ <Home /> } />
          <Route path='/home/character/:id' element={ <CharacterPage /> } />
          <Route path='/home/search/:name' element={ <Search /> } />
          <Route path='/home/memoryGame' element={ <MemoryGame /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
