
const express = require('express');
const router = express.Router();


let bearArray = [
    {id:1,name:"Grizzly Bear",type:"Scary",place:"Scandinavian Countries"},
    {id:2, name:"Polar Bear",type:"Cute",place:"Polar Regions"},
    {id:3, name:"Sloth Bear",type:"Lazy",place:"All Over"}
];

//GET All
router.get("/",(req, res) =>{

    res.send(bearArray);
    console.log("Get All Method is called.")
});

//GET WITH PARAMS
router.get("/:bearId",(req,res) =>{
  let bearId = req.params.bearId;
  let bear = bearArray.find(b =>b.id == bearId);
  if (!bear){
      return res.status(404).send("Given ID does not exsist");
  }
   res.send(bear);
});

//POST
router.post("/", (req,res) =>{

    if(!req.body.name){
        return res.status(400).send("Not all mandatory values are sent");
    }
    let newBearObj ={
        id: bearArray.length =1,
        name: req.body.name,
        type: req.body.Type,
        place: req.body.place
    }
    bearArray.push(newBearObj);
    res.send(newBearObj);
})

//PUT
router.put("/:bearId",(req,res) =>{
    let bear = bearArray.find(b=>b.id == req.params.bearId);
    if(!bear){
        return res.status(404).send("The given ID does not exist");

    }
    bear.name = req.body.name;
    res.send(bear);

});

//DELETE
router.delete('/',(req,res) =>{
    let bear = bearArray.find(b=>b.id == req.params.bearId);
    if(!bear){
        return res.status(404).send("The given ID does not exist");

    }
let index = bearArray.indexOf(bear);
bearArray.splice(index, 1);
res.send(bear);
});

module.exports = router;
