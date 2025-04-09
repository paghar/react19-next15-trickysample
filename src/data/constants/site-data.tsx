import { FcAlarmClock } from "react-icons/fc";

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
    title:"useTransition",
    description:"useTransition is a React Hook that lets you render a part of the UI in the background.",
    svg:<FcAlarmClock size={60}/>
  },
  {
    title:"useDebugValue",
    description:"useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.",
    svg:<FcAlarmClock size={60}/>
  },
  {
    title:"useDeferredValue",
    description:"useDeferredValue is a React Hook that lets you defer updating a part of the UI.",
    svg:<FcAlarmClock size={60}/>
  },
  {
    title:"useId",
    description:"useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.",
    svg:<FcAlarmClock size={60}/>
  },
  {
    title:"useImperativeHandle",
    description:"useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.",
    svg:<FcAlarmClock size={60}/>
  },
  {
    title:"useImperativeHandle",
    description:"useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.",
    svg:<FcAlarmClock size={60}/>
  },  
];
