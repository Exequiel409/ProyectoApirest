import mongoose from "mongoose";
import config from "./config";

(async () => 
{
    const db =await mongoose.connect(config.mongodbURL,
    {
         useNewUrlParser: true ,
         useUnifiedTopology: true
    });  
    console.log('La base de datos donde se conecto es :', db.connection.name);
})();