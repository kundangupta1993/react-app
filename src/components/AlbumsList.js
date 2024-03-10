import React, { useState, useEffect } from "react";
import "../css/style.css";
import { useFavorites } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const AlbumsList = () => {
  const { addToFavorites } = useFavorites();

  const [albumsList, setAlbumsList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const result = async () => {
    try {
      const albumsData = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&amp;_limit=10`
      );
      const resp = await albumsData.json();
      setAlbumsList((prevValue) => [...prevValue, ...resp]);
    } catch (error) {
      console.log(error, "Some Error !!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    result();
  }, [page]);

  const handleScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error, "Some Error !!");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item) => {
    addToFavorites(item);
  };

  return (
    <>
      <div className="header">
        <h1> Albums List Component</h1>
        <ul style={{ width: "100%", marginTop: "20px" }}>
          <li>
            <Link to={"/favorites-list"}> Favorites List</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        {albumsList?.map((item, index) => {
          return (
            <div className="albums-box" key={index}>
              <div>
                <img src={item.thumbnailUrl} alt={item.thumbnailUrl} />
              </div>
              <h3>{item.title}</h3>
              <button onClick={() => handleClick(item)}>
                Add to Favorites
              </button>
            </div>
          );
        })}
      </div>
      {loading && <div className="loading"> Loading...</div>}
    </>
  );
};

export default AlbumsList;
