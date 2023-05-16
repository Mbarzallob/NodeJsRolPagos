// const getCargoId = (req, res) => {
//     const id = parseInt(req.params.id);
//     pool.query(queries.getCargoId, [id], (error, results) => {
//         if (error) throw error;
//         res.status(200).json(results.rows)
//     })
// }

const pool = require('../../conexion')
const queries = require('./queries')

const bcrypt = require('bcrypt');




const addPersona = (req, res) => {
    const { nombre, apellido, direccion, telefono, correo_electronico, id_cargo } = req.body;

    pool.query(queries.addPersona, [nombre, apellido, direccion, telefono, correo_electronico, id_cargo], (error, results) => {
        if (error) throw error;

        res.status(201).send("Persona creada")
    })
}
const ingresoRol =(req,res)=>{
    const {idpersona, horas_extras,comisiones,anticipos} = req.body;
    pool.query(queries.ingresoRol,[idpersona, horas_extras,comisiones,anticipos],(error, results)=>{
        if(error) throw error

        res.status(201).send("Rol creado")
    })
}
const getPersonas = (req, res) => {
    pool.query(queries.getPersonas, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const getUsuario =(req,res)=>{
    pool.query(queries.getUsuarios, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const addUsuario =(req,res)=>{
    const {usuario, contrasena} = req.body;

    pool.query(queries.addUsuario,[usuario,contrasena],(error, results)=>{
        if (error) throw error;

        res.status(201).send("Usuario añadido")
    })
}


const reset = (req,res)=>{
    pool.query(queries.reset,(error, results)=>{
        if(error) throw error;

        res.status(200).send("Las tablas se han reseteado")
    })
}

const login = async (req, res) => {
    const { usuario, contrasena } = req.body;

    const values = [usuario, contrasena];
   
      const result = await pool.query(queries.login, values);
      if (result.rows.length > 0 ) {
        res.status(200).json({ authenticated: true });
      } else {
        res.status(401).json({ authenticated: false });
      }
   
  }


const pruebas = (req,res)=>{
    pool.query(queries.pruebas,(error, results)=>{
        if(error)throw error;

        res.status(201).send("Personas y usuarios de prueba añadidos")
    })
}

const rolIndividual =(req,res)=>{
    const usuario = req.params.usuario;
    pool.query(queries.rolIndividual,[usuario],(error,results)=>{
    if(error)throw error;

    res.status(200).send(results.rows)

})
}
const rolPagosNombre =(req,res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.rolPagosNombre,[idpersona],(error,results)=>{
        if(error) throw error;

        res.status(200).send(results.rows)
    })
}
const getCargo =(req,res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getCargo,[idpersona],(error,results)=>{
        if(error)throw error;

        res.status(200).send(results.rows)
    })
}


const getIdRol=(req,res)=>{
    const idpersona=req.params.idpersona
    pool.query(queries.getIdRol,[idpersona],(error,results)=>{
        if(error) throw error;

        res.status(200).send(results.rows)
    })
}
const getSueldo = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getSueldo,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getExtras = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getExtras,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getComision = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getComision,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getIEES = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getIESS,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getAnticipo = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getAnticipo,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getIngresos = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getIngresos,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getDescuentos = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getDescuentos,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getSalarioN = (req, res)=>{
    const idpersona = req.params.idpersona
    pool.query(queries.getSalarioN,[idpersona],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {

    addPersona,
    getPersonas,
    addUsuario,
    getUsuario,
    login,
    reset,
    pruebas,
    rolIndividual,
    ingresoRol,
    rolPagosNombre,
    getCargo,
    getIdRol,
    getSalarioN,
    getSueldo,
    getAnticipo,
    getComision,
    getIEES,
    getDescuentos,
    getIngresos, 
    getExtras
    
}