const express = require("express");
const app = express();
const pool = require("../middleware/connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");
const con = require("../middleware/connect");
const JWT_SECRET = process.env.JWT_SECRET;

const getIndex = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM gym_w");

  res.status(200).send(rows);
};

const getIndexId = async (req, res) => {
  const { id } = req.params;

  try {
    const [getId] = await pool.query("SELECT * FROM gym_w WHERE id = ?", [id]);

    if (getId.length === 0) {
      // if no length in array
      res.status(404).send("ID NOT FOUND.");
    } else {
      res.status(200).send(getId);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const postIndex = async (req, res) => {
  const { title, description } = req.body; 
  // use different const for image because it uses req.file and not req.body
  const img = req.file ? req.file.filename : null; 
  
  try {
    if (!title || !description || !img) {
      res.send("Input all fields");
      console.log(req.body);
    } else {
      const newWorkout = await pool.query(
        "INSERT INTO gym_w (title, description, img) VALUES (?, ?, ?)",
        [title, description, img]
      );
      res.status(200).send(`${title}\n ${description}`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteIndex = async (req, res) => {
  const { id } = req.params;

  try {
    const [deleteId] = await pool.query("DELETE FROM gym_w WHERE id = ?", [id]);

    if (deleteId.affectedRows === 0) {
      // to check if any rows is being put in that...dasdaw
      res.status(404).send("No ID FOUND");
      console.log(deleteId.affectedRows);
    } else {
      res.status(200).send("success deleted");
      console.log(deleteId.length);
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(deleteId.affectedRows);
  }
};

const updateIndex = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const [updateId] = await pool.query(
      "UPDATE gym_w SET title = ?, description = ? WHERE id = ?",
      [title, description, id]
    );
    if (updateId.affectedRows === 0) {
      res.status(404).send("NO ID FOUND");
    } else {
      res.status(200).send("SUCCESSS");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      res.send("Please input all fields");
    } else {
      const [existingUser] = await pool.query(
        "SELECT * FROM auth WHERE email = ?",
        [email]
      ); // use [] to get the first array

      if (existingUser.length > 0) {
        // get the lenght of array
        res.send("Email already exist");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const registerUser = await pool.query(
          "INSERT INTO auth (username, email, password) VALUE (?,?,?)",
          [username, email, hashedPassword]
        );

        res.send(token);
      }
    }
  } catch (err) {
    res.send(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send("Please input all fields.");
    } else {
      // do not forget [], so the code knows the first [] will be used
      const [checkAuth] = await pool.query(
        "SELECT * FROM auth WHERE email = ?",
        [email]
      );

      if (checkAuth.length === 0) {
        // if 0 is the length of the array
        res.send("No email found.");
      }

      // check if true or false, compare the password and the first array password
      // convert the password again to hash to compare
      const isMatch = await bcrypt.compare(password, checkAuth[0].password);

      if (isMatch) {
        // if true

        // its like this, the secret is the account of the backend or server that is
        //implemented in the jwt token so when we use  that token we know it is from our server

        const username = checkAuth[0].username;

        console.log(username);
        console.log(checkAuth)

        const token = jwt.sign({ email, username }, JWT_SECRET, {
          expiresIn: "1h",
        });
        console.log("nice")
        res.json({"userInfo" : {"userToken": token, "email": email, "usename": username}});
      } else {
        res.send("Password incorrect.");
      }
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getIndex,
  getIndexId,
  postIndex,
  deleteIndex,
  updateIndex,
  register,
  login,
};
