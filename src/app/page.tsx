import { Hello } from "@/components";
import Frame from "@/components/content/about";

export default function Home() {
  return (
    <div>
      <Hello />
      <div className="App bg-background-light dark:bg-background-dark">
      {/* First Section */}
      <section className="section ">
        <h1>Welcome to 3D Cards</h1>
        <p>Scroll down to reveal something cool 👇</p>
      </section>

      {/* Second Section - Scroll Triggered */}s
      <section className="section " id="reveal-section">
        <Frame />
      </section>
    </div>
    </div>
  );
}
