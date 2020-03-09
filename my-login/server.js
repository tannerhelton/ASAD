//imports
const express = require("express");
const bodyParser = require("body-parser");
const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");

// set some global vars
const CREDENTIALS = JSON.parse(fs.readFileSync("credentials.json", "utf8"));
const CLIENT_ID = CREDENTIALS.web.client_id;
const GOOGLE_CLIENT = new OAuth2Client(CLIENT_ID);

//Web server
const app = express();
const webroot = __dirname + "/";
const port = 5500;

//add some middleware
app.use("/", express.static(webroot));
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.post("/idtoken", async (req, res) => {
  try {
    const token = req.body.idtoken;
    const ticket = await GOOGLE_CLIENT.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    const userid = payload.sub;
    console.log("payload=", payload);
    res.send(userid);
  } catch (exception) {
    res.status(401).send(exception.message);
  }
});

//listen
app.listen(port, () => console.log(`listening on port ${port}`));
