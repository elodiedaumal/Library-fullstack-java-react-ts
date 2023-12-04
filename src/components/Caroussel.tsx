import React, { useState } from "react";
import CarouselItem from "./CarousselItems"; // Adjust the path based on your project structure
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bookImage1 from "../Images/BooksImages/book-luv2code-1000.png";
import bookImage2 from "../Images/BooksImages/new-book-1.png";
import bookImage3 from "../Images/BooksImages/new-book-2.png";

const Carousel = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const items = [
      {
         id: 1,
         title: "Book Title 1",
         author: "Elodie D",
         image: bookImage1,
      },
      {
         id: 2,
         title: "Book Title 2",
         author: "Elodie D",
         image: bookImage2,
      },
      {
         id: 3,
         title: "Book Title 3",
         author: "Elodie D",
         image: bookImage3,
      },
   ];

   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
   };

   const handlePrev = () => {
      setCurrentIndex(
         (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
   };

   return (
      <div className='mt-5'>
         <h3 className='text-center font-bold text-xl'>
            Find your next "I stayed up too late reading" book.
         </h3>

         <div className='mx-auto mt-5 md:w-90'>
            <div className='flex gap-10 justify-center items-center'>
               <button className='text-gray-800 text-2xl' onClick={handlePrev}>
                  <FaChevronLeft />
               </button>

               <div>
                  {items.map((item) => (
                     <CarouselItem
                        key={item.id}
                        item={item}
                        currentIndex={currentIndex}
                     />
                  ))}
               </div>

               <button className='text-gray-800 text-2xl' onClick={handleNext}>
                  <FaChevronRight />
               </button>
            </div>
         </div>
         <div className='text-center mt-10'>
            <a
               className='border-gray-400 border-2 p-2 rounded-full text-gray-500'
               href='#'
            >
               View More
            </a>
         </div>
      </div>
   );
};

export default Carousel;
