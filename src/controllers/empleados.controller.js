
import Empleados from "../models/Empleados";


export const AgregaEmpleado= async (req,res) =>
{
 const nuevo= new Empleados
    ({
        documento:req.body.documento, 
        apellido: req.body.apellido,  
        nombre: req.body.nombre,  
        nacionalidad: req.body.nacionalidad
    });
 const Guardado = await nuevo.save();

    res.json(Guardado)
}

export const ListarEmpleados= async(req,res) =>
{
    const Listado= await Empleados.find()
    res.json(Listado)
}

export const GetEmpleado = async(req,res) =>
{
    
    const Encontrado= await Empleados.findById(req.params.id)
    
    res.json(Encontrado)
}

export const DeleteEmpleado = async(req,res) =>
{
    const borrado= await Empleados.findByIdAndDelete(req.params.id)
    res.json({message: 'Tarea Eliminada'})
}