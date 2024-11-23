import Image from "next/image";
import Collapsible from '../components/collapsible';
import { join } from "path";
import { jobs } from "./jobs-data";

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About Me</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Image src="/avatar-2.png" alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-0 mt-0 lg:mb-8 mb-10 mx-auto sm:float-left sm:mr-10 sm:mb-5" unoptimized width={160} height={160} priority />
          <div className="prose prose-neutral dark:prose-invert text-sm">
            <p><strong>Name:</strong> Jana <br/>
            <strong>Profession:</strong> Technical Writer <br/>
            <strong>Industry:</strong> Robotics/Automation, Data Science<br/>
            <strong>Based:</strong> Landau in der Pfalz (Germany)<br/>
            <strong>Languages:</strong> English, German <br/>
            </p>
          </div>
        </div>
        <div className="lg:ml-5 w-full md:w-2/3 prose prose-neutral dark:prose-invert ">
        <li>I'm a technical writer in the robotics/automation industry. ✒️⚙️</li>
        <li>My technical education is in the field of networking and IoT and I can code in Python, C/C++, and Java. 💻</li>
        <li>My linguistic skills are complemented by my experience in translation and terminology management, localization, and technical communication. 🎀</li>
        <li>Likes creating user-facing technical documentation for an innovative product. ✒️</li>
        <li>Dislikes being micromanaged by Dr. C-Level. ✌️</li>
        </div>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Bio</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>I'm a highly skilled and dedicated technical writer in the robotics/automation industry with 3+ years of experience in creating technical documentation for complex software products.</p>
        <p>My expertise includes writing the technical documentation in my main languages, English and German; leading translation and terminology management; writing the release notes; creating API documentation; translating UI strings; and project planning for large documentation projects.</p>
        <p>After attaining a technical education in the field of networking and IoT, I started contributing to various documentation projects as a technical writer on a freelance contract. Later on, I joined my first corporation as a full-time employee and expanded my skill set towards translation and terminology management, localization practices and technical communication.</p>
        <p>In my most recent position, I am responsible for planning and implementing a new documentation portal for my corporation with Markdown/MDX and React/Next.js while coordinating the stakeholder communication for the project.</p>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Skills</h2>
      <div className="prose prose-neutral dark:prose-invert">
      <Collapsible title="Technical Writing">
      <ul>
        <li>Writing the technical documentation for software products, platforms or modules in <strong>English (US or UK/AUS/NZ)</strong> and <strong>German</strong></li>
        <li>Writing, managing and organizing the <strong>release notes</strong> of a software product according to the software development life cycle/release cycle</li>
        <li>Writing <strong>API documentation</strong> with Swagger under usage of the OpenAPI standard</li>
        <li>Writing <strong>process documentation</strong> and <strong>step-by-step user guides</strong></li>
        <li>Including <strong>FAQs, admonitions and templates</strong> in the documentation</li>
        <li>Writing <strong>technical blog articles, training guides, whitepapers, data sheets</strong> and other supporting materials</li>
        <li>Creating or maintaining a <strong>style guide</strong> for the technical documentation (Familiarity with the IBM Style Guide, Microsoft Writing Style Guide, Google Developer Documentation Style Guide)</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Project Planning">
      <ul>       
         <li>Planning, designing and implementing a <strong>new documentation portal</strong> in the corporation including writing a concept plan/project plan</li>    
         <li>Conducting <strong>task management/distribution</strong> with boards in Jira or Trello</li>
         <li>Having <strong>product ownership of the technical documentation</strong> and implementing the product strategy (documentation as part of the product)</li>
         <li>Creating an <strong>information architecture</strong> for a software product/software module and developing the documentation of a <strong>completely new product/module</strong> by mapping all features and functionalities</li>
         <li>Applying <strong>DITA principles</strong> to structure and modularize the technical documentation (structured/modular content)</li>
         <li>Implementing <strong>industry standards</strong> for the technical documentation (ISO 27001) and <strong>QA measures/reviews</strong> in the technical writing process</li>       
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Tool Suite">
      <ul>
        <li>Using a <strong>lightweight markup language (Markdown, reStructuredText (reST))</strong> and a <strong>static site generator (Jekyll, MkDocs, Sphinx, Astro, Gatsby, Next.js)</strong> to create the technical documentation (Docs-as-Code)</li>
        <li>Working in a development environment for technical writing including <strong>code editor/IDE (VS Code), version control system (Git & GitHub/GitLab), CI/CD pipelines, and deployment process</strong> (Docs-as-Code)</li>
        <li>Using a <strong>knowledge base management system (Confluence)</strong> for internal and external documentation</li>
        <li>Using a <strong>CMS (WordPress)</strong> or <strong>Headless CMS (Netlify)</strong> for content creation</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Translation">
      <ul>       
        <li>Conducting <strong>translation management</strong> and <strong>terminology management</strong></li>
        <li>Translating the technical documentation and <strong>UI strings</strong> into English or German</li>
        <li>Using a <strong>TMS (Translation Management System) (memoQ, Weblate)</strong> that is integrated with <strong>AI tools (DeepL) for an MTPE (Machine Translation Post-Editing) approach</strong> to the translation process</li>
        <li>Working with <strong>.po/.pot files</strong> for the translation</li>
        <li>Implementing <strong>internationalization(i18n)/localization(i10n)</strong> best practices for the product and the documentation</li>
        <li>Building a <strong>glossary/terminology database</strong> for the product and the documentation</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Design">
      <ul>
      <li>Designing <strong>icons, vectors and other small graphics</strong> for the documentation</li>
      <li>Designing <strong>technical diagrams</strong> and <strong>flow charts</strong> for the documentation</li>
      <li>Taking and annotating <strong>screenshots and screen captures/videos</strong> of the product UI</li>
      <li>Creating <strong>wireframes, mockups and prototypes</strong> with <strong>Figma</strong></li>     
      <li>Web design principles like <strong>SEO, accessibility and responsive design</strong></li>
      <li>Frontend web technologies like <strong>HTML, CSS, JavaScript, SASS/SCSS, Tailwind CSS, Node.js/npm and React</strong></li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      
      <Collapsible title="Workflow">
      <ul>
        <li>Following a <strong>technical writing process</strong> including <strong>reviews/edits</strong> with senior technical writers or development</li>
        <li>Working in a <strong>Scrum team/process</strong> as a technical writer</li>
        <li>Working in an <strong>international, remote-first, cross-functional team</strong> across different timezones</li>
        <li>Communicating with <strong>different departments and stakeholders</strong> to gather requirements and do user research for the documentation</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Additional">
      <ul>
        <li>Familiarity with several <strong>programming languages (C/C++, Java, Python)</strong></li>
        <li>Ability to use the <strong>Terminal/CLI</strong> in Windows and Linux (Bash)</li>
        <li>Familiarity with science/data analysis tools like <strong>PowerBI, Tableau, SQL</strong></li>
        <li>Knowledge in <strong>Networking/IoT technologies</strong> (Cisco Certifications)</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Work Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="block group flex flex-col">
              <div className="text-lg mb-2">{job.title} ({job.industry})</div>
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {job.company}, {job.location}
                  </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {job.duration}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
