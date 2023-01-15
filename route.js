const express = require('express')
const router = express.Router()
const Voile = require('../models/voile')
//const bcrypt  = require('bcrypt')


//Post Method
router.post('/post', async(request, response) => {

   /* const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)*/

    const data  = new Voile({
        nom:request.body.nom,
        type:request.body.type,
        prix:request.body.prix,
        quantite:request.body.quantite,
        nbre_pique:request.body.nbre_pique

    })

    try {
        const dataToSave = await data.save();
        response.status(200).json(dataToSave)
    }
    catch (error) {
        response.status(400).json({message: error.message})
    }
   
})

//Get all Method
router.get('/getAll', async (request, response) => {
    try{
        const data = await Voile.find();
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (request, response) => {
    try{
        const data = await Voile.findById(request.params.id);
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const updatedData = request.body;
        const options = { new: true };

        const result = await Voile.findByIdAndUpdate(
            id, updatedData, options
        )

        response.send(result)
    }
    catch (error) {
        response.status(400).json({ message: error.message })
        
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const data = await Voile.findByIdAndDelete(id)
        response.send(`${data.nom} a ete supprime avec succes..`)
    }
    catch (error) {
        response.status(400).json({ message: error.message })
    }
})

module.exports  = router