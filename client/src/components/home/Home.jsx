import React from "react";

import Navbar from "../Navbar";
import AddSecret from "./AddSecret";
import Secrets from "./Secrets";

const Home = () => {
  return (
    <>
      <Navbar />
      <AddSecret />
      <Secrets />
    </>
  );
};

export default Home;
