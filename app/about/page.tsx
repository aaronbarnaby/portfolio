export const metadata = {
  title: "About Me - Aaron Barnaby",
};

export default function Page() {
  return (
    <div className="py-20 relative max-w-4xl mx-auto text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
      <section>
        <h1 className="text-4xl  md:text-5xl font-bold text-neutral-200">About Me</h1>

        <div className="max-w-full pt-5 prose dark:prose-invert">
          <p>
            Hello! My name is Aaron Barnaby and I&apos;m a full-stack developer currently working at{" "}
            <a href="https://www.funkypigeon.com" target="_blank">
              Funky Pigeon
            </a>
            . I have been developing for 15+ years, starting with small HTML and Java projects, progressing through
            PHP-based retail websites, and now working day-to-day with .NET, React (Next.js), and Node.js.
          </p>

          <p>
            Over the years I have worked across a wide range of technology stacks, and the majority of that breadth has
            been self-taught — driven by a genuine curiosity to keep up with the latest tools and best practices. I
            pride myself on not just learning the syntax of a language or framework, but really understanding the
            fundamentals and the reasoning behind the patterns I use.
          </p>

          <p>
            Development has always been a passion before a profession. I genuinely love what I do, and that shows in
            the care I put into my work — whether that means finding the most elegant solution to a problem, planning
            ahead for future requirements, or pushing the quality bar a little higher than strictly necessary. From an
            early age I&apos;ve been drawn to technology in all forms, and that curiosity has never left me.
          </p>

          <p>
            Anyone I have worked with will tell you I&apos;m deeply passionate about my craft and consistently go
            above and beyond what is expected. When I first joined Funky Pigeon I rebuilt their entire backend admin
            tool off my own initiative — what started as a personal side project over a couple of weeks became the
            core backend system the business still relies on today. That kind of ownership and drive has carried
            through everything I&apos;ve been involved in: the API architecture, the personalisation editor, the
            ecommerce platform rework, and more.
          </p>

          <p>My current preferred stack:</p>

          <ul>
            <li>Next.js / React</li>
            <li>Node.js</li>
            <li>.NET (API / microservices)</li>
            <li>AWS Services</li>
          </ul>

          <p>
            When I&apos;m not at a keyboard I enjoy a wide range of video games — Final Fantasy holds a permanent spot
            as my all-time favourite series. I&apos;m also a big film and TV fan; once I start something I have to see
            it through. Away from screens I have a real passion for technology in the physical world, particularly
            drones and FPV flying — an expensive hobby for sure. I love getting outdoors too, and as a National Trust
            member I make the most of woodland walks and natural spots with my wife, kids, and dog.
          </p>

          <p>
            That&apos;s right — I&apos;m a proud dad to twins: Lily &amp; Archie. Life with two of them is
            brilliantly chaotic, and alongside my wife Rose we make a pretty great team.
          </p>

          <p>
            If I sound like someone you&apos;d like to work with, or even just have a conversation with, feel free to
            drop me an email —{" "}
            <a href="mailto:me@ajbarnaby.com" className="text-blue-500">
              me@ajbarnaby.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
