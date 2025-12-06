import React from 'react';
import Header from '../src/components/header';
import Shero from '../src/components/shero';
import Problem from '../src/components/problem';
import Solution from '../src/components/solution';
import About from './components/about';

const App = () => {
  return (
    <>
      <Header/>
      <Shero />
      <About />
      <Problem />
      <Solution />
    </>
  )
};

export default App;