import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import paypal from '@/assets/images/logo/paypal.png'
import shopify from '@/assets/images/logo/shopify.png'
import amazon from '@/assets/images/logo/amazon.png'
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
            <h3>From Our Community.</h3>
            <p className="text-muted">Here&apos;s what other subscribers had to say about Production Online.</p>
            <h4 className="fw-semibold">
              <IconifyIcon icon="tabler:star-filled" className="text-warning" /> 4.5 <span className="f-14 text-muted fw-medium">Best Review</span>
            </h4>
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
                            <Image src={paypal} alt="paypal" />
                            <p className="card-text mt-3 f-18 text-muted">
                              &quot; Production Online has helped me become a bette musician and producer tha I ever thought possible.&quot;
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar8} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Danilo Tanic</p>
                                <p className="m-0 fs-6">Head of Design at Paypal</p>
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
                            <Image src={shopify} alt="shopify" />
                            <p className="card-text mt-3 f-18 text-muted">
                              &quot;Each of team member is getting precious help in their professional development and can build a program that&quot;.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar5} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Samuel Kane</p>
                                <p className="m-0 fs-6">Project Manager at Shopify</p>
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
                            <Image src={amazon} alt="amazon" />
                            <p className="card-text mt-3 f-18 text-muted">
                              &quot;Growth was implemented within minutes and it is now an essential part of our amazing development process&quot;.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar3} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">James Arthur</p>
                                <p className="m-0 fs-6">Senior Manager at Amazon</p>
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
                            <Image src={amazon} alt="amazon" />
                            <p className="card-text mt-3 f-18 text-muted">
                              &quot;Growth was implemented within minutes and it is now an essential part of our amazing development process&quot;.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar4} alt="avatrt" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">James Arthur</p>
                                <p className="m-0 fs-6">Senior Manager at Amazon</p>
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
