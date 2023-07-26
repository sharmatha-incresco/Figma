import React from 'react';
import Header from './container/header';
import Feature from './container/feature';
import Organise from './container/organise';
import Newsletter from './container/newsletter';
 import Partners from './container/partners';
 import Testimoni from './container/testimonial';
 import Pricepage from './container/pricepage';
 import Contacts from './container/contacts';
 import Footer from './container/footer';
const App = () => {
  return (
    <div>
    <Header/>
    <div className='md:px-5'>
    <Feature/>
    </div>
    <div className='md:px-5'>
    <Organise/>
    </div>
    <div className='md:px-5'>
    <Newsletter/>
    </div>
     <div className='md:px-5'>
     <Partners/>
     </div>
     <div className='md:px-5'>
     <Testimoni/>
     </div>
      <div className='md:px-5'>
     <Pricepage/>
     </div>
     <div className='md:px-20'>
     <Contacts/>
     </div>
      <Footer/>
    </div>
  );
};

export default App;
