interface Service {
    num: string;
    title: string;
    description: string;
    href: string
}

const services: Service[] = [
    {
        num: "01",
        title: "Web Developer",
        description: "Designs and builds websites, ensuring they are functional, user-friendly, and visually appealing.",
        href:""
    },
    {
        num: "02",
        title: "Graphic Designer",
        description: "Creates visual content to communicate messages through digital and print media, including logos, brochures, and advertisements.",
        href:""
    },
    {
        num: "03",
        title: "SEO Specialist",
        description: "Optimizes websites to improve their search engine rankings, driving more organic traffic and enhancing online visibility.",
        href:""
    },
    {
        num: "04",
        title: "Content Writer",
        description: "Produces engaging and relevant written content for websites, blogs, social media, and other digital platforms.",
        href:""
    },
    {
        num: "05",
        title: "Digital Marketing Expert",
        description: "Develops and implements marketing strategies to promote products or services online, utilizing various digital channels.",
        href:""
    }
]

export default services
