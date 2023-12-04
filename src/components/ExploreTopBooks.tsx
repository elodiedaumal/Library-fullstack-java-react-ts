import React from "react";

export const ExploreTopBooks = () => {
   return (
      <div className='p-5 mb-4 header h-[25rem] justify-center items-center flex'>
         <div className='py-5 text-white  '>
            <div>
               <h1 className='text-4xl font-extrabold'>
                  Find your next adventure
               </h1>
               <p className='col-md-8 text-lg'>
                  Where would you like to go next?
               </p>
               <a
                  type='button'
                  className='btn btn-lg bg-white text-sky-700 font-semibold py-2 px-6 rounded-full mt-4'
                  href='#'
               >
                  Explore top books
               </a>
            </div>
         </div>
      </div>
   );
};
