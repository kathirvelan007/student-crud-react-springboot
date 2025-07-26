import React, { useState } from 'react';

function ShowByName() {
  const [name, setName] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/students/name/${name}`);
      if (!response.ok) {
        throw new Error('Student not found');
      }
      const data = await response.json();
      setStudent(data);
      setError('');
    } catch (err) {
      setStudent(null);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Search Student by Name</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {student && (
        <div>
          <h3>Student Details</h3>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
        </div>
      )}
    </div>
  );
}

export default ShowByName;
