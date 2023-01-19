require("dotenv").config();

/**/
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//method-override package
const methodOverride = require("method-override");

/** Config**/
const PORT = 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
* ROUTES
*/
/* NEW ROUTE */
app.get("/logs", (req, res) => {
    res.render("New");
  });
/* CREATE ROUTE */
  router.post('/', (req, res) => {
    const { title, body } = req.body
// console.log(req.body)
    if (req.body.ShipIsBroken === 'on') {
    //if checked, req.body.ShipIsBroken is set to 'on'
      req.body.goodDay = true
    } else {
    //if not checked, req.body.ShipIsBroken is undefined
      req.body.ShipIsBroken = false
    }
    Log.create(req.body, (error, createdLog) => {
       res.redirect('/logs/') // sends to /logs get route
    })
  /* Index Route */
  app.get("/", (req, res) => {
    res.send("New");
  });
  app.listen(PORT, (req, res) => {
    console.log("Listening on port 3000");
  });

//*Show Route*//
app.get("/", (req, res) => {
    res.send("New");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});})