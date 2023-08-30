import javascript from './assets/images/javascript.png'
// import aws from './assets/images/aws.png'
import css from './assets/images/css.png'
import firebase from './assets/images/firebase.png'
import flutter from './assets/images/flutter.png'
import git from './assets/images/git.jpg'
// import github from './assets/images/github1.png'
import html from './assets/images/html.png'
import mongo from './assets/images/mongo.png'
import nextjs from './assets/images/nextjs.png'
import node from './assets/images/node.png'
import tailwind from './assets/images/tailwind.png'
import react from './assets/images/react.png'
import photoGallery from './assets/images/Screenshot 2023-08-09 034343.png'


const skills = [
  {
    id:1,
    name: 'Javascript',
    Image:javascript
  },
  {
    id:2,
    name: 'React',
    Image: react
  },
  {
    id:3,
    name: 'Node',
    Image: node
  },
  {
    id:4,
    name: 'Tailwind CSS',
    Image: tailwind
  },
  {
    id:5,
    name: 'HTML5',
    Image: html
  },
  {
    id:6,
    name: 'CSS',
    Image: css
    },
  {
    id:7,
    name: 'Git',
    Image: git
  },
  {
    id:8,
    name: 'Firebase',
    Image: firebase
  },
  {
    id:10,
    name: 'Flutter',
    Image: flutter
  },
  {
    id:11,
    name: 'MongoDB',
    Image: mongo
  },
  {
    id:12,
    name: 'NextJs',
    Image: nextjs
  },
  
]

const services = [
  {
    title: 'Web Development',
    description:
    "Creating modern and responsive websites using the latest technologies.",
  },
  {
    title: 'Mobile Apps',
    description:
    "Empower your brand with our Flutter mobile apps. From cross-platform excellence to seamless UI/UX, we drive digital success on iOS and Android."
  },
  {
    title: 'UI & UX Design',
    description:
    "Designing user-friendly and visually appealing interfaces for applications.",
  },
]

const dataportfolio = [
  {
    img: 'https://picsum.photos/400/800/?grayscale',
    description:
      'The wisdom of life consists in the elimination of non-essentials.',
    link: '#',
  },
  {
    img: 'https://picsum.photos/400/800/?grayscale',
    description:
      'The wisdom of life consists in the elimination of non-essentials.',
    link: '#',
  },
  {
    img: photoGallery,
    description:
      'The wisdom of life consists in the elimination of non-essentials.',
    link: '#',
  },
  {
    img: 'https://picsum.photos/400/600/?grayscale',
    description:
      'The wisdom of life consists in the elimination of non-essentials.',
    link: '#',
  },
  {
    img: 'https://picsum.photos/400/300/?grayscale',
    description:
      'The wisdom of life consists in the elimination of non-essentials.',
    link: '#',
  },
  {
    img: 'https://picsum.photos/400/700/?grayscale',
    description:
      'The wisdom of life consists in the elimination of non-essentials.',
    link: '#',
  },
]
const meta = {
  title: 'Benard Otokpa',
  description:
    'I’m Benard Otokpa Full stack devloper,App developer and i currently working in Lagos',
}

export { dataportfolio, meta, skills, services }
