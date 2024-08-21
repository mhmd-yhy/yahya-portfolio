import Icons from "./Icons";
import Images from "./Images";
import cv from "../assets/ResumeMuhammedYahya.pdf";

export const links = [
  {icon: Icons.links.PersonOutline, text: "about", path: "/"},
  {icon: Icons.links.LaptopCode, text: "services", path: "/services"},
  {icon: Icons.links.BriefcaseOutline, text: "portfolio", path: "/portfolio"},
  {icon: Icons.links.OutlineContacts, text: "contact", path: "/contact"},
];
export const landing = {
  image: Images.avatar,
  name: "muhammed yahya",
  competence: "web developer",
  contactInfo: [
    {
      icon: Icons.contactInfo.PhoneIphone,
      iconColor: "text-blue-500",
      text: "phone",
      desc: "+90 536 675 13 48",
      borderBottom: true,
    },
    {
      icon: Icons.contactInfo.Email,
      iconColor: "text-blue-500",
      text: "email",
      desc: "muhammedyahyazx@gmail.com",
      borderBottom: true,
    },
    {
      icon: Icons.contactInfo.LocationDot,
      iconColor: "text-blue-500",
      text: "loation",
      desc: "Istanbul/Turkey",
      borderBottom: true,
    },
    {
      icon: Icons.contactInfo.BirthdayCake,
      iconColor: "text-blue-500",
      text: "birthday",
      desc: "09/1999",
      borderBottom: false,
    },
  ],
  social: [
    {
      icon: Icons.social.FacebookF,
      color: "text-blue-500",
      href: "https://www.facebook.com/mhmd.yhy.zx",
    },
    {
      icon: Icons.social.Instagram,
      color: "text-red-500",
      href: "https://www.instagram.com/mhmd.yhy.zx/",
    },
    {
      icon: Icons.social.Github,
      color: "text-white",
      href: "https://github.com/mhmd-yhy",
    },
    {
      icon: Icons.social.Whatsapp,
      color: "text-green-700",
      href: "https://wa.me/905366751348",
    },
  ],
  showContactIcon: Icons.landing.showContactIcon,
  cvIcon: Icons.landing.cvIcon,
  cvFile: cv,
};
export const about = {
  desc: "A dedicated front-end web developer with a knack for creating immersive digital experiences that captivate users. I specialize in bringing designs to life with pixel-perfect precision and interactive functionality.My journey in front-end development began with a love for blending creativity and technology to craft visually stunning and responsive websites. From conceptualizing user interfaces to optimizing performance across devices, I thrive on turning ideas into dynamic web solutions that leave a lasting impression.",
  features: [
    {
      icon: Icons.features.HandSparkles,
      title: "creativity",
      desc: "Infusing creativity into every project, I specialize in crafting visually captivating and user-centric designs.",
    },
    {
      icon: Icons.features.Lightbulb,
      title: "quality",
      desc: "Dedicated to excellence, I uphold a meticulous approach to development, ensuring each project meets the highest standards of quality.",
    },
    {
      icon: Icons.features.SandsOfTime,
      title: "time",
      desc: "I ensure projects are delivered on time while maintaining clear communication throughout the process.",
    },
  ],
  stats: [
    {icon: Icons.stats.PersonOutline, text: "clints", stat: "10"},
    {icon: Icons.stats.Validate, text: "years experience", stat: "2"},
    {icon: Icons.stats.LaptopCode, text: "projects", stat: "20"},
  ],
};
export const services = {
  service: [
    {
      icon: Icons.services.OutlineDesignServices,
      title: "Responsive Web Design",
      desc: "Creating mobile-friendly and responsive designs to ensure optimal viewing experiences across all devices.",
    },
    {
      icon: Icons.services.Framework,
      title: "Frontend Frameworks",
      desc: "Implementing modern frontend frameworks like React to build dynamic and interactive user interfaces.",
    },
    {
      icon: Icons.services.Dumpster,
      title: "E-commerce Solutions",
      desc: "Developing secure and scalable e-commerce platforms to help you reach a wider audience and drive sales.",
    },
    {
      icon: Icons.services.Optimize,
      title: "Performance Optimization",
      desc: "Optimizing website performance to enhance speed and responsiveness, providing users with a smooth browsing experience.",
    },
  ],
  skills: [
    {icon: Icons.skills.Html5, color: "#e6511e"},
    {icon: Icons.skills.Css3Alt, color: "#2D53E5"},
    {icon: Icons.skills.JsSquare, color: "#f4e224"},
    {icon: Icons.skills.React, color: "#08d9ff"},
    {icon: Icons.skills.redux, color: "#7a50be"},
    {icon: Icons.skills.Bootstrap, color: "#7719f7"},
    {icon: Icons.skills.Tailwind, color: "#0eb8d5"},
  ],
};
export const portfolio = [
  {
    image: Images.toDoListReact,
    title: "to-do list app",
    topics: ["react", "bootstrap5"],
    category: "js",
    view: "https://mhmd-yhy-todo-list-react.netlify.app",
    code: "https://github.com/mhmd-yhy/to-do-list-react",
  },
  {
    image: Images.elzero,
    title: "elzero",
    topics: ["css", "js"],
    category: "css",
    view: "https://mhmd-yhy-elzero.netlify.app",
    code: "https://github.com/mhmd-yhy/Template-Three",
  },
  {
    image: Images.solnhub,
    title: "solnhub website",
    topics: ["react", "css"],
    category: "js",
    view: "https://mhmd-yhy-solnhub-react.netlify.app",
    code: "https://github.com/mhmd-yhy/solnhub-website-react",
  },
  {
    image: Images.portfolio,
    title: "portfolio",
    topics: ["react", "material-ui"],
    category: "js",
    view: "https://mhmd-yhy-portfolio-react-1.netlify.app",
    code: "https://github.com/mhmd-yhy/portfolio-react-1",
  },
  {
    image: Images.cruds,
    title: "cruds app",
    topics: ["js", "bootstrap5"],
    category: "js",
    view: "https://mhmd-yhy-cruds.netlify.app",
    code: "https://github.com/mhmd-yhy/CRUDS",
  },
  {
    image: Images.simpleShoppingCart,
    title: "simple shopping cart",
    topics: ["react", "bootstrap5"],
    category: "js",
    view: "https://mhmd-yhy-shopping-cart.netlify.app",
    code: "https://github.com/mhmd-yhy/shopping-cart-react",
  },
  {
    image: Images.toDoList,
    title: "to-do list app",
    topics: ["js", "bootstrap5"],
    category: "js",
    view: "https://mhmd-yhy-todo-list.netlify.app",
    code: "https://github.com/mhmd-yhy/To-Do-List",
  },
  {
    image: Images.specialDesign,
    title: "special design",
    topics: ["js", "css"],
    category: "css",
    view: "https://mhmd-yhy-special-design.netlify.app",
    code: "https://github.com/mhmd-yhy/Special-Design",
  },

  {
    image: Images.fooderaRestaurant,
    title: "foodera restaurant",
    topics: ["bootstrap5"],
    category: "css",
    view: "https://github.com/mhmd-yhy/foodera-restaurant",
    code: "https://mhmd-yhy-foodera.netlify.app",
  },
  {
    image: Images.dashboard,
    title: "dashboard",
    topics: ["css"],
    category: "css",
    view: "https://mhmd-yhy-dashboard-html.netlify.app",
    code: "https://github.com/mhmd-yhy/DashBoard",
  },
];
export const contact = {
  map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1265.3864482181664!2d28.67411915424156!3d41.033719038074715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1724205146931!5m2!1str!2str",
  desc: "Feel free to reach out to discuss your project ideas,collaborations, or any questions you might have.",
  myEmail: "muhammedyahyazx@gmail.com",
  form: [
    {title: "your name", type: "text", name: "name"},
    {title: "email", type: "email", name: "email"},
    {title: "message", type: "text", name: "message"},
  ],
  sendIcon: Icons.contact.sendContact,
};
export const footer = {
  desc: "© 2024 All Rights Reserved by",
  reserved: "yahya",
  toTopIcon: Icons.footer.toTopIcon,
};
