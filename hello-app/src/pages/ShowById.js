import { useState } from 'react';

function ShowById() {
  const [studentId, setStudentId] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    fetch(`http://localhost:8080/students/${studentId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Student with ID ${studentId} not found`);
        }
        return response.json();
      })
      .then(data => {
        setStudent(data);
        setError('');
      })
      .catch(err => {
        setStudent(null);
        setError(err.message);
      });
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Show Student by ID</h2>
      <input
        type="number"
        placeholder="Enter student ID"
        value={studentId}
        onChange={e => setStudentId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {student && (
        <div>
          <h3>Student Details:</h3>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
        </div>
      )}
    </div>
  );
}

export default ShowById;
