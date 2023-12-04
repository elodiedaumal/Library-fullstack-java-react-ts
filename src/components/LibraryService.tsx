const LibraryService = () => {
   return (
      <div className='mx-auto px-10 my-5 w-90 mt-20'>
         <div className='flex flex-col md:flex-row p-4 items-center border shadow-xl justify-between gap-5'>
            <div className='flex flex-col gap-2 p-3'>
               <h1 className='text-4xl font-bold'>
                  Can't find what you are looking for?
               </h1>
               <p className='text-lg'>
                  If you cannot find what you are looking for, send our library
                  admins a personal message!
               </p>
               <div className='mt-5'>
                  <a
                     className=' bg-sky-700 text-white px-6 py-3 rounded-full'
                     href='#'
                  >
                     Sign up
                  </a>
               </div>
            </div>
            <div className='w-full  md:w-[500px] bg-lost h-[20em]'></div>
         </div>
      </div>
   );
};

export default LibraryService;
