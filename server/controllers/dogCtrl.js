const addDogs = (req, res, next) => {
    console.log("hello")
    req.app
      .get('db')
      .add_dog([req.body.name,req.body.age])
      .then(response =>
        res.status(200).send({ message: 'Successfully added '+req.body.name+' to DB' })
      )
      .catch(e => res.status(500).send(e));
  };

const getDogs = (req,res)=>{
    req.app
        .get("db")
        .get_dogs()
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>res.status(500).send(err))
}

const deleteDog = (req,res)=>{
    req.app
        .get("db")
        .delete_dog(req.params.id)
        .then(response=>{
            res.status(200).json("Dog with id of "+req.params.id+" was deleted.")
        })
        .catch(err=>res.status(500).send(err))
}
  
  module.exports = {
    addDog: addDogs,
    getDogs: getDogs,
    deleteDog: deleteDog
  };