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
    <Feature/>
    <Organise/>
    <Newsletter/>
     <Partners/>
     <Testimoni/>
     <Pricepage/>
     <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;
