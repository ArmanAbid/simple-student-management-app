import React from 'react'

function AbsentStudents(props) {
  return (
    <div className="absent-student">
      <h3>absent Student List</h3>
      <ol>
        {props.studentList
          .filter((item) => item.isPresent === false)
          .map((student) => (
            <li>
              <span>{student.Name}</span>
              <button onClick={() => props.toggleHandler(student.id)}>
                Remove
              </button>
            </li>
          ))}
      </ol>
    </div>
  )
}

export default AbsentStudents