"use client";
import H1 from "@/components/ui/typography/h1";
import P from "@/components/ui/typography/p";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const age = new Date().getFullYear() - 2003;
  return (
    <div className="flex flex-col gap-y-4">
      <H1 className="whitespace-pre-line">Hello,</H1>
      <H1 className="flex whitespace-break-spaces -z-10">
        {`I'm `}
        <Typewriter
          options={{
            loop: true,
            strings: ["Arza", "Web Developer"],
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter.start();
          }}
        />
      </H1>

      <P className="text-justify">
        A {age}-year-old web developer driven by crafting effective solutions
        over merely showcasing technology.{" "}
      </P>
    </div>
  );
};

export default Intro;
