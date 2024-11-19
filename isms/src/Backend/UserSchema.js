const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    passwordHash: { type: String, required: true }
});

const bcrypt = require('bcrypt');

const createUser  = async (username, password) => {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser  = new UserSchema({ username, passwordHash });
    await newUser.save();
};
const loginUser  = async (username, password) => {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.passwordHash)) {
        // Contraseña correcta, proceder con la autenticación
    } else {
        // Contraseña incorrecta
    }
};