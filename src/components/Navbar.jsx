import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import NavMenubar from "./NavMenubar";
import { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(recipeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const MenuOpener = () => {
    setActive(!active)
  };

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (location.pathname !== "/recipes") {
      navigate("/recipes");
    }
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchQuery("");
  };

  return (
    <>
      <nav className="bg-[#F56607] top-0 z-9999999 fixed w-full flex items-center text-[1.2vw] justify-between gap-4 p-3 py-[3vw] lg:px-[1.5vw] lg:py-[1vw]">
        {showSearch ? (
          <div className="flex items-center w-full gap-3">
            
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
              placeholder="Search recipes..."
              className="flex-1 max-w-screen-90 mx-auto px-4 py-2 rounded-full text-black text-[4vw] lg:text-[1.5 vw] outline-none"
            />
            <i
              className="ri-close-line text-white text-[7vw] lg:text-[2vw] cursor-pointer xl:mr-[4vw] 2xl:mr-[5vw]"
              onClick={handleSearchClose}
            ></i>
          </div>
        ) : (
          <>
            <i
              onClick={MenuOpener}
              className="ri-menu-line absolute z-9999999 lg:hidden text-white text-[5.5vw] lg:text-[2vw]"
            ></i>
            <div className="initial lg:hidden"></div>
            <NavLink className="d-logo text-white hidden lg:inline" to="/">
              RecipeInMinutes
            </NavLink>
            <div className="cNav hidden lg:flex xl:flex gap-[5vw] lg:mr-[11vw]">
              <NavLink className="text-[1.5vw]" to="/">
                Home
              </NavLink>
              <NavLink className="text-[1.5vw]" to="/recipes">
                Recipes
              </NavLink>
              <NavLink className="text-[1.5vw]" to="/contact">
                Contact
              </NavLink>
              <NavLink className="text-[1.5vw]" to="/create-recipe">
                Create Recipe
              </NavLink>
              <NavLink className="text-[1.5vw]" to="/favorite">
                Favorite
              </NavLink>
            </div>
            <h2 className="m-logo initial text-white lg:hidden">RecipeInMinutes</h2>
            <div className="flex items-center gap-2">
              <i
                className="ri-search-line text-[6.5vw] lg:text-[2vw] text-white cursor-pointer"
                onClick={handleSearchToggle}
              ></i>
            </div>
          </>
        )}
      </nav>
      {active &&
        <NavMenubar setActive={setActive} />
      }
    </>
  );
};

export default Navbar;
