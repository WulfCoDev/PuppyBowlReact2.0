import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div>
      <BrowserRouter>
      <NavBar />
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        <Route path='/newplayerform' element={<NewPlayerForm />} />
    </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
