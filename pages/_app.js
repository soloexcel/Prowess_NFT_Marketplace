import React from 'react'
import '../styles/globals.css'
import { Home } from '../components/components'

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Home />
    <Component {...pageProps} />
    {/* <Footer /> */}
  </div>
);


export default MyApp
