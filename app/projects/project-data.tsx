export interface Project {
  title: string;
  year: string;
  tech_stack: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "My technical writing portfolio and blog",
    year: "2024",
    tech_stack: "Markdown/MDX, React/Next.js, Tailwind CSS, GitHub, Vercel",
    description:
      "My technical writing portfolio and blog, written in Markdown/MDX, built with React/Next.js, styled with Tailwind CSS and deployed with GitHub/Vercel.",
    url: "https://technical-writers-blog.vercel.app/",
  },
  {
    title: "User guides for a data science platform",
    year: "2023/2024",
    tech_stack: "reStructuredText (reST), Sphinx, GCP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  }
];
