import crimeImg from '../assets/crime.webp';
import fabricImg from '../assets/fabric.webp';
import vapt from '../assets/vapt.webp';




export const projects = [
  {
    panme: "Crime Prevention System",
    Date: "2024",
    description: "AI-powered CCTV surveillance system that detects suspicious activities using deep learning (YOLO) and alerts authorities in real time.",
    image:crimeImg,
    Tech_Stack:" Python, OpenCV, YOLO, DeepLearning",
  },
  {
    panme: "Web Application Penetration Testing (VAPT)",
    Date: "2022",
    description: "Performed VAPT to identify and fix web security vulnerabilities like SQL Injection, XSS, and Authentication flaws.",
    image:vapt,
    Tech_Stack: "Burp Suite, Nmap, Metasploit, OWASP ZAP, Kali Linux." ,
   },
  {
   panme: "Fabric Stitch Detection System",
    Date: "2022",
    description: "AI-based solution for identifying fabric stitching defects in textile industries, improving quality control.",
    image:fabricImg,
    Tech_Stack: "Python, OpenCV, Machine Learning",
   },
];

