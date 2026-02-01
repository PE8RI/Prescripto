import React from 'react'
import Banner from '../componets/Banner'
import Header from '../componets/Header'
import SpecialityMenu from '../componets/SpecialityMenu'
import TopDoctors from '../componets/TopDoctors'

const Home = () => {
  return (
    <div>
       <Header/>
       <SpecialityMenu/>
       <TopDoctors/>
       <Banner/>
        
    </div>
  )
}

export default Home
