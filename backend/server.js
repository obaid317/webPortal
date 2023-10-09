let express = require("express");
let app = express();
let db = require("./db/connectDb");
const Users = require("./models/users");
db.dbConnect();
console.log("db.get");
console.log(db.get());
app.listen(1212, () => console.log("listening on http://127.0.0.1:8000"));

app.post("/testing", async (req, res) => {
  console.log(req);
  try {
    let getData = await Users.find({});
    console.log("getData");
    console.log(getData);
    res.send({ abc: "sss" });
  } catch (e) {
    console.log(e);
    res.send({ e: e });
  }
});
