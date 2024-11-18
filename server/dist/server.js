import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
const port = 8080;
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use(express.json());
const SECRET_JWT_TOKEN = "CORPSESOFTHELESSERKNOWN";
const testUser = {
  username: "Raiden",
  password: bcrypt.hashSync("fernando@#", 10), // Hash the password when creating the user]
};
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  if (username !== testUser.username) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  if (!bcrypt.compareSync(password, testUser.password)) {
    return res.status(401).json({ error: "Password incorrect" });
  }
  const token = jwt.sign({ username: testUser.username }, SECRET_JWT_TOKEN, {
    expiresIn: "24h",
  });
  res.json({
    message: "login success",
    token: token,
  });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
