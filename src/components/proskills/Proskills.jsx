import React from 'react';
import imgHTML from '../Assets/html5.png';
import imgCSS from '../Assets/css3.png';
import imgJS from '../Assets/jScript.png';
import imgReact from '../Assets/react.png';
import imgCPP from '../Assets/cpp.png';
import imgJava from '../Assets/java.png';

export default function ProSkills() {
    return(
        <section id="Proskills" style={{ padding: '20px' }}>
            <div className="container mx-auto py-8">
                <div className="text-center font-semibold mb-6 text-8xl">
                    <h1>Skills</h1>
                </div>
                
                <div className="bg-vermillion shadow-md rounded-md p-6 mb-4 md:order-2">
                    <div className="grid grid-cols-3 gap-2">
                    <div className="flex justify-center">
                            <img
                                src={imgHTML}
                                alt = "HTML5" 
                                class="h-24 w-24 rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={imgCSS}
                                alt = "CSS3" 
                                class="h-15 w-24 rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={imgJS}
                                alt = "JavaScript" 
                                class="h-24 w-24 rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={imgReact}
                                alt = "React" 
                                class="h-24 w-24 rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={imgCPP}
                                alt = "C++" 
                                class="w-24 rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={imgJava}
                                alt = "Java" 
                                class="w-24 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}