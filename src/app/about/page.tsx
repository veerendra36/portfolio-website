import Skills from "@/components/skills";

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Veerendra Beerala and his work.",
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
      <Skills />
    </section>
  );
}
