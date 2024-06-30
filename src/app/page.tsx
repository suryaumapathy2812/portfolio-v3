import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <section className="">
      <article className="prose prose-base prose-quoteless prose-neutral dark:prose-invert grid grid-cols-1 font-light">
        <h1 className="font-medium text-2xl mb-4">
          hello, I'm Surya Umapathy 👋🏼{" "}
        </h1>
        <div className="flex flex-row space-x-4 items-start">
          <div>
            <p className="">
              I'm passionate about building complex web applications and solving
              challenging problems. Currently, I work as a Senior Executive at
              <code className="ml-2 no-underline">
                <Link
                  href={
                    "https://www.freshworks.com/company/philanthropy/software-academy/"
                  }
                >
                  FSSA
                </Link>
              </code>
              , where I develop web applications and manage the technical
              infrastructure. My interests lie in web development and exploring
              the potentials of AI and machine learning.
            </p>
            <p>
              When I'm not coding or brainstorming new solutions, I enjoy
              playing badminton. It helps me stay active and sharp, both
              mentally and physically.
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 items-start mt-8">
          <h2 className="m-1.5 uppercase text-xs font-medium tracking-widest text-muted-foreground">
            Work
          </h2>

          <div className="space-y-8">
            <div className="space-y-3.5 w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">Freshworks</div>
                <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
                <div className="text-sm shrink-0 inline text-muted-foreground">
                  2021 - Present
                </div>
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-6">
                Freshworks STS Software Academy (FSSA) is a social impact
                initiative by Freshworks Technologies Pvt Ltd, designed to
                empower students from low-income families through software
                skills education. I develop web applications, teach students,
                and maintain the technical infrastructure, helping transform
                lives through technology.
              </div>
            </div>

            <div className="space-y-3.5 w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">
                  Assay Clinical Research
                </div>
                <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
                <div className="text-sm shrink-0 inline text-muted-foreground">
                  2020 - 2021
                </div>
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-6">
                Assay Clinical Research develops SaaS applications to automate
                the clinical trial process. I worked as a Full Stack Developer,
                focusing on database architecture and modernizing the tech
                stack, enhancing the performance and scalability of their
                applications.
              </div>
            </div>

            <div className="space-y-3.5 w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">Spinsoft</div>
                <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
                <div className="text-sm shrink-0 inline text-muted-foreground">
                  2019 - 2020
                </div>
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-6">
                Spinsoft Learning Solutions Pvt Ltd creates educational products
                to improve learning outcomes. As a Front-End Developer, I
                improved the user interface of educational tools, making them
                more efficient and enjoyable for users.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4 items-start mt-14">
          <h2 className="m-1.5 uppercase text-xs font-medium tracking-widest text-muted-foreground">
            Tech
          </h2>

          <div className="space-y-4 w-full">
            <div className="w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">
                  React, NextJS, Angular, TypeScript
                </div>
                <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
                <div className="text-sm shrink-0 inline text-muted-foreground">
                  4  Years
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">
                  NodeJS, Express, NestJS, SpringBoot
                </div>
                <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
                <div className="text-sm shrink-0 inline text-muted-foreground">
                  3+ Years
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">
                  AWS, GCP, Docker
                </div>
                <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
                <div className="text-sm shrink-0 inline text-muted-foreground">
                  1+ Years
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>
    </section>
  );
}
