import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const Organizing = () => {
  const { udpateOrganizingPage } = useGlobalContext();

  useEffect(() => udpateOrganizingPage(), []);

  return <HeroSection />;
};

export default Organizing;
