import express from 'express'
import TaskRoutes from "./routes/tasks.routes";
const app= express();
app.set('port', 3000);//setea el puerto donde va a funcionar

app.get('/',(req,res) =>
{
    res.json({message: "Bienvenidos"});
})

app.use('/api/task',TaskRoutes);

export default app;