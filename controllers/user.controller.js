const User = require ('../models/user.model');

exports.create = (req, res) => {
  console.log('?')
  /*Create a user*/
  const user = new User ({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    isActive: req.body.isActive,
  })

  
  /* Save user to database*/
  user
  .save()
  .then((data)=>{
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  });

}

exports.findAll=(req, res)=>{
  User.find()
  .then((users)=>{
    res.send(users)
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.findOne = (req, res) =>{
 
  User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      });
    }
    res.status(200).send(user);
    console.log(user);
  })
  .catch((err) => {
    res.send(err)
  });
}

exports.delete = (req, res)=>{
  User.findByIdAndRemove(req.params.id)
    .then((user)=>{
      if(!user){
        return res.send('User not found!')
      }
      res.send({ message: "User deleted successfully!" })
    })
    .catch((err)=> {
      return res.send(err)
    })
}

exports.UpdateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "no user found",
          });
        }
        res.status(200).send(user);
      })
      .catch((err) => {
        return res.send(err);
      });
}