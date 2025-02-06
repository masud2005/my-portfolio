import React, { useEffect, useState } from "react";

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 80 },
            { name: "Tailwind", level: 90 },
            { name: "Bootstrap", level: 80 },
            { name: "JavaScript", level: 70 },
            { name: "React JS", level: 80 },
            { name: "Next JS", level: 30 },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node JS", level: 50 },
            { name: "Express JS", level: 75 },
            { name: "MongoDB", level: 65 },
            { name: "Firebase", level: 70 },
        ],
    },
];

const toolsData = [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Surge", logo: "https://static.thenounproject.com/png/1049221-200.png" },
    { name: "Netlify", logo: "https://skillicons.dev/icons?i=netlify" },
    { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel" },
    { name: "NPM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },

    // ✅ SweetAlert2 & Toastify Added
    { name: "SweetAlert2", logo: "https://sweetalert2.github.io/images/SweetAlert2.png" },
    { name: "Toastify", logo: "https://user-images.githubusercontent.com/5574267/54994574-df4c1380-4fc4-11e9-8509-1d3aedbc7b96.png" }
];


const SkillBar = ({ name, level }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setProgress(level), 500);
    }, [level]);

    const getColor = (level) => {
        if (level > 80) return "#34d399";
        if (level > 60) return "#60a5fa";
        if (level > 40) return "#facc15";
        return "#f87171";
    };

    return (
        <div className="mb-4 group relative">
            <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: getColor(level),
                    }}
                ></div>
            </div>

            {/* Tooltip on hover */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 text-white bg-[#415ddbf6] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name} - {level}%
            </div>
        </div>
    );
};

const SkillsSection = () => {
    return (
        <section className="text-white py-16 -mt-10" id="skills">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-semibold mb-12">My Skills</h2>

                {/* Skills & Tools in One Row */}
                <div className="lg:flex flex-wrap md:flex-nowrap ">
                    {/* Skills Section */}
                    <div className="w-full lg:w-2/3 flex flex-wrap">
                        {skillsData.map((category, index) => (
                            <div key={index} className="w-full md:w-1/2 px-4">
                                <h3 className="text-2xl font-medium mb-4 text-blue-400">
                                    {category.category}
                                </h3>
                                {category.skills.map((skill, idx) => (
                                    <SkillBar key={idx} name={skill.name} level={skill.level} />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Tools Section */}
                    <div className="w-full lg:w-1/3 px-4">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-6">Tools</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {toolsData.map((tool, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center shadow-lg hover:shadow-xl transition">
                                    <img src={tool.logo} alt={tool.name} className="w-12 h-12 mb-2" />
                                    <span className="text-white text-sm font-medium">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
