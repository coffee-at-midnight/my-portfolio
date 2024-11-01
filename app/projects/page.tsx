import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects portfolio of a technical writer.",
};

// Iterates over each project in projects with map function
export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="block group flex flex-col">
            <div className="text-lg mb-2">{project.title}</div>
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.tech_stack}
                  </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3 pb-1">{project.description}</p>
              {project.url.map((url, index) => (
                <p className="prose prose-neutral dark:prose-invert text-sm">{url}</p>
              )

              )}
          </div>
        ))}
      </div>
    </section>
  );
}
