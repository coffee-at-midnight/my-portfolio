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
        <li>I prefer writing in Markdown/MDX or DITA/XML. 🪄</li>
        <li>I'm currently conceptualising a new documentation portal in Markdown/MDX and Next.js. 💾</li>
        <li>Apparently I need to learn React to slay properly. 💻</li>
        <li>Only semi-coherent before 8 AM, I don't like taking the train to Karlsruhe. ☕</li>
        <li>I think it's high time to get rid of reST. 🌏</li>
        </div>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Bio</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>I'm a technical writer in the robotics/automation industry with 3+ years of experience in creating software documentation.</p>
        <p>My skills include writing the technical documentation in my main languages English and German, as well as managing translations, writing the release notes, writing API documentation, correcting UI strings and creating a style guide for the documentation.</p>
        <p>I am well-versed in writing in lightweight markup languages like Markdown and reStructuredText (reST), but I can also apply DITA principles to structure the documentation and build a solid information architecture.</p>
        <p>My most recent experience includes having ownership of the technical documentation in the corporation and conceptualising a new documentation portal.</p>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Skills</h2>
      <div className="prose prose-neutral dark:prose-invert">
      <Collapsible title="Technical Writing">
      <ul>
        <li>Experience with writing the technical documentation for software products, platforms or modules in <strong>English (US or UK/AUS/NZ)</strong> and <strong>German</strong></li>
        <li>Experience with writing the <strong>release notes</strong> of a software product and following the software development life cycle/release cycle</li>
        <li>Experience with writing <strong>API documentation</strong> and using Swagger to generate specifications according to OpenAPI standard in JSON/YAML format</li>
        <li>Experience with writing <strong>process documentation</strong> and <strong>step-by-step user guides</strong></li>
        <li>Experience with including <strong>FAQs, admonitions and templates</strong> in the documentation</li>
        <li>Experience with writing <strong>technical blog articles, training guides, whitepapers, datasheets</strong> and other supporting materials</li>
        <li>Ability to create or maintain a <strong>style guide</strong> for the technical documentation (Familiarity with the IBM Style Guide, Microsoft Writing Style Guide, Google Developer Documentation Style Guide)</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Concept Planning">
      <ul>       
         <li>Experience with planning, designing and implementing a <strong>new documentation portal</strong> in the corporation including writing a concept plan/project plan</li>
         <li>Experience with having <strong>product ownership of the technical documentation</strong> and implementing the product strategy (documentation as part of the product)</li>
         <li>Experience with creating an <strong>information architecture</strong> for a software product/software module and developing the documentation of a <strong>completely new product/module</strong> by mapping all features and functionalities</li>
         <li>Ability to apply <strong>DITA principles</strong> to structure and modularize the technical documentation (structured/modular content)</li>
         <li>Knowledge of <strong>industry standards</strong> for the technical documentation (ISO 27001) and how to implement them with <strong>QA measures/reviews</strong></li>       
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Toolsuite">
      <ul>
        <li>Experience with using a <strong>lightweight markup language (Markdown, reStructuredText (reST))</strong> and a <strong>static site generator (Jekyll, MkDocs, Sphinx, Astro, Gatsby, Next.js)</strong> to create the technical documentation</li>
        <li>Experience with working in a development environment for technical writing including <strong>code editor/IDE (VS Code), version control system (Git & GitHub/GitLab), CI/CD pipelines, and deployment process</strong></li>
        <li>Experience with using a <strong>knowledge base management system (Confluence)</strong> for internal and external documentation</li>
        <li>Experience with using a <strong>CMS (WordPress)</strong> or <strong>Headless CMS (Netlify)</strong></li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Translation">
      <ul>
        <li>Experience with <strong>translating the technical documentation</strong> as well as <strong>UI strings</strong> into English or German</li>
        <li>Experience with using a <strong>TMS (Translation Management System) (memoQ, Weblate)</strong> that is integrated with <strong>AI tools (DeepL) for an MTPE (Machine Translation Post-Editing) approach</strong> to the translation process</li>
        <li>Ability to work with <strong>.po/.pot files</strong> for the translation</li>
        <li>Ability to implement <strong>internationalization(i18n)/localization(i10n)</strong> best practices</li>
        <li>Ability to build a <strong>glossary/terminology database</strong> for the documentation</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Design">
      <ul>
      <li>Background in <strong>graphic design</strong> with the ability to design <strong>icons, vectors and other small graphics</strong> for the documentation</li>
      <li>Skill in designing <strong>technical diagrams</strong> and <strong>flow charts</strong> for the documentation</li>
      <li>Ability to take and annotate <strong>screenshots and screen captures/videos</strong> of the product UI and include them in the documentation</li>
      <li>Ability to create <strong>wireframes, mockups and prototypes</strong> with <strong>Figma</strong></li>     
      <li>Ability to implement web design principles in the documentation like <strong>SEO, accessibility and responsive design</strong></li>
      <li>Knowledge in frontend web technologies like <strong>HTML, CSS, JavaScript, SASS/SCSS, Tailwind CSS, Node.js/npm and React</strong> with the ability to create the presentational layer of the documentation as well (complementing SSGs)</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      
      <Collapsible title="Workflow">
      <ul>
        <li>Experience with following a <strong>technical writing process</strong> icluding <strong>reviews/edits</strong> with senior technical writers or development</li>
        <li>Experience with working in a <strong>Scrum team/process</strong> as a technical writer</li>
        <li>Ability to use <strong>boards (Jira, Trello)</strong> for task management/distribution</li>
        <li>Experience with working in an <strong>international, cross-functional team</strong></li>
        <li>Experience with communicating with <strong>different departments and stakeholders</strong></li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Additional">
      <ul>
        <li>Familiarity with several <strong>programming languages (C/C++, Java, Python)</strong></li>
        <li>Ability to use the <strong>Terminal/CLI</strong> in Windows and Linux (Bash)</li>
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
