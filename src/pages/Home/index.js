import React from "react";
import { Header } from "../../components/Header";
const MainContainer = React.lazy(() =>
  import("../../components/MainContainer")
);

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Home;
