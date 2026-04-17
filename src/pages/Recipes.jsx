import { useContext, useMemo } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipeContext";
import { RecipeGridSkeleton } from "../components/SkeletonUI";
import "../pages/Recipes.css"

const Recipes = () => {
  const { recipe, searchQuery, isHydrating } = useContext(recipeContext);

  const filteredRecipes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return recipe;

    return recipe.filter((recp) => {
      const nameMatch = recp.name.toLowerCase().includes(query);
      const cuisineMatch = recp.cuisine?.toLowerCase().includes(query);
      const ingredientsMatch = Array.isArray(recp.ingredients)
        ? recp.ingredients.some((ing) =>
            String(ing).toLowerCase().includes(query)
          )
        : false;

      return nameMatch || cuisineMatch || ingredientsMatch;
    });
  }, [recipe, searchQuery]);

  const renderRecipes = filteredRecipes.map((recp) => (
    <RecipeCard key={recp.id} recipe={recp} />
  ));

  if (isHydrating) {
    return <RecipeGridSkeleton />;
  }

  return (
    <div className="p-3 lg:p-[1.2vw] grid gap-[2vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {filteredRecipes.length > 0 ? renderRecipes : (<h2 className="notfound">No recipes found.</h2>)}
    </div>
  );
};

export default Recipes;
