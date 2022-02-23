import React from "react";

const Home = () => {
  const homeText = "this is the home-page, and requires the user to be logged in";
  return (
    <div>
      <h1>Home</h1>
      <h3>{homeText}</h3>
    </div>
  );
};

export default Home;
