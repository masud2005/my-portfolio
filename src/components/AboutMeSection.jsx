import React from 'react';
import { FaBriefcase, FaCode, FaProjectDiagram } from 'react-icons/fa';
import myPhoto from '../assets/my-profile.jpeg'
import masud from '../assets/Masud.jpg'

const AboutMeSection = () => {
    return (
        <section className="text-white py-16">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold">Get To Know</h2>
                    <h3 className="text-2xl mt-2">About Me</h3>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left Content (Image) */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
                        <img 
                            // src={myPhoto} 
                            // src="https://i.ibb.co.com/1tWJDkB3/1736586255110.jpg"
                            // src="https://i.ibb.co.com/MxnZ9hPQ/1736586731255.jpg"
                            // src="https://i.ibb.co.com/fGQrz39V/1736586255110-removebg-preview.png"
                            src={masud}
                            alt="Profile" 
                            className="w-[80%] sm:w-[60%] md:w-[50%] md:h-[400px] lg:w-full xl:h-[450px] 2xl:h-[550px] rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Content (Info) */}
                    <div className="w-full lg:w-2/3 lg:pl-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Experience Card */}
                            <div className="bg-[#041c50] hover:bg-transparent border-transparent hover:border hover:border-blue-700 p-4 rounded-lg text-center transition">
                                <FaBriefcase className="text-3xl mx-auto mb-2" />
                                <h4 className="font-semibold">Experience</h4>
                                <p>1+ Years Home Working</p>
                            </div>
                            {/* Course Card */}
                            <div className="bg-[#041c50] hover:bg-transparent border-transparent hover:border hover:border-blue-700 p-4 rounded-lg text-center transition">
                                <FaCode className="text-3xl mx-auto mb-2" />
                                <h4 className="font-semibold">Course</h4>
                                <p>Programming-Hero</p>
                            </div>
                            {/* Projects Card */}
                            <div className="bg-[#041c50] hover:bg-transparent border-transparent hover:border hover:border-blue-700 p-4 rounded-lg text-center transition">
                                <FaProjectDiagram className="text-3xl mx-auto mb-2" />
                                <h4 className="font-semibold">Projects</h4>
                                <p>45+ Projects Completed</p>
                            </div>
                        </div>
                        <p className="mt-6">
                            My name is Masud Rana. I am from Dinajpur, Bangladesh. 
                            I am currently pursuing my studies at Dinajpur Polytechnic Institute, 
                            working towards a Diploma in Computer Science and Engineering. 
                            I got involved in coding when I joined my diploma program, and coding has become a passion for me ever since.
                        </p>
                        <p className="mt-4">
                            <strong>Expected Passing Year:</strong> 2025 <br />
                            <strong>CGPA:</strong> ---
                        </p>
                        <a 
                            href="https://github.com/masud2005" 
                            target="_blank"
                            className="mt-6 inline-block bg-transparent border border-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
                        >
                            READ MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
