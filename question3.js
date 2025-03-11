import express from "express"

const PORT = 3000

const app = express()

app.get('/test', (req, res) => {
    res.json({message: 'Express is working! Joanna Marie F. Baguio'})
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})