import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Register from "./Register";
import Login from "./Login";

const Welcome = () => {
  const { updateWelcomePage } = useGlobalContext();

  useEffect(() => updateWelcomePage(), []);

  return (
    <>
      <HeroSection />
      <Login />
    </>
  );
};

export default Welcome;
