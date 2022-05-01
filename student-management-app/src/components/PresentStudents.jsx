import React from 'react'

function PresentStudents(props) {
  return (
    <div className="present-student">
      <h3>Present Student List</h3>
      <ol>
        {props.studentList
          .filter((item) => item.isPresent === true)
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

export default PresentStudents