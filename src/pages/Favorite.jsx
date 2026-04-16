import { useContext, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router";
import { recipeContext } from "../context/RecipeContext";
import { RecipeGridSkeleton } from "../components/SkeletonUI";

const Favorite = () => {
  const { isHydrating } = useContext(recipeContext);
  const fav = JSON.parse(localStorage.getItem("fav")) || []

  const navigate = useNavigate()

  const renderRecipes = fav.map((recp) => (
    <RecipeCard key={recp.id} recipe={recp} />
  ));

  useEffect(() => {}, []);

  if (isHydrating) {
    return <RecipeGridSkeleton count={6} />;
  }

  return (
    <div className="p-3 lg:p-[1.2vw] min-h-screen grid gap-[2vw] grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {fav.length > 0 ? (
        renderRecipes
      ) : (
         <div className="flex flex-col gap-[1vw] items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-[7vw] text-nowrap xl:text-[2.5vw]">Select a favorite first!</h3>
        <h3 onClick={()=>{navigate("/recipes")}} className="bg-[#F5660F] text-white text-[4.5vw] xl:text-[1vw] px-[5vw] xl:px-[1vw] py-[1vw] xl:py-[.4vw] rounded-full">See Recipes</h3>
      </div>
      )}
    </div>
  );
};

export default Favorite;
