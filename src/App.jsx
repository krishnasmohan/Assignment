import './App.css'
import Home from './components/body/home'
import Detail from './components/body/lastpage/Detail'
import Product from './components/body/Product'
import Navbar from './components/header/Navbar'

function App() {

  return (
    <>
      <div className='cont'>
        <Navbar />
        <Home />
      </div>
      <div>
        <Product />
      </div>
      <Detail />
    </>
  )
}

export default App
