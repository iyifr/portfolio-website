"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I always thought portfolio websites were unnecessarily cringe.
        But i scraped this template from github so i could have a tangible representation of my efforts to get into the programming and web dev space.
        I have no formal education in CS , I'm completely self taught. However i'm proud to say from studying and consistent grinding , I have been able to
        craft some things I'm really proud of. I have a solid understanding of how tech businesses work and I'm an insatiable learner.
        Want to pay me to craft software for your company ? , you're on the right website.
      </p>
    </motion.section>
  );
}
