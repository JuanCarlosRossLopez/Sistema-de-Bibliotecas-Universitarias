const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Rol = require('../models/Rol');
const secretKey = process.env.SECRET_KEY;

exports.login = async (req, res) => {
    try {
        const { mail, password } = req.body;

        if (!mail || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ where: { mail }, include: Rol });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Añadir log para verificar contraseñas
        console.log(`Comparing passwords: ${password} with hash: ${user.password}`);

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id_users, role: user.Rol.name_rol }, secretKey, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({
            id: user.id_users,
            mail: user.mail,
            role: user.Rol.name_rol,
            accessToken: token
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
};

exports.isAdmin = (req, res, next) => {
    if (req.userRole !== 'admin') {
        return res.status(403).send({ message: 'Require Admin Role!' });
    }
    next();
};

exports.isEmployee = (req, res, next) => {
    if (req.userRole !== 'employee') {
        return res.status(403).send({ message: 'Require Employee Role!' });
    }
    next();
};

exports.isStudent = (req, res, next) => {
    if (req.userRole !== 'student') {
        return res.status(403).send({ message: 'Require Student Role!' });
    }
    next();
};
