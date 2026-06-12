const express = require("express");
//const path = require("path");

const connectDB =
require("./config/db");

const logger =
require("./middleware/logger");

const studentRoutes =
require("./routes/studentRoutes");

const getMessage =
require("./utils/message");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

app.use(logger);

app.use(
  express.static("public")
);

console.log(getMessage());

app.get("/",(req,res)=>{
  res.sendFile(
    path.join(
      __dirname,
      "views",
      "home.html"
    )
  );
});

app.get("/about",(req,res)=>{
  res.sendFile(
    path.join(
      __dirname,
      "views",
      "about.html"
    )
  );
});

app.get("/contact",(req,res)=>{
  res.sendFile(
    path.join(
      __dirname,
      "views",
      "contact.html"
    )
  );
});

app.post("/form",(req,res)=>{
  res.json(req.body);
});

app.use("/student",
studentRoutes);

const path = require("path");

app.get("/form",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"views","form.html")
    );
});

app.listen(3000,()=>{

  console.log(
    "Server Running On Port 3000"
  );

});