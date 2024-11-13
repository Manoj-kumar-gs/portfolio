import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    ecommerce,
    crud,
    threejs,
    expressjs,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: expressjs ,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  

  
  const projects = [
    {
      "name": "E-commerce Platform",
      "description": "A feature-rich e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for a seamless online shopping experience. Users can browse a wide variety of products, add them to their cart, manage their accounts, and securely complete purchases.",
      "tags": [
        {
          name: "mongodb",
          color: "green-text-gradient" 
        },
        {
          name: "node.js",
          color: "blue-text-gradient"  
        },
        {
          name: "express",
          color: "blue-text-gradient"  
        },
        {
          name: "react",
          color: "pink-text-gradient"
        },
      ],
      image: ecommerce,  
      source_code_link: "https://github.com/Manoj-kumar-gs/E-commerce-project",
    },
    {
      "name": "Task Management App",
      "description": "A user-friendly task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to help individuals and teams organize their workflow. Users can create, prioritize, track, and collaborate on tasks, boosting productivity and achieving goals effectively.",
      "tags": [
        {
          name: "mongodb",
          color: "green-text-gradient" 
        },
        {
          name: "node.js",
          color: "blue-text-gradient"  
        },
        {
          name: "express",
          color: "blue-text-gradient"  
        },
        {
          name: "react",
          color: "pink-text-gradient"
        },
      ],
      image: crud,
      source_code_link: "https://github.com/Manoj-kumar-gs/MERN",
    },
  ];
  
  export { services, technologies, projects };