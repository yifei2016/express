const express = require('express')
const app = express()

app.get('/api/movie', function (req, res) {
  let response = {name:"dragon"}//data format can be any js types,go to network to se data,preview
  res.send(response)
})

app.get('/api/movie/search', function (req, res) {
  let response = [{name:"dragon"},{name:'summer'}]//data format can be any js types,go to network to se data,preview
  res.send(response)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
