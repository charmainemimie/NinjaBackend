const mongoose=require('mongoose')
const Schema= mongoose.Schema

// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
//   }

  //create geolocation schema
const GeoSchema=new Schema({
    type:{
        type:"String",
        default:"Point",
       
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"  //for the globe/earth
    }
})

//create ninja schema 
const NinjaSchema=new Schema(
    {
        name:{
            type:String,
            required:[true,'Name field is required']
        },
        rank:{
            type:String,
           
        },
        available:{
            type:Boolean,
            default:false
        },
        //add in geo location
        geometry:GeoSchema
    }
)


//create the ninja model
const Ninja=mongoose.model('ninja',NinjaSchema)

module.exports=Ninja