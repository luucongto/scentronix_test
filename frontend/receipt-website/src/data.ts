export interface Action {
  type: string
  image?: string
  content: string
}
export interface Recipe {
  title: string
  content: string
  actions: Action[]
  image: string
  yield: Action
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
        { type: 'Prep', content: '10 mins', image: '/clock.png' },
        { type: 'Bake', content: '1 hr to 1 hr 15 mins' },
        { type: 'Total', content: '1 hr 10 mins' },
      ],
      yield: { type: 'Yield', content: '1 loaf, 12 generous servings' },
      image: '/recipes/banana-bread.jpg',
    },
  },
  Breakfast: {
    Pancakes: {
      title: 'Pancakes',
      content: 'Fluffy pancakes made with love.',
      actions: [
        { type: 'Prep', content: '10 mins', image: '/clock.png' },
        { type: 'Bake', content: '1 hr to 1 hr 15 mins' },
        { type: 'Total', content: '1 hr 10 mins' },
      ],
      yield: { type: 'Yield', content: '1 loaf, 12 generous servings' },
      image: '/pancakes.jpg',
    },
    Omelette: {
      title: 'Omelette',
      content: 'A classic egg omelette.',
      actions: [
        { type: 'Prep', content: '10 mins', image: '/clock.png' },
        { type: 'Bake', content: '1 hr to 1 hr 15 mins' },
        { type: 'Total', content: '1 hr 10 mins' },
      ],
      yield: { type: 'Yield', content: '1 loaf, 12 generous servings' },
      image: '/omelette.jpg',
    },
  },
  Dinner: {
    Spaghetti: {
      title: 'Spaghetti',
      content: 'Delicious spaghetti with marinara sauce.',
      actions: [
        { type: 'Prep', content: '10 mins', image: '/clock.png' },
        { type: 'Bake', content: '1 hr to 1 hr 15 mins' },
        { type: 'Total', content: '1 hr 10 mins' },
      ],
      yield: { type: 'Yield', content: '1 loaf, 12 generous servings' },
      image: '/spaghetti.jpg',
    },
    Steak: {
      title: 'Steak',
      content: 'Juicy grilled steak.',
      actions: [
        { type: 'Prep', content: '10 mins', image: '/clock.png' },
        { type: 'Bake', content: '1 hr to 1 hr 15 mins' },
        { type: 'Total', content: '1 hr 10 mins' },
      ],
      yield: { type: 'Yield', content: '1 loaf, 12 generous servings' },
      image: '/steak.jpg',
    },
  },
}
export const shopItems = [
  {
    url: '/recipes/bread/quickBread',
    image: '/recipes/banana-bread.jpg',
    title: 'Whole-Grain Banana Bread',
  },
]
