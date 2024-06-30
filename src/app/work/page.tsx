import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const work = [
  {
    company: "Freshworks",
    position: "Senior Executive - CSR",
    date: "Nov ’21 - Present",
    description: [
      "I have been part of a team dedicated to training over 120 students at the Freshworks STS Software Academy (FSSA). We focused on web development, Ruby, Java, and MySQL, ensuring that students learned modern and essential programming skills. Our goal was to equip them with the knowledge needed to succeed in the tech industry.",
      "In 2022, developed a comprehensive admissions system for FSSA. This system brought together various applications to handle over 3500 candidate applications, filter them at different stages, and communicate through email and WhatsApp. The system integrated test-taking, CRM capabilities, and automation features to streamline the admissions process.",
      "On the infrastructure side, Collaborated with colleagues to manage student projects hosted on AWS and E2E Networks, ensuring that these projects were robust and always available. We set up CI/CD pipelines for student projects and managed codebases on GitHub, promoting best practices in version control and deployment.",
      "I also played a significant role in developing a volunteer management tool for Freshworks employees and creating educational applications to enhance student learning. These tools helped speed up the code evaluation process by automating parts of it, making the learning experience more efficient and effective.",
    ],
  },
  {
    company: "Assaycr",
    position: "Software Engineer",
    date: "Apr ’20 - Oct ’21",
    description: [
      "Was part of the team responsible for implementing OAuth (Single Sign-On) and email communication services across three key applications. This was a part of our broader effort to migrate from a monolithic architecture to a modern microservices approach.",
      "Our team successfully transitioned legacy systems from PHP to a contemporary web technology stack, leveraging Angular for the frontend. This migration improved the performance and scalability of our applications, aligning them with current web standards and practices.",
      "As part of a three-member team, I contributed to designing and implementing efficient database architectures for two major projects, UNITE and SAGE. This involved creating robust, scalable databases that formed the foundation of these critical projects, ensuring they met the demands of our business requirements and provided reliable data handling capabilities.",
    ],
  },
  {
    company: "Spinsoft Learning Solution",
    position: "Software Engineer",
    date: "June ’19 - Apr ’20",
    description: [
      "At Spinsoft Learning Solution, I worked as a Frontend Developer, focusing on making our databases better and faster. I helped improve the front-end of our applications, making them easier and more enjoyable for users to interact with.",
      "I worked with the team to integrate APIs, which allowed different parts of our applications to communicate better. This experience helped me understand how to improve both the front and back ends of our applications to create a smoother user experience.",
    ],
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">my work</h1>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert text-gray-700 dark:text-gray-300 font-light">
        {/* <p>
          I am a software engineer with a passion for building products that
          solve real-world problems. I have experience building Full-Stack Web
          application using modern technologies.
        </p>

        <Separator className="my-6" /> */}

        <h2 className="mb-0 font-medium">Freshworks</h2>
        <span className="text-muted-foreground text-sm">
          {" "}
          Senior Executive - CSR, Nov ’21 - Present{" "}
        </span>

        <p>
          I have been part of a team dedicated to training over 120 students at
          the{" "}
          <Link
            className="dark:text-gray-200 hover:underline"
            href={
              "https://www.freshworks.com/company/philanthropy/software-academy/"
            }
            target="_blank"
          >
            Freshworks STS Software Academy (FSSA)
          </Link>
          . We focused on web development, Ruby, Java, and MySQL, ensuring that
          students learned modern and essential programming skills. Our goal was
          to equip them with the knowledge needed to succeed in the tech
          industry.
        </p>
        <p>
          In 2022, developed a comprehensive admissions system for FSSA. This
          system brought together various applications to handle over 3500
          candidate applications, filter them at different stages, and
          communicate through email and WhatsApp. The system integrated
          test-taking, CRM capabilities, and automation features to streamline
          the admissions process.
        </p>
        <p>
          On the infrastructure side, Collaborated with colleagues to manage
          student projects hosted on AWS and E2E Networks, ensuring that these
          projects were robust and always available. We set up CI/CD pipelines
          for student projects and managed codebases on GitHub, promoting best
          practices in version control and deployment.
        </p>
        <p>
          I also played a significant role in developing a volunteer management
          tool for Freshworks employees and creating educational applications to
          enhance student learning. These tools helped speed up the code
          evaluation process by automating parts of it, making the learning
          experience more efficient and effective.
        </p>

        <Separator className="my-6" />

        <h2 className="mb-0">Assaycr</h2>
        <span className="text-muted-foreground text-sm">
          {" "}
          Software Engineer, Apr ’20 - Oct ’21
        </span>
        <p>
          Was part of the team responsible for implementing OAuth (Single
          Sign-On) and email communication services across three key
          applications. This was a part of our broader effort to migrate from a
          monolithic architecture to a modern microservices approach.
        </p>

        <p>
          Our team successfully transitioned legacy systems from PHP to a
          contemporary web technology stack, leveraging Angular for the
          frontend. This migration improved the performance and scalability of
          our applications, aligning them with current web standards and
          practices.
        </p>

        <p>
          As part of a three-member team, I contributed to designing and
          implementing efficient database architectures for two major projects,
          UNITE and SAGE. This involved creating robust, scalable databases that
          formed the foundation of these critical projects, ensuring they met
          the demands of our business requirements and provided reliable data
          handling capabilities.
        </p>

        <Separator className="my-6" />

        <h2 className="mb-0">Spinsoft Learning Solution</h2>
        <span className="text-muted-foreground text-sm">
          {" "}
          Software Engineer, June ’19 - Apr ’20{" "}
        </span>

        <p>
          At Spinsoft Learning Solution, I worked as a Frontend Developer,
          focusing on making our databases better and faster. I helped improve
          the front-end of our applications, making them easier and more
          enjoyable for users to interact with.
        </p>
        <p>
          I worked with the team to integrate APIs, which allowed different
          parts of our applications to communicate better. This experience
          helped me understand how to improve both the front and back ends of
          our applications to create a smoother user experience.
        </p>
      </article>
    </section>
  );
}
