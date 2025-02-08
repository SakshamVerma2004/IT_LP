import avatar8 from '@/assets/images/team/avatar-8.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { aboutUsData } from '../data'

const AboutUs = () => {
  return (
    <section className="section position-relative" id="about">
      <Container>
        <Row className="justify-content-between g-3">
          <Col lg={4}>
            <div className="about-content">
              <p className="d-flex align-items-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:info-circle" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">About Us </span>
              </p>
              <h3>Amazing Platform</h3>
              <p className="mb-0 text-muted">Amazing Platform offers cutting-edge solutions to elevate your digital presence. </p>
              <div className="mt-5">
                <Row>
                  <Col lg={3} xs={3}>
                    <h4 className="fw-semibold">5+</h4>
                    <p className="mb-0 text-muted">Years</p>
                  </Col>
                  <Col lg={3} xs={3}>
                    <h4 className="fw-semibold">70+</h4>
                    <p className="mb-0 text-muted">Client</p>
                  </Col>
                  <Col lg={3} xs={3}>
                    <h4 className="fw-semibold">150+</h4>
                    <p className="mb-0 text-muted">Design</p>
                  </Col>
                  <Col lg={3} xs={3}>
                    <h4 className="fw-semibold">18+</h4>
                    <p className="mb-0 text-muted">Teams</p>
                  </Col>
                </Row>
              </div>
              <div className="d-flex align-items-center gap-3 mt-5">
                <Image src={avatar8} alt="avatar" className="rounded-circle" width={40} height={40} />
                <div>
                  <p className="m-0 text-dark fs-6">Malikk Ganteng</p>
                  <p className="m-0 f-14 text-muted">Data Analyst @Skywave</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Row className="align-items-center g-3">
              {aboutUsData.map((item, idx) => {
                return (
                  <Col lg={6} key={idx}>
                    <div className="bg-light p-3 rounded-start rounded-top rounded-5">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center border border-primary">
                          <IconifyIcon icon={item.icon} className="fs-4" />
                        </span>
                        <p className="mb-0 fw-semibold f-18">{item.title}</p>
                      </div>
                      <p className="mb-0 text-muted">{item.description}</p>
                    </div>
                  </Col>
                )
              })}
            </Row>
            <div className="text-end mt-3">
              <Button variant="primary">Show More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
