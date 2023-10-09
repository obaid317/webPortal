const mongoose = require("mongoose");
let config = require("../config.json");
let mongoCon;
async function dbConnect() {
  // ''
  let db = `mongodb://${config.db.host}:${config.db.port}/${config.db.database}`;
  console.log(" db ", db);
  try {
    let conn = await mongoose.connect(db);
    // console.log("conn");
    // console.log(conn?.connection?.db);
    mongoCon = conn?.connection?.db;
  } catch (e) {
    console.log("error connecting");
    console.log(e);
  }
}

function get() {
  return mongoCon;
}

module.exports = { dbConnect, get };
