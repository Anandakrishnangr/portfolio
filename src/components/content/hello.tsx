"use client";

import React from "react";

const Hello: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark px-6 transition-colors duration-300">
      <div className="max-w-3xl text-text-primary-light dark:text-text-primary-dark">
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
          <a
            href="/about"
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            More about me
          </a>
          <a
            href="https://www.linkedin.com/in/ananda-krishnan-gr"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
};

export {Hello};
