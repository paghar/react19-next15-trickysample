import { FcReddit } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";



export const siteSettings = {
  name: "",
  description: "",
  author: {
    name: "Fatemeh Paghar",   
    address: "fatemeh.paghar@outlook.com",
  },
  logo: {
    url: "/assets/images/logo.svg",
    alt: "dynamic shopping cart",
    href: "/",
    width: 60,
    height: 30,
  },  
};
  

export const header = {
  title: "Next.js & React Advanced Techniques",
  description: `A smart approach to building diverse projects with Next.js and React involves using advanced techniques to boost performance,
   optimize website speed, manage both simple and complex forms, leverage powerful React features, implement server-side rendering,
   and efficiently handle API routes—all contributing to faster, more scalable, and user-friendly web applications.`,
};
  

export const CardInfo = [
  {
    title:"Mastering useTransition in React:",
    description:"Building a High-Performance Search for 50K Record Case Study",
    svg:<FcVoicePresentation size={60}/>,
    href:"/MassiveSearchFilter"
  },  
  {
    title:"Improving React Performance with useTransition:",
    description:" A Deep Dive into a Theme Switcher Example",
    svg:<FcReddit size={60}/>,
    href:"/ThemeSwitcher"
  },  
];
