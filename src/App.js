import React from 'react';
import Header from './components/header';
import Feature from './components/feature';
import Organise from './components/organise';
import Newsletter from './components/newsletter';
 import Partners from './components/partners';
 import Testimoni from './components/testimonial';
 import Pricepage from './components/pricepage';
 import Contacts from './components/contacts';
 import Footer from './components/footer';
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
