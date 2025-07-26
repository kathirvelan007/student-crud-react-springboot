import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Student CRUD Home</h1>
      <button onClick={() => navigate('/students')}>Show All Students</button><br /><br />
      <button onClick={() => navigate('/student-by-id')}>Show Student by ID</button><br /><br />
      <button onClick={() => navigate('/create-student')}>Create Student</button><br /><br />
      <button onClick={() => navigate('/update-student')}>Update Student</button><br /><br />
      <button onClick={() => navigate('/delete-student')}>Delete Student</button>
    </div>
  );
}

export default HomePage;
