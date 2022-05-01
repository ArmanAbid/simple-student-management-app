import React from "react";

function Forms(props) {
  //-------Add Student Handler-----------//
  const addStudentHandler = (event) => {
    if (props.studentName != "") {
      event.preventDefault();
      const newStudent = {
        id: Date.now(),
        Name: props.studentName,
      };
      props.setStudentList([...props.studentList, newStudent]);
      props.setStudentName("");
    } else {
      alert("Please Enter A Valid Name");
    }
  };
  //-------Upadte Student Handler-----------//
  const updateStudentHandler = (event) => {
    if (props.studentName != "") {
      event.preventDefault();
      props.studentList.map((editStudent) => {
        if (editStudent.id === props.editable.id) {
          editStudent.Name = props.studentName;
        }
        return editStudent;
      });
    } else {
      alert("Please Enter A Valid Name");
    }
    props.setEditMode(false);
    props.setEditable(null);
    props.setStudentName("");
  };
  return (
    <div className="student-form">
      <h2>Student Management App</h2>
      <form>
        <input
          type="text"
          value={props.studentName}
          onChange={(event) => props.setStudentName(event.target.value)}
          placeholder="Enter a valid name"
        ></input>
        <button
          onClick={props.editMode ? updateStudentHandler : addStudentHandler}
        >
          {props.editMode ? "Upadate Student" : "Add student"}
        </button>
      </form>
    </div>
  );
}

export default Forms;
