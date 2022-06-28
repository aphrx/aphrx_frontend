import Hero from "../components/Hero";
import React from "react";
import { Box } from "@chakra-ui/react";
import memoji from "../assets/memoji.png";
import Card from "../components/Card";
import { FaTools } from "react-icons/fa";

const experience = [
  {
    id: 1,
    title: "Software Developer",
    text: "Analyticsmart",
    icon: FaTools,
  },
  {
    id: 2,
    title: "Technical Consultant",
    text: "QA Consultants",
    icon: FaTools,
  },
  {
    id: 3,
    title: "Software Developer",
    text: "CIBC",
    icon: FaTools,
  },
];

function About() {
  return (
    <Box>
      <Hero
        title={"Hi, I'm Amal"}
        body={"I like to code and make stuff!"}
        image={memoji}
      />
      <Card data={experience} title={"Experience"} />
    </Box>
  );
}

export default About;
