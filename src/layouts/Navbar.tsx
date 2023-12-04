import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
   return (
      <nav className='bg-sky-700 p-4'>
         <div className='flex items-center'>
            <p className='text-white text-lg font-bold '>Library</p>
            <button
               className='md:hidden text-white focus:outline-none ml-auto'
               type='button'
            >
               <IoMenu className='text-2xl' />
            </button>
            <div className='hidden md:flex md:items-center md:w-auto md:ml-auto'>
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
               <ul className='md:flex md:ml-10'>
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
         </div>
      </nav>
   );
};
