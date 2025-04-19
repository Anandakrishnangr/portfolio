import { Hello } from "@/components";
import AboutMe from "@/components/content/aboutme";
import Cards from "@/components/content/cards";
import { Certificate } from "@/components/content/certificates";
import ConnectMe from "@/components/content/connect";
import Experience from "@/components/content/experience";
import Section from "@/components/content/section";
import MouseFollower from "@/components/loader/MouseFollower";
import NavBar from "@/components/navbar/navbar";

 
export default function Home() {
  return (
    <div className="App bg-background-light dark:bg-background-dark">
      <MouseFollower />
      <NavBar />

      <Section className="p-24 pb-0 content-center">
        <div className="h-full content-center">
          <div className="flex flex-col lg:flex-row max-w-8xl w-full items-center">
            <div className="w-full lg:w-1/2">
              <Hello />
            </div>
            <div className="hidden lg:block w-1/2 items-center">
              <Cards />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-emerald-950 p-24 pb-0 content-center" id="about">
        <AboutMe />
      </Section>

      <Section className="snap-start bg-amber-200 content-center">
        <ConnectMe />
      </Section>

      <Section className="snap-start">
        <Experience />
      </Section>

      <Section className="snap-start">
        <Certificate />
      </Section>

      <Section className="snap-start">
        <center className="fixed bottom-0 m-auto w-full">version v0.0.2</center>
      </Section>
    </div>
  );
}
