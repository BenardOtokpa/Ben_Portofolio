import kreaLanding from './../assets/images/KreaDemo.png'
import Shadcn from './../assets/images/Shadcn Dasboard.png'
import Foodies from './../assets/images/foodies.png'
import Portfolio from './../assets/images/portfolio.png'
import Blog from './../assets/images/senpaiblog.png'
import Natours from './../assets/images/natours.png'

const SLIDE = [
  {
    id: 1,
    title: 'Natours Websites',
    img: Natours,
    description:
      'Natours is a professional full‑stack JavaScript web application for showcasing and managing tour experiences. Built as a full‑stack app using Node.js/Express with Pug templating and HTML/CSS on the frontend, it provides a polished, server‑rendered interface and modern JavaScript-driven interactions.',
    github: 'https://github.com/BenardOtokpa/natours-app',
    live: 'https://your-taskmanager-live.com',
  },
  {
    id: 2,
    title: 'Krea Landing page Demo',
    description:
      'A sleek, modern landing page built with Next.js and Tailwind CSS, paired with a TypeScript-first dashboard starter leveraging shadcn/ui components. Fully responsive and customizable, it comes with ready-to-use example pages, making it easy to rapidly build admin panels, analytics dashboards, or internal tools with a professional, maintainable structure.',
    img: kreaLanding,
    github: 'https://github.com/BenardOtokpa/krea-landing-demo',
    live: 'https://krea-landing-demo.vercel.app/',
  },
  {
    id: 3,
    title: 'Analytics Dashbord',
    img: Shadcn,
    description:
      'A modern, responsive dashboard built using Next.js, Tailwind CSS, Shadcn UI, and TypeScript. This dashboard features a clean and intuitive interface, fully typed components, and modular architecture for scalability. It includes reusable UI elements, theme support, and optimized performance for dynamic web applications. Perfect for admin panels, analytics, or internal tools where maintainability and developer experience are key.',
    github: 'https://github.com/BenardOtokpa/shadcn-dashboard-project',
    live: 'https://shadcn-dashboard-project-blush.vercel.app/',
  },
  {
    id: 4,
    title: 'NextLevel Foodies App',
    img: Foodies,
    description:
      'NextLevel Foodies is a vibrant platform built with Next.js, SQLite, and custom CSS that brings food lovers together. Discover and share your favorite recipes, explore meals from around the world, and connect with a passionate foodie community. With a clean, responsive design, users can browse dishes, join the community, and enjoy a seamless experience for discovering, sharing, and celebrating culinary delights.',
    github: 'https://github.com/yourUser/chatapp',
    live: 'https://foodiesapp-eight.vercel.app/',
  },
  {
    id: 5,
    title: 'Free Portfolio Template',
    img: Portfolio,
    description:
      'Professional, customizable portfolio template to showcase your projects and skills. Built with React, JavaScript, HTML, and CSS for a modern and responsive personal website.',
    github: 'https://github.com/BenardOtokpa/Portfolio',
    live: 'https://benardotokpa.github.io/Portfolio/',
  },
  {
    id: 6,
    title: 'Senpai Stream Blog App',
    img: Blog,
    description:
      'SenpaiStream is a minimal, customizable web app for publishing blog posts. Built with JavaScript, HTML, and CSS, it provides a clean editor and responsive layouts so you can write, organize, and publish content quickly. ',
    github: 'https://github.com/BenardOtokpa/senpaistream',
    live: 'https://senpaistream-new.vercel.app/',
  },
]
export { SLIDE }
