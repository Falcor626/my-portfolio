import React from 'react';

export default function Contact() {
    return (
      <section id="Contact" style={{ padding: '30px' }}>
        <h1 className='text-center font-semibold text-8xl'>Contact Information</h1>
        <div className="container bg-bole mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <ul className="text-4xl list-disc pl-4">
                <li>
                <a href="https://github.com/Falcor626" className="underline hover:text-blue-700"> Github </a>
                </li>
                <li>Student Email Address: dsolideo@student.fullerton.edu</li>
                <li>Email Address: Solideothree@aol.com</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }