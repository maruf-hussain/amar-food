

const Header = () => {
    const navItems = <>
     <li><a>Home</a></li>
     <li><a>Contact Us</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Our Menu</summary>
                <ul className="p-2">
                  <li><a>Co</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Dash Borad</a></li>
    </>
    return (
        <div className="navbar fixed z-20  text-white max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Amar Food</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Buttton</a>
        </div>
      </div>
    );
};

export default Header;