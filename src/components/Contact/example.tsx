import React, { FunctionComponent } from 'react'
import {
  Container,
  Form,
  Row,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
} from 'reactstrap'

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
    <Form method="post" action="#">
      <Row>
        <FormGroup className="col-12 col-sm-6">
          <Input
            type="text"
            name="demo-name"
            id="demo-name"
            className="border-0 bg-light"
            value=""
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup className="col-12 col-sm-6">
          <Input
            type="email"
            name="demo-email"
            id="demo-email"
            className="border-0 bg-light"
            value=""
            placeholder="Email"
          />
        </FormGroup>
      </Row>
      <FormGroup>
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
      </FormGroup>
      <Row className="row">
        <FormGroup check className="col-12 col-md-4">
          <Input
            type="radio"
            id="demo-priority-low"
            name="demo-priority"
            value="low"
            checked
            className="mr-2"
          />
          <Label for="demo-priority-low">Low</Label>
        </FormGroup>
        <FormGroup check className="col-12 col-md-4">
          <Input
            type="radio"
            id="demo-priority-normal"
            name="demo-priority"
            value="normal"
            className="mr-2"
          />
          <Label for="demo-priority-normal">Normal</Label>
        </FormGroup>
        <FormGroup check className="col-12 col-md-4">
          <Input
            type="radio"
            id="demo-priority-high"
            name="demo-priority"
            value="high"
            className="mr-2"
          />
          <Label for="demo-priority-high">High</Label>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup check className="col-12 col-md-6">
          <Input type="checkbox" id="demo-copy" name="demo-copy" />
          <Label for="demo-copy">Email me a copy</Label>
        </FormGroup>
        <FormGroup check className="col-12 col-md-6">
          <Input type="checkbox" id="demo-human" name="demo-human" />
          <Label for="demo-human">Not a robot</Label>
        </FormGroup>
      </Row>
      <FormGroup>
        <textarea
          name="demo-message"
          id="demo-message"
          placeholder="Enter your message"
          rows={6}
          className="border-0 bg-light form-control"
        ></textarea>
      </FormGroup>

      <Nav className="form-group">
        <NavItem>
          <Input
            type="submit"
            value="Send Message"
            className="primary btn btn-primary mr-2 text-uppercase px-5"
          />
        </NavItem>
        <NavItem>
          <Input
            type="reset"
            value="Reset"
            className="btn btn-secondary mx-2 text-uppercase px-5"
          />
        </NavItem>
      </Nav>
    </Form>
  </section>
)
