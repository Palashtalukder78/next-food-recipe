import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href={`/recipe-list`}>
        <button className="btn btn-primary btn-sm">Go to recipe-list</button>
      </Link>
      <div className="flex justify-center items-center my-6 gap-4">
        <div>
          <Image
            src={getRecipeDetails?.image}
            alt="Recipe Photo"
            height={400}
            width={300}
          />
          <div>
            <h1 className="text-3xl ">{getRecipeDetails?.name}</h1>
            <p>{getRecipeDetails?.mealType[0]}</p>
            <div>
              <h3>Ingrediants</h3>
              <ul className="text-blue-950">
                {getRecipeDetails?.ingredients.map((item) => (
                  <ol key={item[0]} className="text-gray-700">{item}</ol>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
