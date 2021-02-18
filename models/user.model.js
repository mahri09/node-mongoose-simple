const db = require("../db");


const userSchema = new db.Schema({
  name: {type: String},
  lastName: {type: String},
  email: {type: String},
  age: {type: Number},
  gender: {type: String}, 
  isActive: {type: Boolean} 

})

module.exports = db.model("Users", userSchema);