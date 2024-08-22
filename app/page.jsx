"use client";
import React, { useEffect, useState } from "react";
import Feed from "@components/Feed";

const Home = () => {
  const prompts = [
    "InspirePrompt",
    "UpliftPrompts",
    "SmartPrompts",
    "Motivations",
  ];
  const [promptIndex, setPromptIndex] = useState(0);
  const [letterCharacter, setLetterCharacter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (letterCharacter < prompts[promptIndex].length) {
        setLetterCharacter(letterCharacter + 1);
      } else {
        setLetterCharacter(0);
        setPromptIndex((promptIndex + 1) % prompts.length);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [letterCharacter, promptIndex, prompts]);

  return (
    <section className="w-full flex-center flex-col sm:px-16 px-6 ">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="" />
        <span className="cyan_gradient text-center dynamic-text">
          &nbsp;{prompts[promptIndex].slice(0, letterCharacter)}
        </span>
      </h1>
      <p className="desc text-center">
        InspireMe is a prompt website offering a diverse collection of creative
        writing prompts to ignite inspiration and fuel imagination for writers
        of all levels.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
