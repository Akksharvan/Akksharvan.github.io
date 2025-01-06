import React from "react";
import defaultImg from "@/public/defaultImg.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Awards",
    hash: "#awards",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description:
      "Interned at Maxbyte Technologies, contributing to AR-based product repair solutions that improved repair time by 15%. Gained hands-on experience with ARKit and Unity.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun. 2022 - Jul. 2022",
  },
  {
    title: "Became a Full-Time Collegiate Student",
    location: "Chapel Hill, NC",
    description:
      "Began studying Computer Science & Applied Mathematics at UNC Chapel Hill. Currently pursuing a Bachelor's degree with a focus on machine learning and software development.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug. 2023",
  },
  {
    title: "Undergraduate Researcher",
    location: "Chapel Hill, NC",
    description:
      "Conducted research at UNC Chapel Hill on machine learning models for stock price prediction and LLM ambiguity detection. Achieved significant improvements in predictive accuracy and confidence calibration.",
    icon: React.createElement(FaReact),
    date: "Aug. 2024 - Dec. 2024",
  },
  {
    title: "Social Media Manager",
    location: "Cary, NC",
    description:
      "Managed social media for Sunrisers Realty LLC starting in January 2023. Increased engagement by 27% through automation tools and targeted campaigns, while boosting customer retention by 9%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "GPT-2 Transformer from Scratch",
    description:
      "Implemented GPT-2 from scratch, including multi-head self-attention, feed-forward networks, and positional embeddings.",
    tags: ["Python", "NumPy", "TensorFlow", "Google Colab"],
    imageUrl: defaultImg
    // imageUrl: gpt2Img,
  },
  {
    title: "MealWarden",
    description:
      "Developed an iOS app using Apple's Vision framework for advanced image recognition of food labels.",
    tags: ["Swift", "SwiftUI", "Vision Framework", "Google Gemini API"],
    imageUrl: defaultImg
    // imageUrl: mealwardenImg,
  },
  {
    title: "Vocabuilder",
    description:
      "A web application that provides definitions, pronunciations, and sentiment analysis for user-inputted words.",
    tags: ["Python", "Flask", "Machine Learning"],
    imageUrl: defaultImg
    // imageUrl: vocabuilderImg,
  },
  {
    title: "Competitive Programming",
    description:
      "A repository of solutions to competitive programming problems from various platforms with a focus on algorithmic problem-solving techniques.",
    tags: ["C++", "Python", "Algorithms"],
    imageUrl: defaultImg
    // imageUrl: competitiveProgrammingImg,
  },
] as const;

export const awardsData = [
  {
    name: "ICPC North American Championship Qualifier",
    issuer: "International Collegiate Programming Contest",
    issueDate: "November 2024",
    description:
      "Second place in the Mid-Atlantic Regional Contest - NCSU Site, qualifying for the penultimate stage in a series of competitive programming contests.",
    informationURL: "https://icpc.global/",
  },
  {
    name: "Codeforces Expert",
    issuer: "Codeforces",
    issueDate: "July 2024",
    description: "Top 5% of Codeforces Participants.",
    informationURL: "https://codeforces.com/profile/Ask-2005",
  },
  {
    name: "National Merit Scholarship Corporation Finalist - Class of 2023",
    issuer: "National Merit Scholarship Corporation",
    issueDate: "February 2023",
    description:
      "Awarded to the Top 15,000 high school Seniors based on scores achieved in their Junior year PSAT examinations in addition to a supplemental application (~1% of Eligible & Participating Students).",
    informationURL:
      "https://www.nationalmerit.org/s/1758/interior.aspx?sid=1758&gid=2&pgid=1879",
  },
  {
    name: "USA Computing Olympiad - Gold Division",
    issuer: "USA Computing Olympiad",
    issueDate: "January 2023",
    description: "Top ~10% of 10,000+ USACO Participants.",
    informationURL: "https://usaco.org/index.php?page=details",
  },
  {
    name: "2x AP Scholar with Distinction",
    issuer: "College Board",
    issueDate: "July 2022",
    description:
      "Awarded to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams.",
    informationURL:
      "https://apcentral.collegeboard.org/exam-administration-ordering-scores/scores/awards/scholar-awards",
  },
  {
    name: "Junior Marshal - Panther Creek Class of 2023",
    issuer: "Panther Creek High School",
    issueDate: "June 2022",
    description: "Awarded to the Top 20 students in the Junior Class based on GPA.",
  },
] as const;

