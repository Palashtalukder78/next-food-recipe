import RecipeDetailsItem from "@/app/components/recipe-details";
import { fetchListOfRecipes } from "../page";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);

  console.log("GetDetails: ", getRecipeDetails);

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}

export async function generateStaticParams() {
  const recipes = await fetchListOfRecipes();
  return recipes.map((recipe) => {
    console.log(recipe)
    return {
      details: recipe.id.toString(),
    };
  });
}
