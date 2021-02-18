const mongoose = require('mongoose');

const connectionURL = 'mongodb+srv://*****:*****08@cluster0.xn0wt.mongodb.net/User?retryWrites=true&w=majority'


mongoose.connect(connectionURL,{useNewUrlParser: true},
  (err)=>{
    if(!err){
      console.log('connected database!!!')
    }else{
      console.log('not connected :()')
    }
  }

)

module.exports = mongoose;