import express from 'express'
import { ENV } from './config/env.js'
import { db } from './config/db.js'
import { favoritesTable } from './db/schema.js'
import job from './config/cron.js'

const app = express()

if (ENV.NODE_ENV === 'production') {
  job.start()
}

app.use(express.json())

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

app.get("/api/favorites/:userId", async (req, res) => {
  const { userId } = req.params

  try {
    const userFavorites = await db.select().from(favoritesTable).where(eq(favoritesTable.userId, userId))
    res.status(200).json(userFavorites)
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong.' })
  }
})

app.delete("/api/favorites/:userId/:recipeId", async (req, res) => {
  const { userId, recipeId } = req.params
  try {
    await db.delete(favoritesTable).where(
      and(eq(favoritesTable.userId, userId), eq(favoritesTable.recipeId, parseInt(recipeId)))
    )
    res.status(200).json({ msg: 'success.' })
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' })
  }
})

app.listen(ENV.PORT, () => {
  console.log(`backend is running on http://localhost:${ENV.PORT}`)
})