import axios from "axios";
import React, { useEffect, useState } from "react";

//Main Component
const Main = () => {
  const [editMode, setEditMode] = useState(false);
  const [list, setList] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  // Implementing the Read feature
  // Reading Data from the Database
  const showTodos = async () => {
    try {
      const { data } = await axios.get("/api/show/todos");
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Implementing the Create feature
  // Adding Data to the Database
  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const add = await axios.post("/api/create/list", { title, description });
      if (add.status === 200) {
        setTitle("");
        setDescription("");
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Implementing the Delete feature
  // Deleting Data from the Database
  const deleteTodo = async (i) => {
    try {
      const todoDelete = await axios.delete(`/api/delete/todo/${i}`);
      if (todoDelete.status === 200) {
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Selecting Data from the Database
  const showSingleTodo = async (i) => {
    setEditMode(true);
    try {
      const { data } = await axios.get(`/api/todo/${i}`);
      setTitle(data.title);
      setDescription(data.description);
      setUserId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  // Implementing the Update feature
  // Updating Data in the Database
  const editTodo = async (e) => {
    e.preventDefault();
    try {
      const editTodo = await axios.put(`/api/update/todo/${userId}`, {
        title,
        description,
      });
      if (editTodo.status === 200) {
        setEditMode(false);
        setTitle("");
        setDescription("");
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // hook to load page on every reload
  useEffect(() => {
    showTodos();
  }, []);

  return (
    <>
      <div className="container">
        {/* form to take input from user */}
        <div
          className="form"
          style={{ paddingBottom: "50px", paddingTop: "50px" }}
        >
          <form onSubmit={editMode ? editTodo : addTodo}>
            <div
              className="form-wrapper"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ flex: 1, marginRight: "10px" }}>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="form-control"
                  type="text"
                  placeholder="Enter title ..."
                  name="title"
                ></input>
              </div>
              <div style={{ flex: 1 }}>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="form-control"
                  type="text"
                  placeholder="Enter description ..."
                  name="description"
                ></input>
              </div>
              {editMode ? (
                <button
                  type="submit"
                  style={{ width: "200px", marginLeft: "10px" }}
                  className="btn btn-primary"
                >
                  EDIT
                </button>
              ) : (
                <button
                  type="submit"
                  style={{ width: "200px", marginLeft: "10px" }}
                  className="btn btn-success"
                >
                  +ADD
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Showing the data after fetching from the database */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((d) => (
                <tr key={d.id}>
                  <th scope="row">{d.id}</th>
                  <td>{d.title}</td>
                  <td>{d.description}</td>
                  <td>
                    <i
                      onClick={() => showSingleTodo(d.id)}
                      className="fa-solid fa-pen-to-square"
                      style={{
                        color: "green",
                        cursor: "pointer",
                        marginRight: "25px",
                      }}
                    ></i>
                    <i
                      onClick={() => deleteTodo(d.id)}
                      className="fa-solid fa-trash-can"
                      style={{ color: "red", cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
