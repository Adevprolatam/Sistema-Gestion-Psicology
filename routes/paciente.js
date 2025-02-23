const {Router} = require('express');
const router = Router();
//VALIDATORS
const { validarCampos } = require('../middlewares/validar-campos')
const { check } = require('express-validator');

const {
    obtenerPacientesTodos,
    obtenerPacienteByID, 
    crearPaciente,
    actualizarPaciente,
    borrarPaciente
} = require("../controllers/paciente");

//Todo: Route Paciente

router.get("/", obtenerPacientesTodos);
router.post("/",
    [
        check('ci','La cedula es obligatoria').not().isEmpty(),
        check('nombres','El campo es obligatorio').not().isEmpty(),
        check('apellidos','El campo es obligatorio').not().isEmpty(),
        check('edad','El campo es obligatorio').isNumeric(),
        check('edad', 'La edad debe ser un entero').isInt(),
        check('genero','El campo es obligatorio ').not().isEmpty(),
        check('genero', 'El género debe ser "m", "f" o "no-specific"').isIn(['m', 'f', 'no-specific']),
        check('etnia','El campo es obligatorio').not().isEmpty(),
        check('tipo_sangre', 'El campo es obligatorio').not().isEmpty(),
        check('tipo_sangre', 'El tipo de sangre debe ser válido').isIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'N/A']),
        //check('hospital','El hospital id debe de ser válido').isMongoId(),
        validarCampos
    ], 
crearPaciente);

router.get("/:id",obtenerPacienteByID)
router.post("/:id",
    [
        check('ci','La cedula es obligatoria').not().isEmpty(),
        check('nombres','El campo es obligatorio').not().isEmpty(),
        check('apellidos','El campo es obligatorio').not().isEmpty(),
        check('edad','El campo es obligatorio').isNumeric(),
        check('edad', 'La edad debe ser un entero').isInt(),
        check('genero','El campo es obligatorio ').not().isEmpty(),
        check('genero', 'El género debe ser "m", "f" o "no-specific"').isIn(['m', 'f', 'no-specific']),
        check('etnia','El campo es obligatorio').not().isEmpty(),
        check('tipo_sangre', 'El campo es obligatorio').not().isEmpty(),
        check('tipo_sangre', 'El tipo de sangre debe ser válido').isIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'N/A']),
        validarCampos
    ], 
    actualizarPaciente);
router.delete("/:id",borrarPaciente);
module.exports = router;