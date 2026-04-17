import { useEffect } from "react";
import "../components/RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

  const navigate = useNavigate();

  const {
    name,
    id,
    caloriesPerServing,
    description,
    cuisine,
    mealType,
    image,
  } = recipe;

  useEffect(()=>{},[])

  return (
    <div className="rec overflow-hidden">
      <div
        className="img-div flex items-start justify-end"
        style={{ backgroundImage: `url(${image})` }}
        alt=""
      >
      </div>
      <h2>{name}</h2>
      <div className="fewdetails">
        <div className="minidiv">
          <h5>{cuisine}</h5>
        </div>
        <div className="minidiv">
          <h5>{mealType[0]}</h5>
        </div>
      </div>
      <p>
        {description ? description.slice(0, 105) : "No description available"}
        ...
      </p>
      <div className="btn flex items-center h-[2vw] justify-between gap-[2vw] lg:gap-[.8vw]">
        <h3>{caloriesPerServing} cal</h3>

        <button
          onClick={() => {
            navigate(`/recipes/details/${id}`);
          }}
          className="my-btn"
        >
          <h6 className="hidden text-white xl:inline lg:inline xl:text-[1.1vw]">Menu</h6>
          <i className="ri-arrow-right-up-line text-white text-[5vw] lg:text-[1.5vw]"></i>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
