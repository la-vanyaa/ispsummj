import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  register: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateWelcomePage = () => {
    return dispatch({
      type: "WELCOME_UPDATE",
      payload: {
        name: "20TH ISP PG CONVENTION OF INDIAN SOCIETY OF PERIODONTOLOGY, 2022",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateOrganizingPage = () => {
    return dispatch({
      type: "ORGANIZING_UPDATE",
      payload: {
        name: "ORGANIZING TEAM",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  const getRegister = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_REGISTER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getRegister(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateWelcomePage, udpateOrganizingPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
