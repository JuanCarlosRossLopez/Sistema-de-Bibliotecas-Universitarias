const Rol = require('./models/Rol');

const initRoles = async () => {
    const roles = [
        { name_rol: 'admin', description_rol: 'Administrador del sistema' },
        { name_rol: 'employee', description_rol: 'Empleado de la empresa' },
        { name_rol: 'student', description_rol: 'Estudiante' },
    ];

    for (const role of roles) {
        const existingRole = await Rol.findOne({ where: { name_rol: role.name_rol } });
        if (!existingRole) {
            await Rol.create(role);
        }
    }
};

module.exports = initRoles;
