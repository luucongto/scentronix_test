export interface Recipe {
  title: string
  content: string
  actions: string[]
  image: string
}
export interface SubCategoryRecipe {
  [key: string]: Recipe
}
export interface MainCategoryRecipe {
  [key: string]: SubCategoryRecipe
}
export const recipes: MainCategoryRecipe = {
  bread: {
    quickBread: {
      title: 'Whole-Grain Banana Bread',
      content:
        "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.",
      actions: [
        'Prep: 10 mins',
        'Bake: 1 hr to 1 hr 15 mins',
        'Total: 1 hr 10 mins',
        'Yield: 1 loaf, 12 generous servings',
      ],
      image: '/recipes/banana-bread.jpg',
    },
  },
}
