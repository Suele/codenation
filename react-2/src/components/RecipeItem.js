import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ title, thumbnail, ingredients }) => (
  <Link to={`/recipe/${title}`}>
    <div className='col-md-4'>
      <div className='card border border-light' key={ingredients}>
        <img
          className='card-img-top img-fluid rounded rounded'
          src={thumbnail}
          alt={title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default RecipeItem;
