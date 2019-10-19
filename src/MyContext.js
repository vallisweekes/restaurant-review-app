import React, { createContext } from "react";
import RestList from "../../restList.json";

const MyContext = createContext(RestList);
console.log(MyContext);
export default MyContext;