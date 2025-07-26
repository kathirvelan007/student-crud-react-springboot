import { useEffect, useState } from 'react';

function ShowAll() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/students') // Use your actual Spring Boot endpoint
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>All Students</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.id}. {student.name} - {student.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowAll;
