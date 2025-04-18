"use client";

import React from "react";
import { Button } from "../form";

const Hello: React.FC = () => {
  return (
      <div className="max-w-4xl transition-colors duration-300 text-text-primary-light dark:text-text-primary-dark">
        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-2">
          Hello, my name is
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Ananda Krishnan GR
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          I help with software development
        </h2>

        <p className="text-text-muted-light dark:text-text-muted-dark mb-4">
          I&apos;m a{" "}
          <strong className="text-text-primary-light dark:text-text-primary-dark">
            Full Stack Software Engineer
          </strong>{" "}
          (MERN) with a strong focus on{" "}
          <strong className="text-primary">DevOps and AWS</strong>. I’m
          passionate about building scalable and efficient web applications.
        </p>

        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
          With{" "}
          <strong className="text-text-primary-light dark:text-text-primary-dark">
            4 years of experience
          </strong>
          , I&apos;ve helped deliver modern solutions and infrastructure for startups
          and businesses, streamlining development workflows and ensuring
          deployment efficiency.
        </p>

        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
          I also bring experience in cloud-native technologies like{" "}
          <strong className="text-primary">AWS Amplify</strong>,{" "}
          <strong className="text-primary">Lambda</strong>,{" "}
          <strong className="text-primary">API Gateway</strong>, and{" "}
          <strong className="text-primary">CloudFront</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
        
          <Button  >
          More about me
          </Button>
          <Button  >
          LinkedIn profile
          </Button>
         
        </div>
      </div>
  );
};

export {Hello};
