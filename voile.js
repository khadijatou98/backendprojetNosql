const mongoose = require('mongoose')

const Voile = new mongoose.Schema({
    nom:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    prix:{
        type: Number,
        required:true
    },
   quantite:{
        type: Number,
        required:true
    },
    nbre_pique:{
        type: Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', Voile)