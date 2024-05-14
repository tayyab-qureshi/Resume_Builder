import React from 'react'
import Nav from '../Components/HomeComponents/Nav'
import HomeMaskGroup from '../Components/HomeComponents/HomeMaskGroup'
import HomeUserProfile from '../Components/HomeComponents/HomeUserProfile'
import HomeJobSeeker from '../Components/HomeComponents/HomeJobSeeker'
import HomeEmployer from '../Components/HomeComponents/HomeEmployer'
import HomeContactUs from '../Components/HomeComponents/HomeContactUs'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <HomeMaskGroup/>
      <HomeUserProfile/>
      <HomeJobSeeker/>
      <HomeEmployer/>
      <HomeContactUs/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
