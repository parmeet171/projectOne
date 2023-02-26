import React from 'react'

const ButtonGroupTwo = () => {
  return (
    <div>
      <div
        className="btn-group-vertical hidden"
        role="group"
        aria-label="Vertical button group"
      >
        <button type="button" className="btn btn-primary group_button">
          Semester 1
        </button>
        <button type="button" className="btn btn-primary group_button">
          Semester 2
        </button>
        <button type="button" className="btn btn-primary group_button">
          Semester 3
        </button>
        <button type="button" className="btn btn-primary group_button">
          Semester 4
        </button>
        <button type="button" className="btn btn-primary group_button">
          Semester 5
        </button>
        <button type="button" className="btn btn-primary group_button">
          Semester 6
        </button>
      </div>


      <div className=" container">
        <div
          class="btn-group visible horizontal_buttons"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="btn btn-secondary group_button">
          Semester 1
          </button>
          <button type="button" class="btn btn-secondary group_button">
          Semester 2
          </button>
          <button type="button" class="btn btn-secondary group_button">
          Semester 3
          </button>
          <button type="button" class="btn btn-secondary group_button">
          Semester 4
          </button>
          <button type="button" class="btn btn-secondary group_button">
          Semester 5
          </button>
          <button type="button" class="btn btn-secondary group_button">
          Semester 6
          </button>
        </div>
      </div>
    </div>
  )
}

export default ButtonGroupTwo
