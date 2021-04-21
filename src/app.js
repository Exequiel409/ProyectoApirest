import express from 'express'
import TaskRoutes from "./routes/tasks.routes";
const app= express();

//Configuracion
app.set('port', 3000);//setea el puerto donde va a funcionar

app.use(express.json());
//Rutas

app.get('/',(req,res) =>
{
    res.json({message: "Bienvenidos"});
})

app.use('/api/task',TaskRoutes);

export default app;