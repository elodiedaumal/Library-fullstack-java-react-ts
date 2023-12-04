import React from "react";
import { ExploreTopBooks } from "../components/ExploreTopBooks";
import Caroussel from "../components/Caroussel";

const HomePage = () => {
   return (
      <>
         <Caroussel />
         <ExploreTopBooks />
      </>
   );
};

export default HomePage;
