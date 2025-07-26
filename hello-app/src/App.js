import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShowAll from './pages/ShowAll';
import ShowById from './pages/ShowById';
import CreateStudent from './pages/CreateStudent';
import UpdateStudent from './pages/UpdateStudent';
import DeleteStudent from './pages/DeleteStudent';
import ShowByName from './pages/ShowByName';
import ShowByEmail from './pages/ShowByEmail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<ShowAll />} />
        <Route path="/student-by-id" element={<ShowById />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/update-student" element={<UpdateStudent />} />
        <Route path="/delete-student" element={<DeleteStudent />} />
        <Route path="/show-by-name" element={<ShowByName />} />
        <Route path="/show-by-email" element={<ShowByEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
