import { recipes } from "./data1.js";
import React from "react";

const Challange1 = () => {
  const items = recipes.map((recipe) => {
    return (
      <>
        <h2 key={recipe.id}>{recipe.name}</h2>
        <ul>
          <li>
            {recipe.ingredients.map((item) => {
              return <li key={item.id}>{item}</li>;
            })}
          </li>
        </ul>
      </>
    );
  });
  return <div>{items}</div>;
};

export default Challange1;
