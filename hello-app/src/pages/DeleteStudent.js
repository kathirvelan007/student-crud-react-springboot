import { useState } from 'react';

function DeleteStudent() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    fetch(`http://localhost:8080/students/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 204) {
          setMessage(`✅ Student with ID ${id} deleted successfully!`);
        } else if (response.status === 404) {
          setMessage(`❌ Student with ID ${id} not found.`);
        } else {
          throw new Error('Something went wrong.');
        }
      })
      .catch(error => {
        setMessage(`❌ Error: ${error.message}`);
      });

    setId('');
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Delete Student</h2>
      <input
        type="number"
        placeholder="Enter student ID"
        value={id}
        required
        onChange={e => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default DeleteStudent;
