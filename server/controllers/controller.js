const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const secretkey = 'userSchema';
const saltRounds = 10;



//Registration
const user_register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User registered successfully:', newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
};




//Login
const user_login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user)
    if (user===null) {

      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword)
    if (!validPassword) {
      return res.status(401).json({ error: 'password wrong' });
    }

    const token = jwt.sign({ userId: user._id }, secretkey, { expiresIn: '1h' });
    console.log('Login successful. User ID:', user._id);
    res.send({message:"login suscces"});
    res.end();
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

module.exports = {
  user_register,
  user_login,
};
