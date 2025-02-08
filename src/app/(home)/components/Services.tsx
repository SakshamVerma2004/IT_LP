import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { servicesData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className="section services-section bg-light" id="expertise">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Expertise </span>
              </p>
              <h3>How To Better Into Business</h3>
              <p className="text-muted">Improving one&apos;s business acumen and navigating the complexities of entrepreneurship require </p>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {servicesData.map((item, idx) => {
            return (
              <Col lg={3} key={idx}>
                <div className="p-3 rounded bg-light">
                  <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center border border-primary">
                    <IconifyIcon icon={item.icon} className="fs-4" />
                  </span>
                  <h6 className="mt-4 text-dark">{item.title}</h6>
                  <p className="text-muted">{item.description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services
