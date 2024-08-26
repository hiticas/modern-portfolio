export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Freelance React Js Developer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modern UI/UX Website",
    des: "Explore the Possibilities of AI Chatting with BrainwaveCurve Website",
    img: "/web1.jpg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://modern-ui-ux-website-mike.vercel.app/",
  },
  {
    id: 2,
    title: "Mental Health For Romania",
    des: "Wordpress website",
    img: "/mental.jpg",
    iconLists: [],
    link: "https://mentalhealthforromania.org/",
  },
  {
    id: 3,
    title: "Overpass",
    des: "Developed and maintained a jobs platform, Overpass, specializing in remote work using React.js and SCSS.",
    img: "/overpass_website.jpg",
    iconLists: [],
    // iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://www.overpass.com/",
  },
  {
    id: 4,
    title: "Modern Minimalist Portfolio",
    des: "A Modern Next.js App",
    img: "/my.jpg",
    iconLists: ["/nextjs.jpeg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/hiticas/modern-portfolio",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Mike was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mike's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mike is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Mike was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mike's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mike is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Mike was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mike's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mike is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Mike was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mike's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mike is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Mike was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mike's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mike is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const companies = [
  {
    id: 1,
    name: "React.js",
    img: "/react.png",
  },
  {
    id: 2,
    name: "TypeScript",
    img: "/typescript.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "/javascript.svg",
  },
  {
    id: 4,
    name: "Next.js",
    img: "/next.jpg",
  },
  {
    id: 5,
    name: "Wordpress",
    img: "/wordpress.svg",
  },
  {
    id: 6,
    name: "TailwindCSS",
    img: "/tailwindcss.svg",
  },
  {
    id: 7,
    name: "HTML5",
    img: "/html-5.svg",
  },
  {
    id: 8,
    name: "CSS3",
    img: "/css3.svg",
  },
  {
    id: 9,
    name: "SCSS",
    img: "/scss.svg",
  },
  {
    id: 10,
    name: "GitHub",
    img: "/github.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Dev Projects",
    desc: "Developed and deployed projects on Upwork and LinkedIn using React.js, TypeScript and WordPress.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    company: "Freelance",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Develop a high-performance web application for the travel industry using React.js, TypeScript, and Redux. Implement an efficient search functionality and integrated flight offers and journey displays.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    icon: "/travelport.png",
    company: "TRAVELPORT",
  },
  {
    id: 3,
    title: "Wordpress Developer",
    desc: "Developed dynamic and responsive WordPress websites part-time. Build engaging Wordpress websites.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    company: "PEERCONCEPT",
    icon: "/peer.png",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained a jobs platform, Overpass, specializing in remote work using React.js and SCSS. Jobs posting for clients, boosting user engagement. Optimized job search for contractors, increasing job matches.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    icon: "/overpass.png",
    company: "OVERPASS",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hiticas",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mihai-hiticas/",
  },
];
