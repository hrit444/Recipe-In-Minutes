import { useContext, useMemo } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipeContext";
import "../pages/Recipes.css"

const Recipes = () => {
  const { recipe, searchQuery } = useContext(recipeContext);

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

  return (
    <div className="p-3 lg:p-[1.2vw] min-h-screen grid gap-[2vw] grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {filteredRecipes.length > 0 ? renderRecipes : (<h2 className="notfound">No recipes found. Try a different search or create a recipe first.</h2>)}
    </div>
  );
};

export default Recipes;
