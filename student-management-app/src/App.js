import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editable, setEditable] = useState(null);

  return (
    <div className="App">
      <Forms
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editable={editable}
        setEditable={setEditable}
      />
      <StudentSection
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editable={editable}
        setEditable={setEditable}
      />
    </div>
  );
}

export default App;
