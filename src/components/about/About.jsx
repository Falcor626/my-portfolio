import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '20px' }}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className='text-center font-semibold text-8xl'>About Me</h1>
          <p className='blurb'>
            I'm currently a 3rd year student that is looking to get a Bachelor's Degree in
            Computer Science at Cal State Fullerton. So far I've learned several programming languages related to
            software development such as C++ on Campus and have dabbled in self-teaching myself using Udemy courses. I've been
            interested in getting into both Web Development and managing a Database so far.
          </p>
        </div>
      </div>
    </section>
  );
}