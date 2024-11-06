'use client'

import { MainCategoryRecipe, Recipe, recipes } from '@/data'
import { camelToSentenceCase } from '@/utils'
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { redirect } from 'next/navigation'
import * as React from 'react'

interface RecipeListProps {
  data: MainCategoryRecipe
}

const RecipeList: React.FC<RecipeListProps> = () => {
  const data = recipes
  return (
    <List>
      {Object.keys(data).map((category) => (
        <div key={category}>
          <Typography variant="h3">{camelToSentenceCase(category)}</Typography>
          {Object.keys(data[category]).map((recipeKey) => {
            const recipe: Recipe = data[category][recipeKey]
            return (
              <ListItem
                key={recipeKey}
                onClick={() => {
                  redirect(`recipes/${category}/${recipeKey}`)
                }}
              >
                <ListItemAvatar>
                  <Avatar src={recipe.image} />
                </ListItemAvatar>
                <ListItemText primary={recipe.title} />
              </ListItem>
            )
          })}
        </div>
      ))}
    </List>
  )
}

export default RecipeList
