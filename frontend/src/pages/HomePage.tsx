import React from "react";
import { ExploreTopBooks } from "../components/ExploreTopBooks";
import Caroussel from "../components/Caroussel";
import NewReading from "../components/NewReading";
import LibraryService from "../components/LibraryService";

const HomePage = () => {
   return (
      <>
         <ExploreTopBooks />
         <Caroussel />
         <NewReading />
         <LibraryService />
      </>
   );
};

export default HomePage;
