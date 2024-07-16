import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Navbar from './components/Navbar'
import TopStrip from './components/TopStrip'
import EmailSubscription from './components/EmailSubscription'
import Footer from './components/Footer'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Cart from './pages/Cart'


function App() {
  return (
    <div>
       <Navbar/>
       <TopStrip/>
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
      <Route path='/men' element={<Men />}>

      </Route>
      <Route path='/women' element={<Women />}>

      </Route>

      <Route path='/kids' element={<Kids />}>

</Route>
<Route path='/cart' element={<Cart />}>

</Route>


    
      </Routes>
      <EmailSubscription/>
  <Footer/>
      
      
    
    
     
    </div>
  )
}

export default App
