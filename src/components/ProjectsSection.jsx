import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
    
// Sample project data
const projectData = [
    {
        id: 1,
        name: 'Query Hive',
        description: 'QueryHive is a web application designed to facilitate the submission, management, and recommendation of user-generated queries related to various products. Users can log in, create, update, and delete their queries, as well as recommend queries submitted by others. The app also features Google-based authentication for a seamless user experience.',
        image: 'https://i.ibb.co.com/rxkyJ2G/Screenshot-1.png',
        liveLink: 'https://ask-and-recommend.web.app/',
        clientLink: 'https://github.com/masud2005/query-hive-client',
        serverLink: 'https://github.com/masud2005/query-hive-server',
        technologiesUsed: {
            frontend: [
                'React: A JavaScript library for building user interfaces.',
                'React Router Dom: For navigation and routing.',
                'Axios: For API communication.',
                'Framer Motion: Animation library for enhancing UI transitions.',
                'Tailwind CSS & DaisyUI: Styling framework for fast and responsive design.',
                'SweetAlert2: For customizable alerts.'
            ],
            backend: [
                'Node.js: JavaScript runtime for the server-side application.',
                'Express.js: Web application framework.',
                'MongoDB: NoSQL database for data storage.',
                'JWT: For secure token-based authentication.',
                'Cookie Parser: Middleware to parse cookies.'
            ],
            firebase: [
                'Authentication with Email/password and Google-based authentication.'
            ]
        }
    },
    {
        id: 2,
        name: 'Job Portal',
        description: 'Our Job Portal website is a user-friendly platform designed to bridge the gap between employers and job seekers. It enables companies to post job openings and manage applications while providing job seekers with a streamlined process for browsing, applying for, and managing job opportunities.',
        image: 'https://i.ibb.co.com/sHpW1jD/Screenshot-2.png',
        liveLink: 'https://job-portal-cc199.web.app/',
        clientLink: 'https://github.com/masud2005/job-portal-client',
        serverLink: 'https://github.com/masud2005/job-portal-server',
        technologiesUsed: {
            frontend: [
                'React: A JavaScript library for building user interfaces.',
                'React Router Dom: For navigation and routing.',
                'Axios: For API communication.',
                'Framer Motion: Animation library for enhancing UI transitions.',
                'Tailwind CSS & DaisyUI: Styling framework for fast and responsive design.',
                'SweetAlert2: For customizable alerts.'
            ],
            backend: [
                'Node.js: JavaScript runtime for the server-side application.',
                'Express.js: Web application framework.',
                'MongoDB: NoSQL database for data storage.',
                'JWT: For secure token-based authentication.',
                'Cookie Parser: Middleware to parse cookies.'
            ],
            firebase: [
                'Authentication with Email/password and Google-based authentication.'
            ]
        }
    },
    {
        id: 3,
        name: 'Sports Equipment Management System',
        description: 'The Sports Equipment Management System is a full-stack web application designed to facilitate managing, listing, and updating sports equipment details. This application enables users to add, view, update, and delete equipment, along with user authentication for secure access.',
        image: 'https://i.ibb.co.com/L1v9QsK/Screenshot-3.png',
        liveLink: 'https://sports-equipment-store-c035a.web.app/',
        clientLink: 'https://github.com/masud2005/A10-sports-equipment-store-client',
        serverLink: 'https://github.com/masud2005/A10-sports-equipment-store-server',
        details: 'Detailed description of the Dance School project, challenges faced, improvements planned, etc.',
        technologiesUsed: {
            frontend: [
                'React: A JavaScript library for building user interfaces.',
                'React Router Dom: For navigation and routing.',
                'Axios: For API communication.',
                'Framer Motion: Animation library for enhancing UI transitions.',
                'Tailwind CSS & DaisyUI: Styling framework for fast and responsive design.',
                'SweetAlert2: For customizable alerts.'
            ],
            backend: [
                'Node.js: JavaScript runtime for the server-side application.',
                'Express.js: Web application framework.',
                'MongoDB: NoSQL database for data storage.',
                'JWT: For secure token-based authentication.',
                'Cookie Parser: Middleware to parse cookies.'
            ],
            firebase: [
                'Authentication with Email/password and Google-based authentication.'
            ]
        }
    }
];


const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewDetails = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="py-16 -mt-10 text-white" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-semibold ">My Projects</h2>
                <p className='text-center text-lg font-medium mb-12 pt-4'>Design & Development</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
                    ))}
                </div>

                {selectedProject &&
                    <ProjectDetailsModal project={selectedProject} onClose={handleCloseModal} />
                }
            </div>
        </section>
    );
};

export default ProjectsSection;
