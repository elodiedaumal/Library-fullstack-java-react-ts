import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
   return (
      <nav className='bg-sky-700 p-4'>
         <div className='mx-auto flex justify-between items-center gap-10'>
            <span className='text-white text-lg font-bold '>Library</span>
            <button
               className='md:hidden text-white focus:outline-none'
               type='button'
            >
               <span>
                  <IoMenu className='text-2xl' />
               </span>
            </button>
            <div className='hidden md:flex md:items-center md:w-auto md:mr-auto'>
               <ul className='md:flex md:space-x-4'>
                  <li>
                     <a className='text-white hover:text-gray-300' href='#'>
                        Home
                     </a>
                  </li>
                  <li>
                     <a className='text-white hover:text-gray-300' href='#'>
                        Search Books
                     </a>
                  </li>
               </ul>
            </div>
            <ul className='md:flex md:space-x-4 ml-5'>
               <li>
                  <a
                     type='button'
                     className='border-2 border-white py-2 px-4 rounded text-white hover:border-sky-700 hover:text-sky-700 hover:bg-white'
                     href='#'
                  >
                     Sign in
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};
