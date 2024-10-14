import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Scroll from '../helpers/Scroll';

const DefaultLayout = ({children}) => {
  return (
    <div> 
      <Scroll/>
      <Header/>
        <div>
            {children}
        </div>
      <Footer/>
    </div>
  )
}

export default DefaultLayout
