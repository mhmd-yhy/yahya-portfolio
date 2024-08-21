import {
  FaBirthdayCake,
  FaBootstrap,
  FaCss3Alt,
  FaDumpster,
  FaFacebookF,
  FaGithub,
  FaHandSparkles,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLaptopCode,
  FaLightbulb,
  FaReact,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import {
  MdEmail,
  MdOutlineContacts,
  MdOutlineDesignServices,
  MdPhoneIphone,
  MdKeyboardArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import {BiLogoRedux, BiLogoTailwindCss, BiMailSend} from "react-icons/bi";
import {IoBriefcaseOutline, IoPersonOutline} from "react-icons/io5";
import {GrOptimize, GrValidate} from "react-icons/gr";
import {FaLocationDot} from "react-icons/fa6";
import {GiSandsOfTime} from "react-icons/gi";
import {SiFramework} from "react-icons/si";

const Icons = {
  links: {
    PersonOutline: <IoPersonOutline />,
    LaptopCode: <FaLaptopCode />,
    BriefcaseOutline: <IoBriefcaseOutline />,
    OutlineContacts: <MdOutlineContacts />,
  },
  social: {
    FacebookF: <FaFacebookF />,
    Instagram: <FaInstagram />,
    Github: <FaGithub />,
    Whatsapp: <FaWhatsapp />,
  },
  contactInfo: {
    PhoneIphone: <MdPhoneIphone />,
    Email: <MdEmail />,
    LocationDot: <FaLocationDot />,
    BirthdayCake: <FaBirthdayCake />,
  },
  features: {
    HandSparkles: <FaHandSparkles />,
    Lightbulb: <FaLightbulb />,
    SandsOfTime: <GiSandsOfTime />,
  },
  stats: {
    PersonOutline: <IoPersonOutline />,
    Validate: <GrValidate />,
    LaptopCode: <FaLaptopCode />,
  },
  services: {
    OutlineDesignServices: <MdOutlineDesignServices />,
    Framework: <SiFramework />,
    Dumpster: <FaDumpster />,
    Optimize: <GrOptimize />,
  },
  skills: {
    redux: <BiLogoRedux />,
    Tailwind: <BiLogoTailwindCss />,
    Bootstrap: <FaBootstrap />,
    Css3Alt: <FaCss3Alt />,
    Html5: <FaHtml5 />,
    JsSquare: <FaJsSquare />,
    React: <FaReact />,
  },
  contact: {
    sendContact: <BiMailSend />,
  },
  landing: {
    showContactIcon: <MdKeyboardArrowDown />,
    cvIcon: <FaDownload />,
  },
  footer: {
    toTopIcon: <MdKeyboardDoubleArrowUp />,
  },
};
export default Icons;
