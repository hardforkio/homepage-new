import React, { FunctionComponent } from 'react'
import {
  Button,
  Col,
  Container,
  CustomInput,
  Form as BootstrapForm,
  FormGroup,
  Input,
  InputGroup,
  Row,
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
          <Input name="demo-category" id="demo-category" type="select">
            <option value="">- Category -</option>
            <option value="1">Manufacturing</option>
            <option value="2">Shipping</option>
            <option value="3">Administration</option>
            <option value="4">Human Resources</option>
          </Input>
        </FormGroup>
        <Row form tag={FormGroup}>
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
        <Row form tag={FormGroup}>
          <Col xs={12} md={4}>
            <CustomInput
              type="checkbox"
              id="demo-copy"
              name="demo-copy"
              label="Email me a copy"
            />
          </Col>
          <Col xs={12} md={4}>
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
            className="form-control"
          ></textarea>
        </FormGroup>

        <Button color="primary" type="submit" className="mr-2 text-uppercase">
          Send Message
        </Button>
        <Button outline type="reset" className="mx-2 text-uppercase">
          Reset
        </Button>
      </BootstrapForm>
    </section>
  </Container>
)
