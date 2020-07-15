const express = require("express");
const bodyParser = require("body-parser");
/*const request = require("request");

const app = express();
*/
const app = express();
let items = ["Buy Food","Cook Food","Eat Food",];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.get("/",function(req,res)
{
let today = new Date();
let options = {
  weekday: "long",
  year:"numeric",
  day: "numeric",
  month:"long"
};
let  day = today.toLocaleDateString("en-US",options);



 res.render("list",{kindOfDay:day,NewListItems:items});

});

app.post("/",function(req,res)
{
let item = req.body.newItem;
items.push(item);
res.redirect("/");
});

app.listen(process.env.PORT || 3000,function()
{
  console.log("Server is running there");
})
