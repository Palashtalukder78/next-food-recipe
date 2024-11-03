import Image from "next/image";
import React from "react";
import demoImage from "@/public/demoFood.jpeg";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  // Log the data to check the structure
  console.log(recipeList);

  return (
    <div className="m-4 text-black">
      <h1 className="text-3xl mb-4 ">Recipes</h1>
      <Link href={"/"}>
        <button className="btn mb-2 btn-primary btn-sm">Go Back</button>
      </Link>
      <div className="grid grid-cols-4 gap-4">
        {recipeList.length > 0 ? (
          recipeList.map((recipe) => (
            <div key={recipe.id}>
              <div className="card card-compact bg-gray-200 shadow-xl">
                <figure>
                  {recipe.image ? (
                    <Image
                      src={recipe.image}
                      alt={recipe.name || "Recipe Image"}
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={demoImage}
                      alt="Default Image"
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{recipe.name}</h2>
                  <div className="flex justify-end align-middle items-center">
                    <p>
                      Ratting: {recipe.rating} ({recipe.reviewCount})
                    </p>{" "}
                    <p className="text-xl">{recipe.cuisine}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <Link href={`/recipe-list/${recipe?.id}`}>
                      <button className="btn btn-sm btn-primary">
                        View Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes available.</p>
        )}
      </div>
    </div>
  );
}
