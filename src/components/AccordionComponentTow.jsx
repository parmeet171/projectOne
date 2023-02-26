import React from 'react'

const AccordionComponentTow = ({ one, tow, three, four, five }) => {
  return (
    <div className="big_container">
      <p>Non-Honors</p>
      <div class="accordion accordionn" id="accordionExampletwo">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            > 
              {one}
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExampletwo"
          >
            <div class="accordion-body accordin_content">
              Tap on the Year: <strong>2019</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              {tow}
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExampletwo"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019 2021</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEight">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              {three}
            </button>
          </h2>
          <div
            id="collapseEight"
            class="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExampletwo"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019 2021</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading">
            <button
              class="accordion-button collapsedNine"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              {four}
            </button>
          </h2>
          <div
            id="collapseNine"
            class="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExampletwo"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019 2021</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading">
            <button
              class="accordion-button collapsedTen"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              {five}
            </button>
          </h2>
          <div
            id="collapseTen"
            class="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExampletwo"
          >
            <div class="accordion-body">
              Tap on the Year: <strong>2019</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionComponentTow
