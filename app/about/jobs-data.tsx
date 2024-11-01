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
      title: "Technical Writer",
      company: "AUVESY-MDT",
      industry: "Robotics/Automation",
      location: "Germany/US",
      duration: "June 2024 - Today",
      description: 
         "Have been responsible for the documentation of a data science/automation software product. Otherwise have been busy with correcting UI strings, translating the release notes, designing technical diagrams and trying to deal with a flawed documentation project in Markdown/MkDocs."
    },
    {
      title: "Technical Writer",
      company: "AgileData",
      industry: "Data Science",
      location: "New Zealand",
      duration: "April 2023 - June 2024",
      description:
        "Have been responsible for writing user guides for a data science platform with reStructuredText (reST)/Sphinx. Tasks included creating annotated screenshots of the UI and data visualizatons for the documentation, as well as writing a style guide in reST as my final assignment.",
    },
    {
        title: "Technical Writer",
        company: "Freelance/Contract",
        industry: "Software",
        location: "Remote",
        duration: "July 2022 - June 2024",
        description:
          "Have been working on various documentation projects on a freelance/contract base. Projects included creating the technical documentation of several apps/plugins for the Atlassian Suite in Confluence and creating docs websites for app documentation with Markdown/MkDocs/GitHub and Markdown/Next.js/GitLab.",
      },
  ];