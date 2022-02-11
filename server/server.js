const express = require('express')
const cors = require('cors')
const path = require('path')
// const res = require('express/lib/response')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`server running on 4000`))
