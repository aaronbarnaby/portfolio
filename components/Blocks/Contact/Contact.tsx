export default function Contact() {
  return (
    <div id="contact" className="dark:bg-darkPrimary !relative mb-10">
      <section className="pt-6 text-center w-full-width dark:bg-darkPrimary dark:text-white">
        <h1 className="text-4xl font-bold">Get in touch</h1>

        <p className="px-4 py-2 font-medium dark:text-gray-300">
          If you would like to get in touch with me about any of my projects, work or just in general then please{" "}
          <a href="mailto:me@ajbarnaby.com" className="text-blue-500">
            contact me
          </a>
          .
        </p>
      </section>

      {/* <section className="flex flex-col w-full px-5 mx-auto lg:flex-row dark:bg-darkPrimary dark:text-white lg:pb-10">
        <div className="w-full mx-auto mt-10">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="w-full my-2 text-2xl font-bold text-center"
          >
            Connect with me
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section> */}
    </div>
  );
}
