import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p className="text-justify">
          Hello and welcome! I&apos;m <strong>Veerendra Beerala</strong> a
          passionate Full Stack Developer with a deep interest in Machine
          Learning, Deep Learning, and Natural Language Processing. My journey
          in the tech industry has been a thrilling ride, constantly pushing the
          boundaries of what&apos;s possible.
        </p>

        <p className="text-justify">
          As a Full Stack Developer, I&apos;ve honed my skills in creating
          seamless and dynamic web applications. I love every part of the
          development process, from brainstorming and designing to coding and
          debugging. I&apos;m proficient in a variety of languages and
          frameworks, always staying updated with the latest trends and
          technologies.
        </p>
        <p className="text-justify">
          But that&apos;s not all! My fascination with the power of data led me
          to explore Machine Learning and Deep Learning. I&apos;ve delved into
          the world of algorithms and neural networks, working on projects that
          transform raw data into meaningful insights. I&apos;m particularly
          interested in Natural Language Processing, where I get to combine my
          love for coding with the complexities of human language. Every project
          I undertake is a new learning opportunity, a chance to improve and
          innovate. I believe in the power of technology to solve complex
          problems and make our lives easier. And I&apos;m excited to be part of
          this ever-evolving journey. Feel free to explore my portfolio to see
          the projects I&apos;ve worked on. If you have any questions or just
          want to chat, don&apos;t hesitate to get in touch!
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
          I also have experience with Android development but have stopped
          working with it a few years ago. I prefer web development because you
          can use a modern website on almost every device and reach the whole
          world with it.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://smartdiary.co"
              className="text-primary hover:underline"
            >
              SmartDiary.co
            </a>{" "}
            - An AI-powered journaling app
          </li>
          <li>
            <Link
              href="https://books-ai.app"
              className="text-primary hover:underline"
            >
              Books-AI.app
            </Link>{" "}
            - An AI book recommendation app
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
      </section>
    </section>
  );
}
