import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image src="/avatar-2.png" alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized width={160} height={160} priority />
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Jana, a technical writer!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>I am a <strong>technical writer in the robotics/automation industry</strong> with 3+ years of experience in creating technical documentation for complex software products.</p>
        <p>I'm proficient in writing the technical documentation in <strong>lightweight markup languages</strong> like Markdown and reStructuredText (reST), but I can also utilize <strong>DITA principles</strong> to build a solid information architecture.</p>
        <p>Additional skills include designing technical diagrams, wireframing and prototyping in Figma, creating or maintaining a style guide, handling translation workflows, as well as writing the release notes and correcting UI strings.</p>
        <p>Read more <a href="/about">about me</a>, check out my <a href="/blog">blog</a>, or take a look at my <a href="/projects">recent projects.</a></p>
      </div>
    </section>
  );
}
