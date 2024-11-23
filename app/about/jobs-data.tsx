export interface Job {
    title: string;
    company: string,
    industry: string,
    location: string,
    duration: string;
    description: string;
  }
  
  export const jobs: Job[] = [
    {
      title: "(Lead) Technical Writer",
      company: "DYMATRIX",
      industry: "Data Science/Automation",
      location: "Karlsruhe, Germany",
      duration: "October 2024 - Today",
      description: 
         "Project planning for a new documentation portal in Markdown/MDX and React/Next.js. Translation management, terminology management, and support of the legacy documentation in reST/Sphinx/GitLab. Product ownership of the technical documentation, stakeholder communication, and task management in Jira."
    },
    {
      title: "Technical Writer",
      company: "AUVESY-MDT",
      industry: "Robotics/Automation",
      location: "Landau in der Pfalz, Germany/USA",
      duration: "June 2024 - August 2024",
      description: 
         "Supporting the technical documentation of a robotics/automation product. Correcting and translating UI strings with Weblate. Designing technical diagrams for the documentation and translating the release notes. Planning the deployment of the documentation in Markdown after moving on from MadCap Flare."
    },
    {
      title: "Technical Writer",
      company: "AgileData.io",
      industry: "Data Science",
      location: "Remote, New Zealand",
      duration: "April 2023 - June 2024",
      description:
        "Creating user guides/tutorials for a data science SaaS platform in reST/Sphinx. Designing annotated screenshots of the UI and data visualizations with Looker Studio. Writing a style guide/technical writing guideline and creating a new folder structure for assets in GCP.",
    },
    {
      title: "Technical Writer",
      company: "Freelance/Contract",
      industry: "Software",
      location: "Remote, Germany/USA",
      duration: "January 2021 - April 2023",
      description:
        "Contributing to various documentation projects including creating the technical documentation for several apps from the Atlassian Suite (Jira/Confluence) in Confluence. Setting up documentation websites with Markdown/Jekyll and Markdown/MkDocs. Writing technical blog articles and features for tech magazines.",
    }
  ];