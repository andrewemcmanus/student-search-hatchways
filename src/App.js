import React from 'react';
import './App.css';
import SearchBars from './components/SearchBars';
import GetStudentData from './scripts/getStudentData';

function App() {
  const studentData = GetStudentData();
  if (studentData) {
    const students = studentData.students;
    return (
      <div className="App">
        <SearchBars students={students} />
      </div>
    );

  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default App;
