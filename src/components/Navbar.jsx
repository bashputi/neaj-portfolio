

const Navbar = () => {
    
    const navLink = <>
    <a href="#home"><li className="text-lg font-semibold">Home</li></a>
    <a href="#about"><li className="text-lg lg:px-6 font-semibold">About</li></a>
    <a href="#projects"><li className="text-lg font-semibold">Projects</li></a>
    <a href="#contact"><li className="text-lg lg:pl-6 font-semibold">Contact</li></a>
    </>
    
    return (
      <nav className=" w-full py-2 fixed top-0 z-20 bg-transparent">
         <div className="navbar flex justify-center shadow-lg">
           <div className="navbar-start">
                 <div className="flex md:ml-2 font-serif">
                      <span className="lg:text-2xl font-bold mr-1 text-white lg:mr-0">Neaj|</span><span className="text-amber-500 sm:text-sm md:mt-1 lg:mt-2 font-bold">Animator</span>
                   </div>
           </div>
           <div className="navbar-center hidden lg:flex ">
             <ul className="menu text-white menu-horizontal px-1">
             {
               navLink
             }
             </ul>
           </div>
           <div className="navbar-end pr-10 lg:hidden">   
           <div className="dropdown lg:hidden">
               <label tabIndex={0} className="btn btn-ghost text-white btn-circle">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
               </label>
               <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-gray-600 rounded-box w-52">
                 {
                   navLink
                 }
               </ul>
              
               </div>  
       </div>
   </div>
      </nav>
   );
};

export default Navbar;