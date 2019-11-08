import React, { createContext } from "react";
import RestList from "../../restList.json";

export const MyContext = createContext(RestList);
console.log(MyContext);
class MyProvider extends React.Component {
  render() {
    return <MyContext.Provider> </MyContext.Provider>;
  }
}

export default MyProvider;
