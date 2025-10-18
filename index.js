const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3001
app.use(cors())
app.get('/', (req, res) =>{
    console.log('Hello World!')
  res.send('Hello World!')
})
app.listen(PORT, () => console.log(`Test Server Running..${PORT}`))