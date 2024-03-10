import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from '../images/avatar.jpg'

const greeting = "Hello, I am Legodev";
const bio1 = "A frontend developer";
const bio2 = "specialized in React with Next.js";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#031021"
  >
    <VStack spacing={8}>
    <VStack spacing={3}>

<Avatar name="Pete" src={avatar} size="2xl"/>
<Heading size="md">{greeting}</Heading>
    </VStack>
<Heading size="2xl">{bio1}</Heading>
<Heading size="2xl">{bio2}</Heading>


    </VStack>
  </FullScreenSection>
);

export default LandingSection;
