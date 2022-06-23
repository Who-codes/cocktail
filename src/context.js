import React, { useContext } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"helllo"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
