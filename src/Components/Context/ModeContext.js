import React, { useReducer } from "react";
import DarkModeReducer from "./ModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

const DarkModeContext = React.createContext(INITIAL_STATE);

export const DarkModeProvider = (props) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
