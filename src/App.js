import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumsList from "./components/AlbumsList";
import Home from "./components/Home";
import FavoritesList from "./components/FavoritesList";
import { FavoritesProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/list" element={<AlbumsList />}></Route>
            <Route
              exact
              path="/favorites-list"
              element={<FavoritesList />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  );
}

export default App;
