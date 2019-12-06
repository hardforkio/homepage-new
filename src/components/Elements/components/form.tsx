import React, { FunctionComponent } from 'react'
import {
  Container,
  Form as BootstrapForm,
  Row,
  FormGroup,
  Input,
  CustomInput,
  Label,
  Nav,
  NavItem,
  Col,
} from 'reactstrap'

//Copied from /static/template/blue/elements.html
export const Form: FunctionComponent<{ className?: string }> = ({
  className = '',
}) => (
  <Container>
    <section className={className}>
      <h4>Form</h4>
      <BootstrapForm method="post" action="#">
        <Row form>
          <FormGroup className="col-12 col-sm-6">
            <Input
              type="text"
              name="demo-name"
              id="demo-name"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup className="col-12 col-sm-6">
            <Input
              type="email"
              name="demo-email"
              id="demo-email"
              placeholder="Email"
            />
          </FormGroup>
        </Row>
        <FormGroup>
          <select
            name="demo-category"
            id="demo-category"
            className="form-control"
          >
            <option value="">- Category -</option>
            <option value="1">Manufacturing</option>
            <option value="1">Shipping</option>
            <option value="1">Administration</option>
            <option value="1">Human Resources</option>
          </select>
        </FormGroup>
        <Row form>
          <Col xs={12} md={4}>
            <CustomInput
              type="radio"
              name="demo-priority"
              value="low"
              label="Low"
              id="choose_low"
            />
          </Col>
          <Col xs={12} md={4}>
            <CustomInput
              type="radio"
              id="demo-priority-normal"
              name="demo-priority"
              value="normal"
              label="Normal"
            />
          </Col>
          <Col xs={12} md={4}>
            <CustomInput
              type="radio"
              id="demo-priority-high"
              name="demo-priority"
              value="high"
              label="High"
            />
          </Col>
        </Row>
        <Row form>
          <Col xs={12} md={6}>
            <CustomInput
              type="checkbox"
              id="demo-copy"
              name="demo-copy"
              label="Email me a copy"
            />
          </Col>
          <Col xs={12} md={6}>
            <CustomInput
              type="checkbox"
              id="demo-human"
              name="demo-human"
              label="Not a robot"
            />
          </Col>
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
      </BootstrapForm>
    </section>
  </Container>
)
