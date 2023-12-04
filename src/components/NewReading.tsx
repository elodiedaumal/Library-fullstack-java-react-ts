const NewReading = () => {
   return (
      <div className='px-10 mx-auto mt-20 '>
         <div className='grid grid-cols-1  md:grid-cols-2 '>
            <div className='grid '>
               <div className='bg-review-left h-[25em] bg-cover'></div>
            </div>
            <div className=' flex flex-col justify-center md:ml-10 my-10 md:my-0'>
               <div className='ml-2'>
                  <h1 className='text-3xl font-bold mb-4'>
                     What have you been reading?
                  </h1>
                  <p className='text-lg mb-8'>
                     The library team would love to know what you have been
                     reading. Whether it is to learn a new skill or grow within
                     one, we will be able to provide the top content for you!
                  </p>
                  <a
                     className='btn bg-sky-700 text-white px-6 py-3 rounded-full '
                     href='#'
                  >
                     Sign up
                  </a>
               </div>
            </div>

            <div className=' flex flex-col justify-center order-last my-10 md:my-0 md:mr-10'>
               <div className='ml-2'>
                  <h1 className='text-3xl font-bold mb-4'>
                     Our collection is always changing!
                  </h1>
                  <p className='text-lg'>
                     Try to check in daily as our collection is always changing!
                     We work nonstop to provide the most accurate book selection
                     possible for our Luv 2 Read students! We are diligent about
                     our book selection, and our books are always going to be
                     our top priority.
                  </p>
               </div>
            </div>
            <div className='md:order-last'>
               <div className='bg-review-right h-[25em] bg-cover'></div>
            </div>
         </div>
      </div>
   );
};

export default NewReading;
