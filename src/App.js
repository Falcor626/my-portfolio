import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Intro from './components/intro/Intro.jsx';
import About from './components/about/About.jsx';
import Works from './components/works/Works.jsx';
import Proskills from './components/proskills/Proskills.jsx';
import Contact from './components/contact/Contact.jsx';

export default function App() {
  return (
    <main className="text-champagne bg-midnight-green">
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Proskills/>
      <Contact/>
    </main>
  );
}
