interface ResumeInfo {
    personalInfo: {
        name: string;
        contact: {
            email: string;
            phone: string;
            address: string;
            linkedIn?: string;
            github?: string;
            portfolio?: string;
        };
        summary: string;
    };
    education: {
        degree: string;
        institution: string;
        startDate: string;
        endDate: string;
        description?: string;
    }[];
    workExperience: {
        jobTitle: string;
        company: string;
        startDate: string;
        endDate: string;
        responsibilities: string[];
    }[];
    skills: string[];
    certifications: {
        title: string;
        issuingOrganization: string;
        issueDate: string;
        expirationDate?: string;
        description?: string;
    }[];
    projects: {
        title: string;
        description: string;
        technologies: string[];
        link?: string;
    }[];
}

const resumeInfo: ResumeInfo = {
    personalInfo: {
        name: "John Doe",
        contact: {
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: "123 Main St, Anytown, USA",
            linkedIn: "https://www.linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
            portfolio: "https://johndoe.com"
        },
        summary: "Experienced web developer with a strong background in designing and building websites, optimizing user experiences, and implementing SEO strategies. Adept at collaborating with cross-functional teams to deliver high-quality digital solutions."
    },
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Anytown University",
            startDate: "September 2015",
            endDate: "June 2019",
            description: "Focused on web development, data structures, and algorithms. Graduated with honors."
        }
    ],
    workExperience: [
        {
            jobTitle: "Senior Web Developer",
            company: "Tech Solutions Inc.",
            startDate: "July 2020",
            endDate: "Present",
            responsibilities: [
                "Lead a team of developers in creating responsive and user-friendly websites.",
                "Collaborate with designers and product managers to implement new features.",
                "Optimize website performance and improve SEO rankings."
            ]
        },
        {
            jobTitle: "Web Developer",
            company: "WebWorks Agency",
            startDate: "July 2019",
            endDate: "June 2020",
            responsibilities: [
                "Developed and maintained client websites.",
                "Implemented new web features and ensured cross-browser compatibility.",
                "Conducted website testing and debugging."
            ]
        }
    ],
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Git",
        "SEO",
        "Responsive Design"
    ],
    certifications: [
        {
            title: "Certified Web Developer",
            issuingOrganization: "Web Developer Institute",
            issueDate: "January 2020",
            description: "Completed a comprehensive web development certification program."
        },
        {
            title: "SEO Specialist",
            issuingOrganization: "SEO Academy",
            issueDate: "March 2021",
            description: "Certified in advanced SEO techniques and strategies."
        }
    ],
    projects: [
        {
            title: "Personal Portfolio Website",
            description: "Designed and developed a personal portfolio website to showcase my projects and skills.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://johndoe.com"
        },
        {
            title: "E-commerce Website",
            description: "Built a fully functional e-commerce website for a local business, including a shopping cart and payment integration.",
            technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
            link: "https://github.com/johndoe/ecommerce-site"
        }
    ]
};

export default resumeInfo;
