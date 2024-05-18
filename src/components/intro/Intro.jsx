import React from 'react';
import './Intro.css';
import headShot from '../Assets/headshot.jpg';

export default function Intro() {
  return (
    <section id="intro" style={{ padding: '20px' }}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className='hello'>
            Hi, My name is Dean Martin Solideo.
          </h1>
          <p className='blurb'>
            I'm currently a 3rd year student that is looking to get a Bachelor's Degree in
            Computer Science at Cal State Fullerton. 
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '16px'}}>
            <a href="#Works" className='worksBtn'> Check out my works</a>
            <a href="#Contact" className='contactBtn'> Contact Info</a>
          </div>
        </div>
        <div style={{ maxWidth: '50%' }}>
          <img
            className="circularBorder"
            alt="Dean"
            src={headShot}
          />
        </div>
      </div>
    </section>
  );
}