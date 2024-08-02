interface Service {
    num: string;
    title: string;
    description: string;
    href: string;
}

const services: Service[] = [
    {
        num: "01",
        title: "Web Developer",
        description: "Designs and builds websites, ensuring they are functional, user-friendly, and visually appealing.",
        href: ""
    },
    {
        num: "02",
        title: "Fullstack Developer",
        description: "Handles both the front-end and back-end development of web applications, ensuring seamless integration and performance.",
        href: ""
    },
    {
        num: "03",
        title: "SEO Specialist",
        description: "Optimizes websites to improve their search engine rankings, driving more organic traffic and enhancing online visibility.",
        href: ""
    },
    {
        num: "04",
        title: "Progressive Web Apps",
        description: "Develops web applications that load like regular web pages but offer user functionality such as working offline, push notifications, and device hardware access.",
        href: ""
    },
    {
        num: "05",
        title: "Database Integration",
        description: "Integrates databases into web applications to store, manage, and retrieve data efficiently, ensuring data integrity and security.",
        href: ""
    },
    {
        num: "06",
        title: "Mobile App Developer",
        description: "Creates applications for mobile devices, ensuring they are functional, user-friendly, and optimized for performance across various mobile platforms.",
        href: ""
    }
]

export default services
