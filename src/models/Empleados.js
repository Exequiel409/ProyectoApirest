import  { Schema, model } from "mongoose";

const EmpleadosSchema= new Schema
(
    {
        documento:
        {
            type: String,
            require: true,
        }, 
        apellido: 
        {
            type: String,
            require: true,
            trim: true
        },  
        nombre: 
        {
            type: String,
            require: true,
            trim: true
        },  
        nacionalidad:         
        {
            type: String,
            require: true,
            trim: true
        },


    },
    {
        versionKey: false,
        timestamps: true 

    }  
);

export default model('Empleados',EmpleadosSchema)