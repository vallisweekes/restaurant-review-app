import React, { createContext } from "react";

export const MyContext = createContext();

class MyProvider extends React.Component {
  render() {
    return <MyContext.Provider></MyContext.Provider>;
  }
}

export default MyProvider;
