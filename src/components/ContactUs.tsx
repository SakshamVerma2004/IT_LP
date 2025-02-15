import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <section className="section bg-light" id="contact">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <p className="d-flex align-items-center justify-content-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:address-book" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-dark fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Contact</span>
            </p>
            <h3 className="text-dark">Contact Us</h3>
            <p className="text-muted">We&apos;re here to help! Whether you have questions, need support, or want to explore how we can collaborate</p>
          </Col>
        </Row>
        <Row className="mt-5 align-items-start">
          <Col lg={4}>
            <Card className="border-0 mt-4">
              <CardBody>
                <div className="d-flex align-items-center gap-3">
                  <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center border border-primary mb-3">
                    <IconifyIcon icon="tabler:mail" className="fs-4" />
                  </span>
                  <p className="mb-0 fw-semibold f-16 text-muted">Chat With Our Team</p>
                </div> 
                <span className="fw-semibold f-16 text-muted">support.speedscript@gmail.com</span>
                <Button variant="primary" size="sm" className="w-100 mt-3">
                  Contact Us
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg={8}>
            <div className="custom-form p-3">
              <form>
                <h6 className="mb-4">Send Details</h6>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <input name="name" id="name" type="text" className="form-control border" placeholder="Name" required />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <input name="email" id="email" type="email" className="form-control border" placeholder="Email" required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-3">
                      <input type="text" className="form-control border" id="subject" placeholder="Subject" required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-3">
                      <textarea
                        name="comments"
                        id="comments"
                        rows={8}
                        className="form-control border"
                        required
                        placeholder="Message"
                        defaultValue={''}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs
