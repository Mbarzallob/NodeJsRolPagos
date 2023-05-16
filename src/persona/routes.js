// router.get("/:id", controller.getCargoId)


const {Router} = require('express');
const controller = require('./controller')

const router = Router();


router.get("/", controller.getPersonas)
router.post("/", controller.addPersona)
router.post("/usuario", controller.addUsuario)
router.get("/usuario", controller.getUsuario)
router.post("/login",controller.login)
router.post("/reset", controller.reset)
router.post("/pruebas", controller.pruebas)
router.get("/rolIndividual/:usuario", controller.rolIndividual)
router.post("/ingresoRol", controller.ingresoRol)
router.get("/nombre/:idpersona", controller.rolPagosNombre)
router.get("/cargo/:idpersona", controller.getCargo)
router.get("/rolId/:idpersona", controller.getIdRol )
router.get("/sueldoBasico/:idpersona", controller.getSueldo)
router.get("/horasExtras/:idpersona", controller.getExtras)
router.get("/comision/:idpersona", controller.getComision)
router.get("/iees/:idpersona", controller.getIEES)
router.get("/anticipos/:idpersona", controller.getAnticipo)
router.get("/ingresos/:idpersona", controller.getIngresos)
router.get("/descuentos/:idpersona", controller.getDescuentos)
router.get("/salarioN/:idpersona", controller.getSalarioN)


module.exports = router;
