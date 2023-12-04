import { NavbarLinks } from "../utils";

interface NavLink {
   id: number;
   name: string;
   url: string;
}

const Footer: React.FC = () => {
   return (
      <div className='bg-sky-700 '>
         <footer className='mx-auto px-10 flex flex-wrap justify-between items-center py-5'>
            <p className='col-md-4 mb-0 text-white'>
               &copy; Example Library App, Inc
            </p>
            <ul className='flex'>
               {NavbarLinks.map((navlink: NavLink) => (
                  <li className='ml-4' key={navlink.id}>
                     <a href={navlink.url} className='text-white'>
                        {navlink.name}
                     </a>
                  </li>
               ))}
            </ul>
         </footer>
      </div>
   );
};

export default Footer;
