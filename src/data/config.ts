const config = {
  title: "Vaibhav Yadav | Creative Developer & Security Analyst",
  description: {
    long: "Explore the portfolio of Vaibhav Yadav, a creative developer and security analyst specializing in immersive web experiences, 3D animations, and vulnerability research. Discover my latest work, including Storytelling Portfolio, Atrangi Portfolio, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Vaibhav Yadav, a creative developer and security analyst building immersive web experiences and hunting vulnerabilities.",
  },
  keywords: [
    "Vaibhav Yadav",
    "vaibhav-buildz",
    "portfolio",
    "creative developer",
    "security analyst",
    "web development",
    "3D animations",
    "interactive websites",
    "Storytelling Portfolio",
    "Atrangi Portfolio",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Vaibhav Yadav",
  email: "vaibhav-buildz@users.noreply.github.com",
  site: "https://vaibhavyadav.com",

  // for github stars button
  githubUsername: "vaibhav-buildz",
  githubRepo: "3D-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://twitter.com/vanshh_00",
    linkedin: "https://www.linkedin.com/in/vaibhav-yadav-80b891330",
    instagram: "https://www.instagram.com/vanshh.01",
    facebook: "https://facebook.com",
    github: "https://github.com/vaibhav-buildz",
  },
};
export { config };
