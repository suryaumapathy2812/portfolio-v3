import GithubRepoCard from "@/components/github-repo-card";
import Link from "next/link";

const repos = [
  {
    name: "PageTrail - Chrome Extension",
    description: [
      "A Google Chrome extension developed using Next.js 14, designed to track the time spent on different websites. It records the active time on each website, aggregates it at the domain level, and provides a summary view of web activity. The extension includes features like URL filtering, daily data reset, and sending usage statistics to a server.",
      // "Tech Stack: Next.js, Chrome Extensions API",
    ],
    link: "https://github.com/side-projectz/page-trail",
  },
  {
    name: "Code-Chat - VS Code Extension",
    description: [
      "chat-code is a Visual Studio Code extension that enables developers to interact with their codebase through natural language. This extension allows you to ask questions, get explanations, and even request code modifications or enhancements by simply chatting with your code. It's like having a conversation with your codebase to streamline your development process.",
      // "Tech Stack: TypeScript, VS Code API",
    ],
    link: "https://marketplace.visualstudio.com/items?itemName=suryaumapathy2812.chat-code"
  },
  {
    name: "Zord - Slack Bot",
    description: [
      "A dynamic Slack bot designed to create polls, collect responses, and provide real-time statistics directly within Slack channels. This bot enables users to easily create different types of polls, gather instant feedback, and visualize results, enhancing team collaboration and decision-making.",
      // "Tech Stack: NestJS, Slack API, MongoDB",
    ],
    link: "https://github.com/suryaumapathy2812/slack_schedule_bot/tree/v3",
  },
   {
    name: "Topic Tagging - GitHub Action",
    description: [
      "A GitHub Action that scans a repository and traverses the code to identify the JavaScript concepts implemented in the codebase. It helps developers understand the key topics and patterns used in their projects.",
      // "Tech Stack: JavaScript, GitHub Actions",
    ],
    link: "https://github.com/suryaumapathy2812/topic-tagger-action",
  },
  {
    name: "ESLint Scoring - GitHub Action",
    description: [
      "A GitHub Action that scans a repository using ESLint and generates a score based on the configured ESLint rules and the results from the codebase. It provides an objective measure of code quality and adherence to coding standards.",
      // "Tech Stack: JavaScript, ESLint, GitHub Actions",
    ],
    link: "https://github.com/suryaumapathy2812/ESlint-score",
  },
  {
    name: "CSS Units Playground - Web Tool",
    description: [
      "An interactive website that allows users to explore and understand different CSS units by adjusting their values in real-time. The text is updated instantly to reflect the equivalent unit size, providing a practical demonstration of each unit's effect.",
      // "Tech Stack: HTML, CSS, JavaScript",
    ],
    link: "https://github.com/suryaumapathy2812/CSS-Unit-playground",
  },
  {
    name: "Flexbox Playground - Web Tool",
    description: [
      "A web-based tool similar to CSS Units Playground but focused on Flexbox properties. Users can toggle between different Flexbox options to see how elements are positioned and adjusted on the screen in real-time.",
      // "Tech Stack: HTML, CSS, JavaScript",
    ],
    link: "https://github.com/suryaumapathy2812/flexbox-playground",
  },
  {
    name: "Notify JS - Toast Library",
    description: [
      "A CDN-powered JavaScript library that simplifies the creation of toast notifications in web applications. Notify JS allows developers to quickly integrate and customize toast notifications with minimal setup.",
      // "Tech Stack: JavaScript, CDN",
    ],
    link: "https://github.com/suryaumapathy2812/notify__js",
  },
  {
    name: "PDF Generator - NPM Library",
    description: [
      "An npm library that serves as a wrapper for Adobe PDF services, enabling the creation of PDFs from various document templates like DOCX and XLSX. It streamlines the process of generating PDFs from multiple document formats with ease.",
      // "Tech Stack: Node.js, Adobe PDF Services",
    ],
    link: "https://github.com/suryaumapathy2812/PDF-service",
  },
 
  {
    name: "Doc-Con - AI Document Reader",
    description: [
      "A Python project leveraging OpenAI's capabilities to allow users to upload a document and ask questions to get detailed information from the document. It provides a convenient way to extract insights and data from large documents using AI.",
      // "Tech Stack: Python, OpenAI API",
    ],
    link: "https://github.com/suryaumapathy2812/Doc-Con",
  },
];

export default function Page() {
  return (
    <section className="">
      <h1 className="font-medium text-2xl mb-8">my project</h1>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert grid grid-cols-1 font-light">
        {repos.map((repo, idx) => (
          <ProjectItem
            key={idx}
            name={repo.name}
            description={repo.description}
            link={repo.link}
          />
        ))}
      </article>
    </section>
  );
}

function ProjectItem(props: {
  name: string;
  description: string[];
  link: string;
}) {
  return (
    <>
      <h2 className="mb-0 font-medium">
        <Link className="no-underline" href={props.link}>{props.name}</Link>
      </h2>
      <div>
        {props.description.map((desc, idx) => (
          <p className="text-muted-foreground" key={idx}>{desc}</p>
        ))}
      </div>
    </>
  );
}
