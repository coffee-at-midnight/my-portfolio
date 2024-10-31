import Image from "next/image";
import Collapsible from '../components/collapsible';

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
        <p><strong>Hi all and welcome on my blog! ヾ(＠⌒ー⌒＠)ノ</strong></p>
        <li>I'm a technical writer in the robotics/automation industry.</li>
        <li>Have a lot of experience with data science.</li>
        <li>Currently working on planning and implementing a new documentation platform built with Markdown/MDX and a React-based SSG (Gatsby or Next.js).</li>
        <li>Usually busy with writing things, coding things, waiting for trains, or drinking coffee.</li>
        </div>
      </div>
    
      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Bio</h2>
      <div className="prose prose-neutral dark:prose-invert">
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Skills</h2>
      <div className="prose prose-neutral dark:prose-invert">
      <Collapsible title="✒️ Technical Writing">
      <ul>
        <li>Writing the technical documentation in <strong>English (US or UK/AUS/NZ)</strong> and <strong>German</strong></li>
        <li>Applying <strong>DITA principles</strong> to structure and modularize the technical documentation</li>
        <li>Creating an <strong>information architecture</strong> for a software product/software module and developing the documentation of a <strong>completely new product/module</strong> by mapping all features and functionalities</li>
        <li>Including predefined, reusable <strong>templates and layouts</strong> as well as <strong>FAQs and admonitions</strong> for modular content</li>
        
        <li>Designing <strong>technical diagrams</strong> for the documentation, Including <strong>annotated screenshots and screen captures</strong> of the product UI</li>
        <li>Designing <strong>technical diagrams</strong> for the documentation and taking/annotating <strong>screenshots and screen captures of the UI</strong></li>
        
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="💾 Documentation">
      <ul>
        <li>Creating the technical documentation of a <strong>software product, platform or module</strong></li>
        <li>Writing precise <strong>process documentation</strong> and <strong>step-by-step user guides</strong></li>
         <li>Writing the <strong>API documentation</strong> and using Swagger to generate specifications according to OpenAPI standard in JSON/YAML format</li>
        <li>Writing or maintaining the <strong>release notes</strong> of a software product</li>
        <li>Writing or maintaining a <strong>style guide</strong> for the technical documentation (Familiarity with the IBM Style Guide, Microsoft Writing Style Guide, Google Developer Documentation Style Guide)</li>
        <li>Implementing <strong>standards</strong> for the technical documentation like ISO 27001 and following <strong>QA measures/reviews</strong> during the technical writing process</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="⚙️ Toolsuite">
      <ul>
        <li>Creating the technical documentation with a <strong>lightweight markup language (Markdown, reStructuredText (reST))</strong> and a <strong>static site generator (Jekyll, MkDocs, Sphinx, Astro, Gatsby, Next.js)</strong></li>
        <li>Working in a development environment for technical writing including <strong>code editor/IDE (VS Code), version control system (Git & GitHub/GitLab), CI/CD pipelines, and deployment process</strong></li>
        <li>Familiarity with <strong>Confluence</strong> as a knowledge management base for internal documentation and <strong>WordPress</strong> as a CMS for blogging</li>    
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="🌏 Translation">
      <ul>
        <li>Implementing <strong>internationalization(i18n)/localization(i10n)</strong> best practices</li>
        <li>Using a <strong>TMS (Translation Management System) (memoQ, Weblate)</strong> to maintain the translation of the technical documentation into multiple other languages</li>
        <li>Working with <strong>AI tools (DeepL)</strong> for MTPE (Machine Translation Post-Editing) and using a <strong>translation pipeline with .po/.pot files</strong></li>
        <li>Correcting and translating <strong>UI strings</strong> in the product and the documentation</li>
        <li>Maintaining a <strong>glossary/terminology database</strong> for the documentation</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="📍 Design">
      <ul>
      <li>Creating <strong>wireframes, mockups, and prototypes</strong> with <strong>Figma</strong></li> 
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      
      <Collapsible title="💬 Workflow">
      <ul> 
        <li>Following a <strong>technical writing process</strong> including <strong>reviews/edits</strong> with senior technical writers or development</li>       
        <li>Using <strong>boards (Jira, Trello)</strong> for task management/distribution</li>
        <li>Working in a <strong>Scrum team/process</strong> as a technical writer</li>
        <li>Communicating with <strong>different departments and stakeholders</strong> to gather requirements for the technical documentation</li>
        <li>Working in a <strong>remote-first, asynchronous, international team</strong> and managing timezone differences between Europe and AUS/NZ</li>
      </ul>
      </Collapsible>
      <hr className="mt-5 mb-5"/>
      <Collapsible title="Additional">
      <ul>
        
      <li>Having <strong>product ownership</strong> of the technical documentation, Working in product management and implementing the product strategy in the documentation</li>
        <li>Planning, designing and implementing a <strong>new documentation portal</strong></li>
       
        <li>Implementing web design principles in the technical documentation like <strong>SEO</strong>, <strong>accessibility</strong> and <strong>responsive design</strong></li>
        <li>Frontend web technologies like <strong>HTML, CSS, SCSS/SASS, TailwindCSS, JavaScript, Node.js/npm, React/Next.js</strong></li>
        <li>Familiarity with several <strong>programming languages (C/C++, Java, Python)</strong></li>
      </ul>
      </Collapsible>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-medium tracking-tight">My Work Experience</h2>

      <h3 className="mt-10 mb-8 text-lg font-medium tracking-tight">Technical Writer (AUVESY-MDT) - June 2024</h3>
      <h3 className="mt-10 mb-8 text-lg font-medium tracking-tight">Technical Writer (Freelance/Contract) - July 2022 to June 2024</h3>
    </section>
  );
}
