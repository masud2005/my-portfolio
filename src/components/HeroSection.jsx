import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import MERN1 from '../assets/MERN1.png';

const HeroSection = () => {
    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className=" text-white"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-2 gap-5 mt-10 lg:mt-0">
                {/* Left Content */}
                <div className="flex flex-col items-start lg:items-start mb-6 lg:mb-0">
                    <h2 className="text-3xl lg:text-4xl font-medium text-gray-300">Hello, I am</h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-white">
                        <span>Masud Rana
                        </span>
                    </h1>
                    <h2 className="text-3xl font-medium bg-gradient-to-r from-teal-400  to-pink-500 text-transparent bg-clip-text mt-2">
                        <Typewriter
                            words={['Frontend Developer', 'React.js & JavaScript Specialist']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h2>
                    <p className="mt-4 text-gray-400 text-base">
                        A passionate developer who loves creating beautiful and functional web applications.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href='https://drive.google.com/file/d/1uGs-zyaDkmHX_tlXrrtQ3snn0UJVMQb6/view?usp=sharing' // Replace with the path to your resume
                            target='_blank'
                            download
                            className="border duration-300 border-blue-600 hover:bg-blue-900 text-white md:text-lg py-2 px-6 rounded-lg font-semibold shadow-md transition"
                        >
                            Get Resume
                        </a>
                        <button
                            onClick={() => handleScrollToSection('projects')} // Replace 'projects' with your section ID
                            className="bg-blue-900 md:text-lg hover:bg-transparent hover:border hover:border-blue-600 duration-300 text-white py-2 px-6 rounded-lg font-semibold shadow-md transition"
                        >
                            Projects
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/masud2005" // Replace with your GitHub link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-teal-500 transition"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/masud-rana-955788318/" // Replace with your LinkedIn link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-teal-500 transition"
                        >
                            <FaLinkedin size={32} />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100065806763087" // Replace with your Facebook link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-teal-500 transition"
                        >
                            <FaFacebook size={32} />
                        </a>
                    </div>
                </div>

                {/* Right Content (Profile Image) */}
                <div className="flex justify-center items-center">
                    <img
                        // src="https://i.ibb.co.com/1tWJDkB3/1736586255110.jpg" // Replace with your professional image URL
                        // src='https://i.ibb.co.com/CsQbyD2M/Mern-removebg-preview.png'
                        src={MERN1}
                        // src={profile}
                        alt="Profile"
                        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px]  xl:h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
