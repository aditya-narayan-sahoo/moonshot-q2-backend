const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

// Simulating a database
const dbFile = path.join(__dirname, "../data/users.json");
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

const loadUsers = () => {
  try {
    const data = readFileSync(dbFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveUsers = (users) => {
  writeFileSync(dbFile, JSON.stringify(users, null, 2));
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const users = loadUsers();
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashedPassword };

  users.push(newUser);
  saveUsers(users);

  const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(201).json({
    message: "User registered successfully",
    token,
  });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const users = loadUsers();
  const user = users.find((user) => user.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(200).json({
    message: "Login successful",
    token,
  });
};

// Logout
exports.logout = (req, res) => {
  res.status(200).json({ message: "Logout successful" });
};