export const certificationsData = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "July 2024",
    expirationDate: "July 2027",
    credentialURL: "https://www.credly.com/badges/63b8cc27-b4ba-4494-bf92-696866bf860f",
  },
  {
    name: "Bloomberg Finance Fundamentals",
    issuer: "Bloomberg",
    issueDate: "July 2024",
    credentialID: "XCE5HPURbPNGQjXL5ShUMwxe",
    credentialURL: "https://portal.bloombergforeducation.com/certificates/XCE5HPURbPNGQjXL5ShUMwxe",
  },
  {
    name: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    issueDate: "June 2024",
    credentialURL: "https://www.example.com/certification/prompt-design-vertex-ai",
  },
  {
    name: "Intro to Deep Learning",
    issuer: "Kaggle",
    issueDate: "January 2024",
    credentialURL: "https://www.kaggle.com/learn/certification/akksharvan/intro-to-deep-learning",
  },
  {
    name: "GIAC Foundational Cybersecurity Technologies (GFACT)",
    issuer: "GIAC Certifications",
    issueDate: "October 2023",
    expirationDate: "October 2027",
    credentialURL: "https://www.credly.com/badges/857438e6-207c-439d-b639-552e3177fc7b",
  },
  {
    name: "Ratatype Typing Certificate",
    issuer: "Ratatype",
    issueDate: "August 2023",
    credentialID: "6355591",
    credentialURL: "https://www.ratatype.com/u6355591/certificate/en_new/",
  },
  {
    name: "PCAP – Certified Associate in Python Programming",
    issuer: "Python Institute",
    issueDate: "May 2023",
    credentialURL: "https://www.credly.com/badges/44692a22-87d6-4cd2-8edb-e1c49c137558",
  },
  {
    name: "CS50x",
    issuer: "Harvard University",
    issueDate: "March 2023",
    credentialURL: "https://cs50.harvard.edu/certificates/456dc92c-2488-4787-bc3d-ea4195b91bd2",
  },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    issueDate: "March 2023",
    credentialURL: "https://www.kaggle.com/learn/certification/akksharvan/intermediate-machine-learning",
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    issueDate: "March 2023",
    credentialURL: "https://www.kaggle.com/learn/certification/akksharvan/intro-to-machine-learning",
  },
  {
    name: "Hour of Code",
    issuer: "Code.org",
    issueDate: "January 2023",
    credentialURL: "https://sites.google.com/students.wcpss.net/hour-of-code-certification/home",
  },
  {
    name: "ACT WorkKeys National Career Readiness Certificate - Platinum",
    issuer: "ACT",
    issueDate: "December 2022",
    credentialID: "1BYC7MB6TZGC",
    credentialURL: "https://myworkkeys.act.org/mwk/emCertDetails.do?event=go&realm=17740116&certId=1BYC7MB6TZGC",
  },
  {
    name: "Fundamentals of Agile Project Management",
    issuer: "Project Management Institute",
    issueDate: "December 2022",
    credentialURL: "https://www.credly.com/badges/210db83d-7e96-401f-8b33-58fa18ed7de2",
  },
  {
    name: "Fundamentals of Waterfall Project Management",
    issuer: "Project Management Institute",
    issueDate: "December 2022",
    credentialURL: "https://www.credly.com/badges/9078f7d3-ba74-4a66-8d8f-0b9060f8007d",
  },
  {
    name: "Everfi Venture Program",
    issuer: "Everfi",
    issueDate: "November 2022",
    credentialURL: "https://sites.google.com/students.wcpss.net/akksharvan-everfi-venture/home",
  },
  {
    name: "C++ Certification",
    issuer: "SoloLearn",
    issueDate: "August 2022",
    credentialURL: "https://www.sololearn.com/certificates/course/en/26567088/1051/landscape/png",
  },
  {
    name: "BWSI Python Core 2022",
    issuer: "Massachusetts Institute of Technology",
    issueDate: "July 2022",
    credentialURL: "https://courses.bwsix.edly.io/certificates/7080b1c2eaa64d0ea3d68c6d4ba338a0",
  },
  {
    name: "Version Control: Git & Github 2022",
    issuer: "Massachusetts Institute of Technology",
    issueDate: "July 2022",
    credentialURL: "https://courses.bwsix.edly.io/certificates/e3cf5e64333445168b3b6112a3bd0fae",
  },
  {
    name: "MTA: Introduction to Programming Using Python",
    issuer: "Microsoft",
    issueDate: "May 2022",
    credentialURL: "https://credly.com/badges/ec71397e-ec61-4b53-a263-a3c1e7510af0",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;