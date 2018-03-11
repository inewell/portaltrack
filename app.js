var express = require('express')
var app = express()
var path = require('path')

app.use(express.static("statics"))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render(path.join(__dirname+'/index'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))