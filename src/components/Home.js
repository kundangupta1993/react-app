import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="header">
        <h1> Home Component </h1>
        <ul style={{ width: "100%", marginTop: "20px" }}>
          <li>
            <Link to={"/list"}> Albums List </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
