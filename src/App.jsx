import './App.css'
import Header from './scenes/header/Header'
import Home from './scenes/home/Home'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


function App() {

  return (
    <>
      <div className='bg-secondary'>
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
