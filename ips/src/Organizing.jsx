import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import OrganizingTeamSection from "./components/Organizing-Team-Section";

const Organizing = () => {
  const { udpateOrganizingPage } = useGlobalContext();

  useEffect(() => udpateOrganizingPage(), []);

  return(
    <OrganizingTeamSection />
  ) 
  
}

export default Organizing;
