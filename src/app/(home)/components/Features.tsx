import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import features from '@/assets/images/features.png'
import web2 from '@/assets/images/web-2.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Features = () => {
  return (
    <section className="section" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-1">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:devices-cog" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Services</span>
              </p>
              <h3>Expert Support and Services</h3>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center g-3 mt-1">
          <Col lg={4}>
            <div className="feautures-content text-lg-end">
              <div className="d-flex mt-5 gap-2">
                <div className="text">
                  <h6 className="text-dark">Web Development</h6>
                  <p className="text-muted">We create responsive and dynamic websites tailored to your business needs, ensuring seamless user experiences and robust functionality across all devices.</p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-1" className="fs-5 text-primary" />
                </div>
              </div>
              <div className="d-flex my-3 gap-2">
                <div className="text">
                  <h6 className="text-dark">UI/UX Designing</h6>
                  <p className="text-muted">
                  Our design team focuses on crafting intuitive user interfaces and engaging experiences, enhancing usability and satisfaction for your target audience.
                  </p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-2" className="fs-5 text-primary" />
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="text">
                  <h6 className="text-dark">App Development</h6>
                  <p className="text-muted">We develop innovative mobile and web applications that are user-friendly, scalable, and designed to meet your specific business objectives.</p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-3" className="fs-5 text-primary" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="features-img">
              <Image src={web2} alt="web" className="img-fluid mx-auto d-block" />
            </div>
          </Col>
          <Col lg={4}>
            <div className="feautures-content">
              <div className="d-flex mt-5 gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-4" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">3D Modelling</h6>
                  <p className="text-muted">Our 3D modeling services bring your ideas to life with realistic visualizations, perfect for product design, architecture, and immersive experiences.</p>
                </div>
              </div>
              <div className="d-flex my-3 gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-5" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">Strategy Innovation</h6>
                  <p className="text-muted">We help businesses identify growth opportunities through strategic innovation, leveraging technology and market insights to drive sustainable success.</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-6" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">Personalized Solutions</h6>
                  <p className="text-muted">Our team delivers customized IT solutions tailored to your unique challenges, ensuring optimal performance and alignment with your business goals.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
