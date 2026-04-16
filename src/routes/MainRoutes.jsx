import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  FormSkeleton,
  PageSkeleton,
  RecipeDetailsSkeleton,
  RecipeGridSkeleton,
} from "../components/SkeletonUI";

const Home = lazy(() => import("../pages/Home"));
const Recipes = lazy(() => import("../pages/Recipes"));
const CreateRecipes = lazy(() => import("../pages/CreateRecipes"));
const RecipeDetails = lazy(() => import("../pages/RecipeDetails"));
const Contact = lazy(() => import("../pages/Contact"));
const UpdateRecipe = lazy(() => import("../pages/UpdateRecipe"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Favorite = lazy(() => import("../pages/Favorite"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<PageSkeleton />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/recipes"
        element={
          <Suspense fallback={<RecipeGridSkeleton />}>
            <Recipes />
          </Suspense>
        }
      />
      <Route
        path="/recipes/details/:id"
        element={
          <Suspense fallback={<RecipeDetailsSkeleton />}>
            <RecipeDetails />
          </Suspense>
        }
      />
      <Route
        path="/recipes/update/:id"
        element={
          <Suspense fallback={<FormSkeleton />}>
            <UpdateRecipe />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<PageSkeleton />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/create-recipe"
        element={
          <Suspense fallback={<FormSkeleton />}>
            <CreateRecipes />
          </Suspense>
        }
      />
      <Route
        path="/favorite"
        element={
          <Suspense fallback={<RecipeGridSkeleton count={6} />}>
            <Favorite />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<PageSkeleton />}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
