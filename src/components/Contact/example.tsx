import React, { FunctionComponent } from 'react'
import { Container } from 'reactstrap'

export const ExampleFormSection: FunctionComponent<{}> = () => (
  <Container className="bg-white text-dark">
    <ExampleForm />
  </Container>
)

//Copied from /static/template/blue/elements.html
export const ExampleForm: FunctionComponent<{ className?: string }> = ({
  className = '',
}) => (
  <section className={className}>
    <h4>Form</h4>
    <form method="post" action="#">
      <div className="row">
        <div className="col-12 col-sm-6 form-group">
          <input
            type="text"
            name="demo-name"
            id="demo-name"
            className="border-0 bg-light form-control"
            value=""
            placeholder="Name"
          />
        </div>
        <div className="col-12 col-sm-6 form-group">
          <input
            type="email"
            name="demo-email"
            id="demo-email"
            className="border-0 bg-light form-control"
            value=""
            placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group">
        <select
          name="demo-category"
          id="demo-category"
          className="bg-light border-0 form-control"
        >
          <option value="">- Category -</option>
          <option value="1">Manufacturing</option>
          <option value="1">Shipping</option>
          <option value="1">Administration</option>
          <option value="1">Human Resources</option>
        </select>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 form-check">
          <input
            type="radio"
            id="demo-priority-low"
            name="demo-priority"
            value="low"
            checked
            className="mr-2"
          />
          <label htmlFor="demo-priority-low">Low</label>
        </div>
        <div className="col-12 col-md-4 form-check">
          <input
            type="radio"
            id="demo-priority-normal"
            name="demo-priority"
            value="normal"
            className="mr-2"
          />
          <label htmlFor="demo-priority-normal">Normal</label>
        </div>
        <div className="col-12 col-md-4 form-check">
          <input
            type="radio"
            id="demo-priority-high"
            name="demo-priority"
            value="high"
            className="mr-2 form-check-input"
          />
          <label htmlFor="demo-priority-high form-check-label">High</label>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 form-check">
          <input
            type="checkbox"
            id="demo-copy"
            name="demo-copy"
            className="mr-2"
          />
          <label htmlFor="demo-copy">Email me a copy</label>
        </div>
        <div className="col-12 col-md-6 form-check">
          <input
            type="checkbox"
            id="demo-human"
            name="demo-human"
            className="mr-2"
          />
          <label htmlFor="demo-human">Not a robot</label>
        </div>
      </div>
      <div className="form-group">
        <textarea
          name="demo-message"
          id="demo-message"
          placeholder="Enter your message"
          rows={6}
          className="border-0 bg-light form-control"
        ></textarea>
      </div>

      <ul className="nav form-group">
        <li className="nav-item">
          <input
            type="submit"
            value="Send Message"
            className="primary btn btn-primary mr-2 text-uppercase px-5"
          />
        </li>
        <li className="nav-item">
          <input
            type="reset"
            value="Reset"
            className="btn btn-secondary mx-2 text-uppercase px-5"
          />
        </li>
      </ul>
    </form>
  </section>
)
