import express from 'express'
import { ENV } from './config/env.js'
import { db } from './config/db.js'
import { favoritesTable } from './db/schema.js'

const app = express()

app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true })
})

app.post("/api/favorites", async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings } = req.body

    if (!userId || !recipeId || !title) {
      return res.status(400).json({ error: "Missing required fields." })
    }

    const newFavorites = await db.insert(favoritesTable)
      .values({ userId, recipeId, title, image, cookTime, servings })
      .returning()

    return res.status(200).json(newFavorites[0])
  } catch (err) {
    console.error("Error adding favorite: ", err)
    res.status(500).json({ msg: "Something error." })
  }
})

app.listen(ENV.PORT, () => {
  console.log(`backend is running on http://localhost:${ENV.PORT}`)
})