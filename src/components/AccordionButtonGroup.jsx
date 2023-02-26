import React from "react";

const AccordionButtonGroup = () => {
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
          Semester 3
        </button>
        <button type="button" className="btn btn-primary group_button">
          Semester 5
        </button>
      </div>
      <div className="horizontal_buttons ">
        <div
          class="btn-group visible"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="btn btn-secondary group_button new">
          Semester 1
          </button>
          <button type="button" class="btn btn-secondary group_button new">
          Semester 3
          </button>
          <button type="button" class="btn btn-secondary group_button new">
          Semester 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccordionButtonGroup;
