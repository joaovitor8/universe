
import { useEffect } from "react";
import axios from "axios";


export const NewsDeleteForm = (email) => {

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:4000/db/news/user`, { data: { email } });
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  useEffect(() => {
    handleDelete();
  }, []);

  return (
    <div></div>
  );
}
