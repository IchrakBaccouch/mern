const mongoose = rquire ("mongoose")

const movieSchema = mongoose.schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    youtube:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    

})
const Movie = mongoose.Model(movieSchema,"Movie")

module.exports = Movie