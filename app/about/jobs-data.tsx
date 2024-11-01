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
         "Correcting UI strings and trying to deal with a flawed documentation project in Markdown/MkDocs."
    },
    {
      title: "Technical Writer",
      company: "AgileData",
      industry: "Data Science",
      location: "New Zealand",
      duration: "April 2023 - June 2024",
      description:
        "Writing user guides for a data science platform with reStructuredText (reST)/Sphinx.",
    },
    {
        title: "Technical Writer",
        company: "Freelance/Contract",
        industry: "Software",
        location: "Germany/US",
        duration: "June 2022 - April 2023",
        description:
          "Creating the technical documentation for several apps and plugins from the Atlassian Suite in Confluence.",
      },
  ];