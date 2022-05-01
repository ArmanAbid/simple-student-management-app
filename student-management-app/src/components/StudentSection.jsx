import React from "react";
import AbsentStudents from "./AbsentStudents";
import AllStudent from "./AllStudent";
import PresentStudents from "./PresentStudents";

function StudentSection(props) {
  //-------Toggle Handler-----------//
  const toggleHandler = (id) => {
    const student = props.studentList.find((item) => item.id === id);
    props.setStudentList(
      props.studentList.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent;
        }
        return item;
      })
    );
  };
  return (
    <div className="student-section">
      <AllStudent
        setStudentName={props.setStudentName}
        studentList={props.studentList}
        setStudentList={props.setStudentList}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editable={props.editable}
        setEditable={props.setEditable}
      />
      <PresentStudents
        studentList={props.studentList}
        setStudentList={props.setStudentList}
        toggleHandler={toggleHandler}
      />
      <AbsentStudents
        studentList={props.studentList}
        setStudentList={props.setStudentList}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default StudentSection;
