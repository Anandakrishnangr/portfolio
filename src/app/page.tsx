import { Hello } from "@/components";
import AboutMe from "@/components/content/aboutme";
import Cards from "@/components/content/cards";
import { Certificate } from "@/components/content/certificates";
import ConnectMe from "@/components/content/connect";
import Experience from "@/components/content/experience";
import Motion from "@/components/content/motion";
import Section from "@/components/content/section";
import MouseFollower from "@/components/loader/MouseFollower";
import VerticalBouncingArrows from "@/components/loader/verticalBouncingArrow";
import NavBar from "@/components/navbar/navbar";


export default function Home() {
  return (
    <div className="App bg-background-light dark:bg-background-dark">
      <MouseFollower />
      <NavBar />

      <Section className="flex flex-col justify-between overflow-hidden pb-0 md:pb-0 p-4 md:p-24 pt-4">
        <div className="grow flex items-center">
          <div className=" h-full  pt-10 md:pt-0">
            <div className="flex flex-col lg:flex-row max-w-8xl w-full items-center">
              <div className="w-full lg:w-1/2">
                <Motion>
                  <Hello />
                </Motion>
              </div>
              <div className="hidden lg:block w-1/2 items-center">
                <Cards />
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="py-5 flex justify-center">
              <VerticalBouncingArrows />
        </div>
      </Section>

      <Section className="snap-start bg-emerald-950 content-center" id="about">
        <div className=" p-4 md:p-24 pb-4 content-center">
          <AboutMe />
        </div>
      </Section>

      <Section className="snap-start bg-amber-200 p-10 md:p-24 content-center">
        <ConnectMe />
      </Section>

      <Section className="snap-start p-4 md:p-24">
        <Experience />
      </Section>

      <Section className="snap-start p-10 md:p-24 overflow-x-scroll">
        <Certificate />
      </Section>

      <Section className="snap-start p-10 md:p-24">
       d {/* <center className="fixed bottom-0 m-auto w-full">version v0.0.3</center> */}
      </Section>
    </div>
  );
}
