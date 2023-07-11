import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
