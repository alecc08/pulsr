'use strict';

let express = require("express");

let app = express();

app.use(express.static('./'))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})