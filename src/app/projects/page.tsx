import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import thoughtThesis from "@/assets/thoughtThesisDemo.png.jpg";
import itasks from "@/assets/itasks.jpg";
import codeQuest from "@/assets/codeQuest.jpg";
import { PinContainer } from "@/components/ui/3d-animated";

export const metadata: Metadata = {
  title: "Projects",
  description: "Take a look at the projects that Veerendra build.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Projects</H1>
      <section className="space-y-3">
        <H2>Code Quest</H2>
        <PinContainer title="Code Quest" href="https://twitter.com/mannupaaji">
          <div className="flex h-[20rem] w-[45rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <Image
              src={codeQuest}
              alt="Thought Thesis Demo"
              className="rounded-md"
            />
          </div>
        </PinContainer>
        <br></br>
        <p className="top-3 mt-5 pt-5 text-justify">
          Introducing a{" "}
          <strong>community-driven platform designed for students</strong> and
          developers alike to ask and answer programming questions, share
          knowledge, and collaborate effectively. This platform is more than
          just a Q&A forum; it&apos;s a hub for learning and growth. The
          platform is built using <strong>Next.js 14</strong>, a powerful
          JavaScript framework known for its efficiency and flexibility. One of
          the key features of Next.js 14 that we&apos;ve utilized is{" "}
          <strong>Server Actions</strong>, a new feature that simplifies the
          development of full-stack applications. Server Actions allow
          developers to write server-side logic directly in Next.js, making the
          development process smoother and more efficient.{" "}
        </p>
        <p className="text-justify">
          The user interface of the platform is designed with{" "}
          <strong>Shadcn</strong>, a UI library that provides a wide range of
          customizable components. This ensures a clean, intuitive, and visually
          appealing user experience. For user authentication, we&apos;ve
          integrated <strong>Clerk</strong>, a robust and secure authentication
          service. This ensures that user data is secure and access is
          controlled effectively. The platform uses <strong>MongoDB</strong> as
          its database, a popular NoSQL database known for its scalability and
          flexibility. This allows us to handle a large amount of data and
          perform complex queries with ease. One of the standout features of the
          platform is the integration of <strong>OpenAI</strong> for generating
          answers to questions. While this feature is not necessary, it can be
          incredibly helpful for students. By leveraging the power of GPT, we
          can provide instant, AI-generated answers to a wide range of
          programming questions.{" "}
          <strong>
            Our main goal with this platform is to create a useful application
            for our fellow students at our university
          </strong>
          . We started with the idea of providing solutions to their queries,
          not just academic but any kind of queries. The platform allows
          students to connect with each other, get help, and learn together.
        </p>{" "}
        Here is the live demo..{" "}
        <a
          href="https://github.com/veerendra36/CodeQuest"
          className="text-primary hover:underline"
        >
          Code Quest
        </a>
        .
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Thought Thesis</H2>
        <PinContainer
          title="Thought Thesis"
          href=""
        >
          <div className="flex h-[20rem] w-[45rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <Image
              src={thoughtThesis}
              alt="Thought Thesis Demo"
              className="rounded-md"
            />
          </div>
        </PinContainer>
        <br></br>
        <p className="top-5 mt-5 pt-5 text-justify">
          I have developed an intelligent note-taking application that
          seamlessly integrates Artificial Intelligence. This application was
          built using a diverse range of cutting-edge technologies. It utilizes{" "}
          <strong>OpenAI</strong> for advanced AI capabilities, enhancing the
          user experience with smart features such as automated note
          organization and predictive text. The application&apos;s robust
          backend is powered by <strong>Next.js</strong>, a leading framework
          for building React applications. This ensures high performance and
          scalability, making the app capable of handling a large number of
          users and data.{" "}
        </p>
        <p className="text-justify">
          The user interface was designed with <strong>Shadcn UI</strong>{" "}
          providing a clean, intuitive, and visually appealing user experience.
          These UI libraries allowed for a highly customizable and interactive
          interface, making note-taking a breeze for the users. Furthermore, the
          application incorporates <strong> Pinecone</strong>, a vector database
          that enables efficient similarity search of items, enhancing the
          search functionality within the app. This allows users to easily find
          notes based on their content, making the retrieval process quick and
          efficient. Lastly, the application uses <strong>Clerk</strong> for
          user authentication, ensuring that user data is secure and access is
          controlled effectively. This adds an extra layer of security, making
          sure that the user&apos;s notes are private and safe. The combination
          of these technologies has made this application a powerful tool for
          note-taking, offering users an efficient and enjoyable way to organize
          their thoughts, ideas, and information.
        </p>{" "}
        Here is the live demo..{" "}
        <a
          href="https://thought-thesis-ai-chat-box-implementation-yogi.vercel.app/"
          className="text-primary hover:underline"
        >
          Thought Thesis
        </a>
        .
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>i Tasks</H2>
        <PinContainer title="i Tasks" href="https://i-tasks.vercel.app/">
          <div className="flex h-[20rem] w-[45rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <Image
              src={itasks}
              alt="Thought Thesis Demo"
              className="rounded-md"
            />
          </div>
        </PinContainer>
        <br></br>
        <p className="top-3 mt-5 pt-5 text-justify">
          Boost your productivity with <strong>iTasks</strong>, a task
          management application designed to simplify task management and help
          you master your time effectively. This application is built using{" "}
          <strong>React.js</strong> and <strong>Next.js</strong>, two powerful
          JavaScript libraries known for their efficiency and flexibility. These
          technologies have been used to create a stunning and intuitive user
          interface, making task management a seamless experience. One of the
          key features of iTasks is its use of <strong>local storage</strong>.
          This allows the application to maintain its state even when the page
          is refreshed or closed, ensuring that your tasks are always saved and
          up-to-date. This feature enhances the user experience by providing
          consistency and reliability, making iTasks a dependable tool for
          managing your tasks.
        </p>{" "}
        Here is the live demo..{" "}
        <a
          href="https://i-tasks.vercel.app/"
          className="text-primary hover:underline"
        >
          i Tasks
        </a>
        .
      </section>
      <H1>Research Works</H1>
      <section className="space-y-3">
        <H2>Drug Classification using Deep Learning</H2>
        <p className="text-justify">
          This research work focuses on drug classification. We developed a
          Convolution Neural Network (CNN) based model for the identification
          and classification of various types of medicinal capsules.{" "}
          <strong>
            The aim of this work was to enhance the efficiency and accuracy of
            drug detection, given the direct impact of capsule quality on health
          </strong>
          . The model was trained using images of a variety of capsules and
          utilized several architectures, including DenseNet121, DenseNet201,
          DenseNet169, and MobileNetV2.{" "}
          <strong>
            The models achieved overall accuracies of 81.5%, 96.1%, 96.2%, and
            84.3% respectively
          </strong>
          . The models with the highest accuracy, DenseNet201 and DenseNet169,
          have a larger number of layers, enabling them to effectively capture
          complex patterns. The kernel size and compression factors in the
          transition blocks further enhanced the discriminative power and
          enabled better feature propagation and discrimination, leading to
          higher accuracy for these models. The research suggests that future
          work could potentially achieve over 99% accuracy with the help of
          efficient net. Additionally, including a wider variety of capsules in
          the model could enhance its applicability in real-world pharmacy and
          intelligent medical systems. This significant contribution to the
          field was recognized and{" "}
          <strong>published in the IEEE conference publications</strong>,
          offering valuable insights and methodologies for future endeavors.
        </p>{" "}
        For more information please refer this repository{" "}
        <a
          href="https://ieeexplore.ieee.org/abstract/document/10250585"
          className="text-primary hover:underline"
        >
          Telugu News Classification Model
        </a>
        .
      </section>
      <section className="space-y-3">
        <H2>Telugu News Classification model</H2>
        <p className="text-justify">
          This research work focuses on telugu news classification. It is a
          comparative study of four{" "}
          <strong>
            Deep Learning algorithms - Long Short-Term Memory (LSTM), Gated
            Recurrent Unit (GRU), bidirectional Gated Recurrent Unit (Bi-GRU),
            and bidirectional Long Short-Term Memory (Bi-LSTM)
          </strong>{" "}
          - used for classifying Telugu news articles into various categories.
          The GRU model achieved the highest accuracy of 99.46% on one of the
          datasets, demonstrating its ability to handle the complex script and
          morphology of the Telugu language effectively. The research suggests
          several avenues for future work. This includes using more data or
          features to improve classification accuracy, testing with other deep
          learning models such as CNN, Transformer, or BERT, and extending the
          classification to more fine-grained categories or subcategories.
          Additionally, the integration of sentiment analysis could provide a
          more comprehensive understanding of the text. Exploring methods to
          handle class imbalance in the dataset could also enhance the model’s
          performance.{" "}
          <strong>
            The research was recognized and published in the OCIT2023 conference
          </strong>
          . This work stands as a testament to the power of Deep Learning in
          transforming the way we approach text classification tasks.
        </p>{" "}
        For more information please refer this{" "}
        <a
          href="https://ieeexplore.ieee.org/document/10430996"
          className="text-primary hover:underline"
        >
          Telugu News classification model
        </a>
        .
      </section>
    </section>
  );
}
