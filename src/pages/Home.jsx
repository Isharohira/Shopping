import React from 'react'
import TopStrip from '../components/TopStrip'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import GridSection from '../components/GridSection'
import Features from '../components/Features'
import FitGuide from '../components/FitGuide'
import EmailSubscription from '../components/EmailSubscription'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div className='sticky top-0 z-10'>
      <TopStrip/>
      <Navbar/>
      </div>

<Hero/>
<GridSection/>
<Banner/>
<FitGuide/>

<Features/>
<EmailSubscription/>
<Footer/>


    </div>
    
  )
}



export default Home