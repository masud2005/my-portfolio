import React from 'react';

const skillsData = [
    { category: 'Frontend', skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind', level: 90 },
        { name: 'JavaScript', level: 70 },
    ]},
    { category: 'Backend', skills: [
        { name: 'React JS', level: 80 },
        { name: 'Node JS', level: 50 },
        { name: 'MongoDB', level: 65 },
        { name: 'Express JS', level: 75 },
        { name: 'Next JS', level: 30 },
    ]},
];

const SkillBar = ({ name, level }) => {
    const getColor = (level) => {
        if (level > 80) return '#34d399'; // Very Good - Green
        if (level > 60) return '#60a5fa'; // Good - Blue
        if (level > 40) return '#facc15'; // Medium - Yellow
        return '#f87171'; // Low - Red
    };

    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
                <div 
                    className="h-3 rounded-full"
                    style={{ 
                        width: `${level}%`, 
                        backgroundColor: getColor(level),
                    }}
                ></div>
            </div>
        </div>
    );
};

const SkillsSection = () => {
    return (
        <section className="text-white py-16 -mt-10" id="skills">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-semibold mb-12">Skills Bar</h2>
                <div className="flex flex-wrap">
                    {skillsData.map((category, index) => (
                        <div key={index} className="w-full md:w-1/2 px-4">
                            {category.skills.map((skill, idx) => (
                                <SkillBar key={idx} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
