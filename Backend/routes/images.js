const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Image = require("../models/image");
const { populate } = require("../models/user");
require("dotenv").config();



router.get("/", (req, res) => {
    Image.find()
      .then((image) => {
        res.json({ image: image });
      })
      .catch((err) => res.json({ msg: err }));
  });


  
  router.get("/:id", (req, res) => {

    let id = req.params.id
  
    Image.find({user:id})
     .then((userimages) => {
        res.json({ userimages: userimages });
      })
      .catch((err) => res.json({ msg: err }));
  });





  router.post("/new", (req, res) => {

    const newImage = {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      user: req.body.user
    };
    Image.create(newImage)
      // .populate('User')
      .then((image) => {
        res.json({ msg: "podcast has added", image: image });
      })
  
  });


    // edit
    router.put("/EditImage/:imageId", (req, res) => {
        let imageId = req.params.imageId 
      //  let  password= req.body.password
       let  title= req.body.title
       let  image= req.body.image
       let  description= req.body.description


       console.log(title, " lkdl ", image)
       

       
       Image.findByIdAndUpdate(imageId ,{title:title,image:image,description:description})
              .then(editimage =>{
                console.log(editimage)
                  res.json({msg : "Profile is editing", editimage})
              })
      });



  router.delete('/deleteImage/:imageId', (req, res) => {

    let imageId = req.params.imageId
  
  
    Image.deleteOne({ _id: imageId })
      .then(deleteImage => {
        res.json({ msg: "Podcast deleted", deleteImage })
      })
  });

  router.get("/selectImage/:imageid", (req, res) => {

    let imageid = req.params.imageid
  
    Image.find({_id:imageid})
     .then((image) => {
        res.json({ image: image });
      })
      .catch((err) => res.json({ msg: err }));
  });


  router.post("/addrating/:imageid", (req, res) => {
    const imageid  = req.params.imageid ;
    console.log(
      " brate "+req.body.rate ,
      "// image idd "+ imageid )
  if(req.body.rate !=null){
      Image.findByIdAndUpdate(imageid, 
        { $push: { rate: req.body.rate} }
          )
          .then((image) => {
            res.json({msg : "image Updated" , image : image });
              })
          .catch((err) => console.log("Error: User not found ", err));
            }
  });


  module.exports = router;
