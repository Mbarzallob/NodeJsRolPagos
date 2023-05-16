// const getCargoId = 'select * from cargos where id_cargo =$1'

const getPersonas = 'select * from personas'
const addPersona = "insert into personas ( nombre, apellido, direccion, telefono, correo_electronico, id_cargo ) values($1,$2,$3,$4,$5,$6)";
const getUsuarios = "select * from usuarios"
const addUsuario = "insert into usuarios (usuario,contrasena) values ($1,$2)"
const login = "SELECT * FROM usuarios WHERE usuario = $1 AND contrasena = $2"
const reset = "truncate table personas,usuarios,rolpagos restart identity"
const pruebas = "INSERT INTO personas (nombre, apellido, direccion, telefono, correo_electronico, id_cargo) VALUES ('Mateo', 'Barzallo', 'Caballo Campana', '0983935886', 'mbarzallob@example.com', 2),('Camila', 'Ramirez', 'Ricaurte', '0987654321', 'jramirezs@example.com', 1); insert into usuarios(usuario, contrasena) values('mbarzallob','jcrs16012023'),('jramirezs','mjbb16012023')"
const ingresoRol = "insert into rolpagos(sueldo_basico, horas_extras, comisiones,iees,anticipos)values((select salario from cargos where id_cargo =(select id_cargo from personas where id_persona=$1)),$2,$3,9.45,$4 )"
const rolIndividual ="select id_persona from usuarios where usuario = $1"
const rolPagosNombre ="select nombre,apellido from personas where id_persona = $1"
const getCargo ="select nombre_cargo from cargos where id_cargo=(select id_cargo from personas where id_persona=$1)"
const getIdRol ="select id_rol_pago from rolpagos where id_persona = $1"
const getSueldo = "select sueldo_basico from rolpagos where id_persona = $1"
const getExtras = "select trunc(((sueldo_basico/30)/8) * horas_extras,2) as horasExtras from rolpagos where id_persona = $1"
const getComision = "select comisiones from rolpagos where id_persona = $1"
const getIESS = "select trunc((sueldo_basico*iees)/100,2) as iees from rolpagos where id_persona = $1"
const getAnticipo = "select anticipos from rolpagos where id_persona = $1"
const getIngresos = "select trunc((sueldo_basico)+(((sueldo_basico / 30)/8) * horas_extras)+(comisiones),2) as ingresos from rolpagos where id_persona = $1"
const getDescuentos = "select trunc(((sueldo_basico * iees)/100)+(anticipos),2) as descuentos from rolpagos where id_persona = $1"
const getSalarioN = "select trunc(((sueldo_basico)+(((sueldo_basico / 30)/8)  *horas_extras)+(comisiones)) - ((sueldo_basico * iees)/100)+(anticipos),2) as salarioN from rolpagos where id_persona = $1"

module.exports = {

    addPersona,
    getPersonas,
    getUsuarios,
    addUsuario,
    login,
    reset,
    pruebas,
    ingresoRol,
    rolIndividual,
    rolPagosNombre,
    getCargo,
    getIdRol,
    getSueldo,
    getExtras,
    getComision,
    getIESS,
    getAnticipo,
    getIngresos,
    getDescuentos,
    getSalarioN


}