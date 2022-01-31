import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

//app config
//creating an instance of the app
const app = express();
//defining a port
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((res, req, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"), 
  res.setHeader("Access-Control-Allow-Headers", "*"),
  next()
});


//DB config
const connection_url =
  "mongodb+srv://arbiva:Adi101010@cluster1.macql.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
 
// mongoose.connect('mongodb://localhost:9000/tiktok');

//api endpoints
//when we call the app from the root directory with a "get" method
app.get("/", (req, res) => res.status(200).send("Hello"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    }else {
      res.status(200).send(data);
    }
  })
})

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("SUCCC");
      res.status(201).send(data);
    }
  });
});

//listen
//to make the app listen:
app.listen(port, () => console.log(`listening on localhost: ${port}`));
