import React from "react";

function AllStudent(props) {
  //----------Edit Student Handler-----------//props.
  const editStudentHandler = (id) => {
    const editableStudent = props.studentList.find((item) => item.id == id);
    props.setEditMode(true);
    props.setEditable(editableStudent);
    props.setStudentName(editableStudent.Name);
  };
  //----------Delete Student Handler-----------//
  const deleteStudentHandler = (id) => {
    props.setStudentList(props.studentList.filter((item) => item.id !== id));
  };
  //----------Present Student Handler-----------//
  const presentHandler = (id) => {
    const student = props.studentList.find((item) => item.id === id);
    if (student.isPresent === true)
      alert("Student is already in the present list");
    else if (student.isPresent === false)
      alert("Student is already in the absent list");
    else {
      props.setStudentList(
        props.studentList.map((item) => {
          if (item.id === student.id) {
            item.isPresent = true;
          }
          return item;
        })
      );
    }
  };
  //-----------Absent Student Handler-----------//
  const absentHandler = (id) => {
    const student = props.studentList.find((item) => item.id === id);
    if (student.isPresent === true)
      alert("Student is already in the present list");
    else if (student.isPresent === false)
      alert("Student is already in the absent list");
    else {
      props.setStudentList(
        props.studentList.map((item) => {
          if (item.id === student.id) {
            item.isPresent = false;
          }
          return item;
        })
      );
    }
  };
  return (
    <div className="all-student">
      <h3>All Student List</h3>
      <ol>
        {props.studentList.map((student) => (
          <li>
            <span>{student.Name}</span>
            <button onClick={() => editStudentHandler(student.id)}>Edit</button>
            <button onClick={() => deleteStudentHandler(student.id)}>
              Delete
            </button>
            <button onClick={() => presentHandler(student.id)}>Present</button>
            <button onClick={() => absentHandler(student.id)}>Absent</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AllStudent;
