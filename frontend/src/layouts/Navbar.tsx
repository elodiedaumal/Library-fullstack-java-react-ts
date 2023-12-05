import { IoMenu } from "react-icons/io5";
import { NavbarLinks } from "../utils";

interface NavLink {
   id: number;
   name: string;
   url: string;
}

const Navbar: React.FC = () => {
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
                  {NavbarLinks.map((navlink: NavLink) => (
                     <li className='' key={navlink.id}>
                        <a
                           href={navlink.url}
                           className='text-white hover:text-gray-300'
                        >
                           {navlink.name}
                        </a>
                     </li>
                  ))}
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

export default Navbar;
