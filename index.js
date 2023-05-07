const port = 3000;
const app = require("./app");
const mongoose = require("mongoose");
const urlMongoDb = "mongodb+srv://Marfa:Marfarith92@api-marfa.m6jhjpv.mongodb.net/apidb";


mongoose.set('strictQuery', false);
mongoose.connect(urlMongoDb,(err,res) =>{

    try {
        if(err){
            throw err;
        }
        else{
            console.log("La conexión a la base de datos es correcta");

            app.listen(port, () => {
                console.log("Server running at http://localhost:" + port);
            })
        }
    } catch (error) {
        console.log(error);
    }
})

