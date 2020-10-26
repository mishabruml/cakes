export const cakes = (recipe, available) => {
  // validate the recipe and available ingredients
  // would have used something like Joi here but kept it dependency-free
  const validObject = o => typeof o === 'object' && Object.keys(o).length > 0
  if (!validObject(recipe) || !validObject(available)) return 0

  const recipeIngredients = Object.keys(recipe)

  // max number of times each recipe ingredient divides into available ingredients
  const nCakesPossiblePerIngredient = recipeIngredients.map(recipeIngredient =>
    Math.floor(available[recipeIngredient] / recipe[recipeIngredient] || 0)
  )
  return Math.min(...nCakesPossiblePerIngredient) // total number of cakes possible is minimum for any ingredient...
}
