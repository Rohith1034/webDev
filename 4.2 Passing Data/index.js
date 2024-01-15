import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res) {
  res.render("index.ejs");
})

app.post("/submit",function(req,res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  console.log(firstName,lastName);
  res.render("index.ejs", {
    first: firstName,
    last_name: lastName,
    lenofname: firstName.length + lastName.length,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});