import React, { useState } from 'react';

function ShowByEmail() {
  const [email, setEmail] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    fetch(`http://localhost:8080/students/email/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Student not found');
        }
        return response.json();
      })
      .then((data) => {
        setStudent(data);
        setError('');
      })
      .catch((error) => {
        setStudent(null);
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h2>Find Student by Email</h2>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {student && (
        <div>
          <h3>Student Info:</h3>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
        </div>
      )}
    </div>
  );
}

export default ShowByEmail;
