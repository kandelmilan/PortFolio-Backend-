const Joi = require("joi");
const jwt = require("jsonwebtoken");

// Hardcoded credentials
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin@123";

// Validation schema
const AdminLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginAdmin = async (req, res) => {
  try {
    // 1. Validate input
    const { error, value } = AdminLoginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { email, password } = value;

    // 2. Check credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // 3. Generate JWT token
    const token = jwt.sign(
      { email: ADMIN_EMAIL },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "5m" }
    );

    // 4. Send response
    return res.status(200).json({
      message: "Login successful",
      token,
      expiresIn: "5m",
    });

  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

module.exports = { loginAdmin };