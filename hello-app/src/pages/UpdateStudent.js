import { useState } from 'react';

function UpdateStudent() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    const student = { name, email };

    fetch(`http://localhost:8080/students/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
      .then(response => {
        if (response.ok) {
          setMessage('✅ Student updated successfully!');
          setName('');
          setEmail('');
          setId('');
        } else {
          return response.text().then(err => {
            throw new Error(err || 'Update failed');
          });
        }
      })
      .catch(error => {
        setMessage(`❌ Error: ${error.message}`);
      });
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Update Student</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Student ID: </label><br />
          <input
            type="number"
            value={id}
            required
            onChange={e => setId(e.target.value)}
          />
        </div><br />
        <div>
          <label>New Name: </label><br />
          <input
            type="text"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </div><br />
        <div>
          <label>New Email: </label><br />
          <input
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div><br />
        <button type="submit">Update</button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default UpdateStudent;
