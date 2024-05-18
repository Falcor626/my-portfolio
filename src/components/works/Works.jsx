import React from 'react';
import imgttt from '../Assets/tictactoe.png';
import imgQ from '../Assets/qCake.png';

export default function Works() {
  return (
    <section id="Works" style={{ padding: '20px' }}>
        <div className="container mx-auto py-8">
            <h1 className="text-8xl font-semibold mb-6 text-center">My Works</h1>
            <div className="bg-ash-grey shadow-md rounded-md p-6 mb-4 md:order-2 md:flex">
                <div className="md:w-1/2">
                    <img
                        src={imgttt}
                        alt = "Tic-Tac-Toe" 
                        class="mt-4 w-full rounded-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-20">
                    <h2 className="text-8xl font-semibold mb-2">Tic-Tac-Toe</h2>
                    <ul className="text-4xl list-disc pl-4">
                        <li>This website demos a simple game of Tic-Tac-Toe that you can play.</li>
                        <li>This is made out of React.</li>
                        <li>
                            <a href="https://github.com/Falcor626/tictactoe.git" className="underline hover:text-blue-700">Link to the Tic-Tac-Toe Project</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-bole shadow-md rounded-md p-6 flex md:flex-row">
                <div style={{ maxWidth: '40%' }}>
                    <img
                        src={imgQ}
                        alt="Quiz App"
                        className="w-full rounded-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-4">
                    <h2 className="font-semibold mb-2 text-8xl">Quiz App</h2>
                    <ul className="text-4xl list-disc pl-4">
                        <li>This website was a school group project that demos a Quiz App which contains 3 types of quizzes that you can try on.</li>
                        <li>This website uses HTML, CSS, and JavaScript.</li>
                        <li>
                            <a href="chooseQuiz.html" className="underline hover:text-blue-700">Link to the Quiz App Project</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}