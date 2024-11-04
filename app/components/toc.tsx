import React from "react";

function createListItem(heading) {
    console.log(heading);
    if (heading.depth == 2){
        return(
        <li key={heading.slug}>
                <a href={`#${heading.slug}`}>
                {heading.text}
                </a>
        </li>)
    }
    else if (heading.depth == 3){
        return(
        <li key={heading.slug} className="ml-5">
                <a href={`#${heading.slug}`}>
                {heading.text}
                </a>
        </li>)
    }
    else if (heading.depth == 4){
        return(
        <li key={heading.slug} className="ml-8">
                <a href={`#${heading.slug}`}>
                {heading.text}
                </a>
        </li>)
    }
    else if (heading.depth == 5){
        return(
        <li key={heading.slug} className="ml-10">
                <a href={`#${heading.slug}`}>
                {heading.text}
                </a>
        </li>)
    }
}
  
const TableOfContents = ({ headings }) => {
    return (
        <nav>
        <h4>Table of Contents (ToC)</h4>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 list-none pl-0">
            {headings.map((heading) => (
             createListItem(heading)
            ))}
        </ul>
        </nav>
    );
}

export default TableOfContents;