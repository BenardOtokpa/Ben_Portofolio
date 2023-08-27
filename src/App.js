import Home from './components/Home/index'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import About from './components/About/index'
import Contact from './components/Contact'

import Portfolio from './components/Portfolio'
import SkillsNServices from './components/Skills&Services'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsNServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
