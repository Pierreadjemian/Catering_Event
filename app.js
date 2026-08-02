const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors");
const mysql = require("mysql");
const { createConnection } = require('net');

app.use(cors({
  origin: "*",
  methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
  // credentials: false (default)
}));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
  return res.send("backend is running");
});


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "catering_events",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error:", err);
  } else {
    console.log("Connected to my sql database");
  }
});

/*app.post("/menu_item", (req , res) => {
  const id= req.body.id;
  const title= req.body.title;
  const price= req.body.price;
  const Description=req.body.Description;

  const q="INSERT INTO `menu_item`(`id`, `title`, `price`, `description`) VALUES (?,?,?,?)"

  db.query(q, [title,price,Description], (err, data) => {
    if (err){
      console.log(err);
      return res.send(data);

    }return res.json(data);

  })

})*/
// GET all menu items
// GET all menu items
app.get("/menu_item", (req, res) => {
  const q = "SELECT * FROM menu_item ORDER BY id";
  db.query(q, (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json(rows);
  });
});

// POST create a new menu item
app.post("/menu_item", (req, res) => {
  const { title, price, description, image } = req.body;
  const q = "INSERT INTO menu_item (title, price, description, image) VALUES (?, ?, ?, ?)";
  db.query(q, [title, price, description, image], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.status(201).json({ id: result.insertId, title, price, description, image });
  });
});

// PUT update a menu item
app.put("/menu_item/:id", (req, res) => {
  const { title, price, description, image } = req.body;
  const q = "UPDATE menu_item SET title = ?, price = ?, description = ?, image = ? WHERE id = ?";
  db.query(q, [title, price, description, image, req.params.id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json({ message: "Updated" });
  });
});

// DELETE a menu item
app.delete("/menu_item/:id", (req, res) => {
  const q = "DELETE FROM menu_item WHERE id = ?";
  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json({ message: "Deleted" });
  });
});

// LOGIN
app.get('/login', (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.log("Query error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Login successful", user: results[0] });
  });
});
// ADMIN LOGIN
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123"; // pick your own

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return res.status(200).json({ message: "Admin login successful", token: "admin-session" });
  }

  return res.status(401).json({ message: "Invalid admin credentials" });
});

// SIGNUP
app.post('/signup', (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    return res.status(400).json({ message: "Name, password and email are required" });
  }

  const checkQuery = "SELECT * FROM users WHERE name = ? OR email = ?";

  db.query(checkQuery, [name, email], (err, results) => {
    if (err) {
      console.log("Query error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length > 0) {//must be greater then 0 meaning there is a user
      return res.status(400).json({ message: "User already exists" });
    }

    const insertQuery = "INSERT INTO users (name, password, email) VALUES (?, ?, ?)";

    db.query(insertQuery, [name, password, email], (err, result) => {
      if (err) {
        console.log("Insert error:", err);
        return res.status(500).json({ message: "Server error" });
      }

      return res.status(200).json({ message: "User created successfully", id: result.insertId });
    });
  });
});

// GET all users
app.get("/users", (req, res) => {
  const q = "SELECT id, name, email FROM users ORDER BY id";
  db.query(q, (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json(rows);
  });
});

// PUT update a user
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;
  const q = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(q, [name, email, req.params.id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json({ message: "Updated" });
  });
});
// DELETE a user
app.delete("/users/:id", (req, res) => {
  const q = "DELETE FROM users WHERE id = ?";
  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json({ message: "Deleted" });
  });
});

app.listen(8080, () => {
  console.log("connected to the backend");
});
console.log("Before listen");