import React from 'react';
import Header from '../src/components/header';
import Shero from '../src/components/shero';
import Problem from '../src/components/problem';
import Solution from '../src/components/solution';
import About from './components/about';
import Team from './components/team';
import Mechanism from './components/mechanism';
import Footer from './components/footer';
import Wishlist from './components/waitlist';

const App = () => {
  return (
    <>
      <Header/>
      <Shero />
      <About />
      <Problem />
      <Solution />
      <Team />
      <Mechanism />
      <Wishlist />
      <Footer />
    </>
  )
};

export default App;