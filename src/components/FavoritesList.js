import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/GlobalContext";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="header">
        <h1> Favorites Albums List </h1>
        <ul style={{ width: "100%", marginTop: "20px" }}>
          <li>
            <Link to={"/"}> Back to home</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        {favorites?.map((item, index) => {
          return (
            <div className="albums-box" key={index}>
              <div>
                <img src={item.thumbnailUrl} alt={item.thumbnailUrl} />
              </div>
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
