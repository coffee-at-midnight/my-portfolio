export interface Project {
  title: string;
  year: string;
  tech_stack: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Technical writing portfolio and blog",
    year: "2024",
    tech_stack: "Markdown/MDX, React/Next.js, Tailwind CSS, GitHub, Vercel",
    description:
      "I created a technical writing portfolio and blog for my efforts with React/Next.js, Markdown/MDX and Tailwind CSS, and deployed it with GitHub/Vercel.",
    url: "https://technical-writers-blog.vercel.app/",
  },
  {
    title: "User guides/Tutorials for the AgileData platform",
    year: "2023/2024",
    tech_stack: "reStructuredText (reST), Sphinx, GCP",
    description:
      "I wrote 20+ user guides/tutorials for a data science SaaS platform in reStructuredText (reST)/Sphinx, which have been deployed with GCP (Google Cloud Platform). My work included taking and annotating screenshots of the product UI and creating data visualizations with Looker Studio.",
    url: "",
  }
];
