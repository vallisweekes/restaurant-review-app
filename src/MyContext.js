import React, { createContext } from 'react';
import RestList from '../../restList.json';

const MyContext = createContext(RestList);
console.log('My context', MyContext);
export default MyContext;
