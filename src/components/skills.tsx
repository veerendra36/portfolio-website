import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { H2 } from "@/components/ui/H2";

const Skills = () => {
  return (
    <section className="space-y-3">
      <H2>Skills</H2>
      <div className="grid-col-2 grid gap-3">
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Web Development
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              Front-End Technologies
            </CardItem>

            <div className="mt-3 grid grid-cols-3 gap-4">
              <CardItem
                translateZ={20}
                className="justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white  dark:text-black"
              >
                HTML
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                CSS
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-justify text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Java Script
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                React Js
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Next.js
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Tailwind CSS
              </CardItem>
            </div>
            {/* backend  */}
            <CardItem
              as="p"
              translateZ="60"
              className="mt-4 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              Back-End Technologies
            </CardItem>

            <div className="mt-3 grid grid-cols-3 gap-4">
              <CardItem
                translateZ={20}
                className="justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white  dark:text-black"
              >
                Node JS
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Express JS
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-justify text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                EJS
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                My SQL
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Mongo DB
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Data Science
            </CardItem>

            <div className="mt-3 grid grid-cols-3 gap-4">
              <CardItem
                translateZ={20}
                className="justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white  dark:text-black"
              >
                Python
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Numpy
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-justify text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Pandas
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Matplotlib
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Machine Learning
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Deep Learning
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                NLP
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Tensor Flow
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Lang Chain
              </CardItem>
              <CardItem
                translateZ={20}
                className="items-center justify-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Vector embeddings
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Skills;
