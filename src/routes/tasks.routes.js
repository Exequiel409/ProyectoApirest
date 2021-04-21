import { Router } from "express";
import * as empleadosController from "../controllers/empleados.controller";

const router= Router();

router.get('/',empleadosController.ListarEmpleados)

router.post('/',empleadosController.AgregaEmpleado)

router.get('/:id',empleadosController.GetEmpleado)

router.delete('/:id', empleadosController.DeleteEmpleado)


export default router;