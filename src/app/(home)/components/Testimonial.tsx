import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import avatar8 from '@/assets/images/team/person1.jpg'
import avatar5 from '@/assets/images/team/prson2.jpg'
import avatar3 from '@/assets/images/team/person3.jpg'
import avatar4 from '@/assets/images/team/person4.jpg'
import { Card, CardBody, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <section className="section" id="testimonial">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={5}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:messages" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Testimonial</span>
            </p>
            <h3>What Our Clients Say</h3>
            <p className="text-muted">Our clients’ success stories speak for themselves. See how our innovative solutions have transformed businesses, streamlined operations, and boosted growth effortlessly.</p>
            <p className="text-muted">We take pride in delivering excellence. Hear from satisfied clients who have experienced our cutting-edge technology and outstanding support firsthand.</p>
          </Col>
          <Col lg={6}>
            <div className="bg-primary p-3 rounded shadow bg-shape">
              <Carousel controls={true} indicators={false} id="carouselExampleIndicators" className="slide" data-bs-ride="carousel">
                <CarouselItem>
                  <div className="testi text-center">
                    <Card className="bg-shape border-0">
                      <CardBody className="text-start">
                        <Row className="align-items-center justify-content-between g-0">
                          <Col lg={12}>
                            <p className="card-text mt-3 f-18 text-muted">
                             Exceptional service and innovative solutions! Their team transformed our outdated systems into a seamless, efficient platform. Our productivity has increased significantly.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar8} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Ravi Verma</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="testi text-center">
                    <Card className="bg-shape border-0">
                      <CardBody className="text-start">
                        <Row className="align-items-center justify-content-between g-0">
                          <Col lg={12}>
                            <p className="card-text mt-3 f-18 text-muted">
                              Reliable, professional, and highly skilled. They went beyond our expectations with their advanced approach. Our business now runs more smoothly than ever, thanks to their expertise and dedicated support.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar5} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Manjot Atwal</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="testi text-center">
                    <Card className="bg-shape border-0">
                      <CardBody className="text-start">
                        <Row className="align-items-center justify-content-between g-0">
                          <Col lg={12}>
                            <p className="card-text mt-3 f-18 text-muted">
                              Their IT solutions have streamlined our operations, saving us both time and resources. The team’s proactive support and problem-solving skills have played a crucial role in our company’s growth.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar3} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Ravindar Singh</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="testi text-center">
                    <Card className="bg-shape border-0">
                      <CardBody className="text-start">
                        <Row className="align-items-center justify-content-between g-0">
                          <Col lg={12}>
                            <p className="card-text mt-3 f-18 text-muted">
                              Excellent experience! Right from consultation to implementation, their expertise was evident. Our business now operates with improved security and efficiency, all thanks to their outstanding services.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar4} alt="avatrt" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">RB Takher</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
