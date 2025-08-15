import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <header className='container mx-auto'>
           <Hero/>
        </header>
      </div>
    </>
  )
}

export default App
