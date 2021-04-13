import { Router } from "express";
const router= Router();

router.get('/',(req,res) =>
{
    res.send('Task');
})
router.get('/Login',(req,res) =>
{
    res.send('Ingrese sus datos');
})

export default router;