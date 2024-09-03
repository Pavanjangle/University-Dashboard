const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pass@8263',
  database: 'university_dashboard'
});

// Connect database here
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Static admin login credentials
// const ADMIN_USERNAME = 'admin';
// const ADMIN_PASSWORD = 'adminpass'; 

// Admin login route (static credentials) u change the static login details do not forgate
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'adminpass') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Example API endpoint to get all students here
app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Student signup route
app.post('/students/signup', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO students (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Signup successful' });
  });
});

// Student login route
app.post('/students/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM students WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Fetch student profile
app.get('/students/:id/profile', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM students WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  });
});

// Update student profile
app.put('/students/:id/profile', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;
  const sql = 'UPDATE students SET first_name = ?, last_name = ? WHERE id = ?';
  db.query(sql, [first_name, last_name, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'Profile updated successfully' });
  });
});

// Fetch student marks
app.get('/students/:id/marks', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM marks WHERE student_id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Fetch student streams and subjects
app.get('/students/:id/streams', (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT s.stream, GROUP_CONCAT(sub.subject) AS subjects
    FROM students st
    JOIN fields f ON st.field_id = f.id
    JOIN subjects sub ON f.id = sub.field_id
    WHERE st.id = ?
    GROUP BY s.stream
  `;
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// we START out server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
