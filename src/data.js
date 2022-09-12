const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "MP.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Manipriyan",
  role: "Front End Engineer",
  description:
    " Frontend Developer with 2+ years of professional experiences in Web Designing and User Interface Development.Tech stack: HTML(5), Css(3), Sass, Less, Bootstrap, JavaScript, jQuery, Reactjs Strong experience with Cross Browser Compatibility issues and Optimization for web, including CSS Sprites and best practices Experts in responsive Web Design and analysing and fixing UI bugs quickly. Proficiency in code optimization to improving the performance.",
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "Javascript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "Javascript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "Javascript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Bootstrap",
  "SASS",
  "Material UI",
  "Git",
  "Wordpress",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "manipriyangopalan@mail.com",
};

export { header, about, projects, skills, contact };
