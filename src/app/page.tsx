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
              As a Senior Executive at{" "}
              <code className="ml-1 no-underline">
                <Link
                  href={
                    "https://www.freshworks.com/company/philanthropy/software-academy/"
                  }
                >
                  FSSA
                </Link>
              </code>
              , I specialize in developing and managing web applications with a
              strong focus on technical infrastructure. My passion lies in
              creating innovative solutions for complex challenges, particularly
              in the realms of web development, AI, and machine learning. With a
              commitment to continuous learning and improvement, I strive to
              push the boundaries of what’s possible in the tech world.
            </p>
            <p>
              Outside of work, I maintain a balanced lifestyle by playing
              badminton, which keeps me both mentally and physically sharp.”
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
                At Freshworks, I contribute to the STS Software Academy (FSSA),
                a transformative social impact initiative aimed at empowering
                students from low-income families through comprehensive software
                skills education. My role involves developing robust web
                applications, mentoring students, and maintaining the technical
                infrastructure that supports this initiative. Through my work, I
                am committed to leveraging technology to create lasting social
                change.
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
                During my time at Assay Clinical Research, I played a key role
                as a Full Stack Developer in modernizing and enhancing their
                SaaS applications designed to streamline the clinical trial
                process. I focused on improving database architecture and
                upgrading the technology stack, significantly boosting the
                performance and scalability of the applications.
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
                At Spinsoft Learning Solutions, I worked as a Front-End
                Developer dedicated to improving the user experience of
                educational tools. My efforts were centered around refining the
                user interface to create more efficient, user-friendly products
                that enhance learning outcomes and provide a more enjoyable
                experience for users.
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
                  4 Years
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="md:flex block md:items-center w-full space-x-4">
                <div className="shrink-0 inline font-medium">
                  NodeJS, Express, NestJS
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
