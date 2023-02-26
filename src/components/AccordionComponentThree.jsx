import React from "react";

const AccordionComponentThree = ({ one, tow, three, four, five }) => {
  return (
    <div>
      <div class="accordion accordionn" id="accordionExamplethree">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEleven">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="true"
              aria-controls="collapseEleven"
            >
              {one}
            </button>
          </h2>
          <div
            id="collapseEleven"
            class="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#accordionExamplethree"
          >
            <div class="accordion-body accordin_content">
              Tap on the Year: <strong>2019</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwelve">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              {tow}
            </button>
          </h2>
          <div
            id="collapseTwelve"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#accordionExamplethree"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019 2021</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThirteen">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen"
              aria-expanded="false"
              aria-controls="collapseThirteen"
            >
              {three}
            </button>
          </h2>
          <div
            id="collapseThirteen"
            class="accordion-collapse collapse"
            aria-labelledby="headingThirteen"
            data-bs-parent="#accordionExamplethree"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019 2021</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading">
            <button
              class="accordion-button collapsedFourteen"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFourteen"
              aria-expanded="false"
              aria-controls="collapseFourteen"
            >
              {four}
            </button>
          </h2>
          <div
            id="collapseFourteen"
            class="accordion-collapse collapse"
            aria-labelledby="headingFourteen"
            data-bs-parent="#accordionExamplethree"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019 2021</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponentThree;
