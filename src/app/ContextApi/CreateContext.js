// context/MyContext.js
'use client'
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [Answer, setAnswer] = useState('Default');
  return (
    <MyContext.Provider value={{ Answer, setAnswer }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
