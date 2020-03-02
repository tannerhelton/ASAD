//imports
const express = require('express');

//Web server
const app = express();
const webroot = __dirname + "/";
const port = 5500;

//add some middleware
app.use('/', express.static(webroot));

//listen
app.listen(port, () => console.log(`listening on port ${port}`));