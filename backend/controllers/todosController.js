const db = require("../db/database.js");

//CREATE DATABASE
exports.createDB = (req, res) => {
  let q = "CREATE DATABASE TODOList";
  db.query(q, (err, result) => {
    if (err) throw err;
    return res.status(201).json("DB created");
  });
};

//CREATE TABLE
exports.createTable = (req, res) => {
  let q =
    "CREATE TABLE todolist1(id int AUTO_INCREMENT, title VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))";
  db.query(q, (err, result) => {
    if (err) throw err;
    return res.status(201).json("TABLE CREATED");
  });
};

//CREATE LIST
exports.createList = (req, res) => {
  const q = "INSERT INTO todolist1 SET ?";

  const { title, description } = req.body;

  db.query(q, { title, description }, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//SHOW TODOS
exports.showTodos = (req, res) => {
  const q = "SELECT * FROM todolist1";

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//SHOW SINGLE TODO
exports.singleTodo = (req, res) => {
  const q = `SELECT * FROM todolist1 where id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result[0]);
  });
};

//UPDATE TODO
exports.updateTodo = (req, res) => {
  const { title, description } = req.body;
  // const q = `UPDATE todolist1 SET title ='${title}' description ='${description}' where id=${req.params.id}`;
  const q = `UPDATE todolist1 SET ? where id=${req.params.id}`;

  db.query(q, { title, description }, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//DELETE SINGLE TODO
exports.deleteSingleTodo = (req, res) => {
  const q = `DELETE FROM todolist1  WHERE id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json({ data: "todo deleted" });
  });
};
