import React from "react";
import { ExploreTopBooks } from "../components/ExploreTopBooks";
import Caroussel from "../components/Caroussel";
import NewReading from "../components/NewReading";

const HomePage = () => {
   return (
      <>
         <ExploreTopBooks />
         <Caroussel />
         <NewReading />
      </>
   );
};

export default HomePage;
