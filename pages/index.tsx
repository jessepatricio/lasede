import React from 'react'
import { Element } from 'react-scroll'

import Header from '../src/components/header_footer/Header'
import Featured from '../src/components/featured'
import VenueInfo from '../src/components/venueInfo'
import Highlights from '../src/components/highlights'
import Pricing from '../src/components/pricing'
import Location from '../src/components/location'
import Footer from '../src/components/header_footer/Footer'

// Global CSS is already imported in pages/_app.tsx per Next.js rules
// Removed duplicate import here to avoid build error

const Home: React.FC = () => {
  return (
    <div className="App" style={{ height: '1500px', background: 'cornflowerblue' }}>
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="VenueInformation">
        <VenueInfo />
      </Element>
      <Element name="Highlights">
        <Highlights />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>
      <Element name="Locations">
        <Location />
      </Element>
      <Footer />
    </div>
  )
}

export default Home
