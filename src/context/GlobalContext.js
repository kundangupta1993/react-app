import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  return (
    <GlobalContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useFavorites = () => useContext(GlobalContext);
