import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Admin.css";
import image from "../Images/x.jpeg";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080";



const emptyForm = { title: "", price: "", description: "", image: "" };

const Admin = () => {
    
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [newItem, setNewItem] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);

  const fetchItems = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API_URL}/menu_item`);
      setItems(res.data);
    } catch (err) {
      setError("Could not load menu items");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleInsert = async () => {// addin a new menu item and saving it in the db 
    if (!newItem.title || !newItem.price) return;
    try {
      await axios.post(`${API_URL}/menu_item`, newItem);
      setNewItem(emptyForm);
      fetchItems();
    } catch (err) {
      setError("Could not add item");// if there is any error and could not add items
      console.log(err);
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditForm({ title: item.title, price: item.price, description: item.description, image: item.image});
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(emptyForm);
  };

  const handleUpdate = async (id) => {// updating any existing menu item using id
    try {
      await axios.put(`${API_URL}/menu_item/${id}`, editForm);
      cancelEdit();
      fetchItems();
    } catch (err) {
      setError("Could not update item");
      console.log(err);
    }
  };

  const handleDelete = async (id) => {//deleting any menu item using db 
    if (!window.confirm("Delete this menu item?")) return;
    try {
      await axios.delete(`${API_URL}/menu_item/${id}`);
      fetchItems();
    } catch (err) {
      setError("Could not delete item");
      console.log(err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin — Menu Items</h1>
      <Link to="/admin/users">Manage Users</Link>
      {error && <p className="admin-error">{error}</p>}

      <table className="admin-table">
        <thead>
          <tr><th>ID</th><th>Title</th><th>Price</th><th>Description</th><th>Image</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={5}>Loading...</td></tr>
          ) : (
            items.map((item) => (
              <tr>
                <td>{item.id}</td>
                {editingId === item.id ? (
                  <>
                    <td><input value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} /></td>
                    <td><input value={editForm.price} onChange={(e) => setEditForm({ ...editForm, price: e.target.value })} /></td>
                    <td><input value={editForm.description} onChange={(e) => setEditForm({ ...editForm, description: e.target.value })} /></td>
                      <td><input placeholder="Image URL" value={editForm.image} onChange={(e) => setEditForm({ ...editForm, image: e.target.value })} /></td>
                    <td className="admin-actions">
                      <button onClick={() => handleUpdate(item.id)}>Save</button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
               <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.image && <img src={item.image} alt={item.title} width="60" />}</td>
                    <td className="admin-actions">
                      <button onClick={() => startEdit(item)}>Edit</button>
                      <button className="admin-delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}

          <tr>
            <td>-</td>
            <td><input placeholder="Title" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} /></td>
            <td><input placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} /></td>
            <td><input placeholder="Description" value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} /></td>
            <td><input placeholder="Image URL" value={newItem.image} onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} /></td>
            <td className="admin-actions"><button onClick={handleInsert}>Add</button></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default Admin;