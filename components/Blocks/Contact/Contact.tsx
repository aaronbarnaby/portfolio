"use client"

import { AnimatedHeading, AnimatedText } from "~/components/Motion";
import { popUpFromBottomForText } from "~/utils";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="dark:bg-darkPrimary !relative">
      <section className="pt-6 text-center w-full-width dark:bg-darkPrimary dark:text-white">
        <AnimatedHeading
          variants={popUpFromBottomForText}
          className="text-4xl font-bold"
        >
          Get in touch
        </AnimatedHeading>

        <AnimatedText
          variants={popUpFromBottomForText}
          className="px-4 py-2 font-medium dark:text-gray-300"
        >
          If you would like to get in touch with me about any of my projects, work or just in general then please contact me.
        </AnimatedText>
      </section>

      <section className="flex flex-col w-full px-5 mx-auto lg:flex-row dark:bg-darkPrimary dark:text-white lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-10">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="w-full my-2 text-2xl font-bold text-center"
          >
            Connect with me
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}