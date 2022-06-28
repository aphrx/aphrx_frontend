import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import React from "react";
import { Box } from "@chakra-ui/react";
import heroImage from "../assets/heroImage.jpg";
import Card from "../components/Card";
import { FaTools, FaStar, FaGooglePlay } from "react-icons/fa";

function Home() {
  const cards = [
    {
      id: 1,
      text: "No matter the tool, big or small, we probably have something in our toolkit for you",
      icon: FaTools,
    },
    {
      id: 2,
      text: "With our evergrowing suite of apps, Aphrx can provide apps for your everyday needs",
      icon: FaGooglePlay,
    },
    {
      id: 3,
      text: "Don't see a solution for you? Reach out and our trained staff can help you develop a custom solution",
      icon: FaStar,
    },
  ];

  return (
    <Box>
      <Hero
        title={"Supercharge Your Workflow"}
        body={
          "From the small tools like converting your PDFs to images all the way to improving your workouts, Aphrx is here to supercharge your workflow and get the most out of your day!"
        }
        image={heroImage}
      />
      <Card data={cards} title={"Products & Services"} />
      <Services />
      <ContactUs />
    </Box>
  );
}

export default Home;
