export const metadata = {
  title: "About Me - Aaron Barnaby",
};

export default function Page() {
  return (
    <div className="py-20 relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
      <section>
        <h1 className="text-4xl  md:text-5xl font-bold text-neutral-900 dark:text-neutral-200">About Me</h1>

        <div className="max-w-full pt-5 prose dark:prose-invert">
          <p>
            Hello! Welcome to my site all about me, My name is Aaron Barnaby and I'm a developer currently working at{" "}
            <a href="https://www.funkypigeon.com" target="_blank">
              Funky Pigeon
            </a>
            . I have been developing for the past 15+ years starting from small time HTML and Java projects then moving
            on to PHP based retail websites and now working with .NET, React (Next.JS) and Nodejs.
          </p>

          <p>
            Yes I have jumped around technology stacks over the years and most I've self tought along the way as I
            always like to keep up with latest and best practices. I pride myself on not only learning the key
            fundimentals of all the languages and frameworks I work which but also trying to always understand best
            practices with them.
          </p>

          <p>
            Coding for me has always been a hobby first before work and I love doing what I do and pride myself on
            finding the best way to complete a task as well as looking forward for future requirements ahead of time.
            From a young age I have always taken an interesting in all forms of technology and remember even back when
            computers was new to school fixing my first computer to the amaze of techers at the time.
          </p>

          <p>
            Anyone I have worked with will tell you I'm very passinate about what I do and will always go above and
            beyond expectations. When I first started at my role at Funky Pigeon the first thing I did was rewrite there
            whole backend admin tool. Originally they had no plans to re-build there admin tool but I spend a week or 2
            personally working on it and showed them what I created. To this date my new admin tool is still the core
            backend system they are using. As well as the api template we have, editor and many more things I've been
            involed with.
          </p>

          <p>If you was to ask me which language / stack is my preference right now it would be:</p>

          <ul>
            <li>Next.JS / React</li>
            <li>Nodejs</li>
            <li>.NET6 (API)</li>
            <li>AWS Services</li>
          </ul>

          <p>
            Developing takes up most of my time from work to personal projects however in my downtime I enjoy a range of
            video games my all time favioute being Final Fantasy series. I'm also a tv and film buff, I can litterly
            watch nearly anything and I'm a sukker for needing to finish anything I start watching. Away from a screen I
            have a passion for all technology specificly drones and FPV flying but that is an expensive hoppy to get
            into for sure. I love to get outdoors and being part of the National Trust I love to visit all types of
            natural wonders any type of woodland walk is right up there with a good day out for me, my wife, my kids and
            my dog.
          </p>

          <p>
            Yes. You did hear me right I'm a father of 2 kids, Lily & Archie both 8 this year (2023) which yes... does
            make them Twins. This can be a lot of hard work but it is also rewarding and with my wife Rose we are for
            sure a happy complete little family.
          </p>

          <p>
            If I sound like someone you would like to work with or even just get to know, I'm always open to
            conversation send me a email -{" "}
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
