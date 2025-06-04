import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import {Experience} from './pages/Experience'
import {Projects} from './pages/Projects'
import {Contact} from './pages/Contact'
import {Skills} from './components/Skills'

function App() {
  

  return (
    <>
        <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
          
      </Routes>

    </>
  )
}

export default App
