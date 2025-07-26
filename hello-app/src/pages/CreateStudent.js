import { useState } from 'react';

function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = { name, email };

    fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
      .then(response => {
        if (response.status === 201) {
          setMessage('✅ Student created successfully!');
          setName('');
          setEmail('');
        } else {
          return response.text().then(err => {
            throw new Error(err || 'Something went wrong');
          });
        }
      })
      .catch(error => {
        setMessage(`❌ Error: ${error.message}`);
      });
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label><br />
          <input
            type="text"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </div><br />
        <div>
          <label>Email: </label><br />
          <input
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div><br />
        <button type="submit">Create</button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default CreateStudent;
