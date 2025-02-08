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
              <h3>Services heading here</h3>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center g-3 mt-1">
          <Col lg={4}>
            <div className="feautures-content text-lg-end">
              <div className="d-flex mt-5 gap-2">
                <div className="text">
                  <h6 className="text-dark">Exceptional Speed</h6>
                  <p className="text-muted">Engineered to operate at top speeds, ensuring quick and efficient execution of tasks.</p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-1" className="fs-5 text-primary" />
                </div>
              </div>
              <div className="d-flex my-3 gap-2">
                <div className="text">
                  <h6 className="text-dark">Optimized Efficiency</h6>
                  <p className="text-muted">
                    Designed to maximize productivity and minimize downtime, providing a smooth and effective user experience.
                  </p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-2" className="fs-5 text-primary" />
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="text">
                  <h6 className="text-dark">Reliable Operation</h6>
                  <p className="text-muted">Built for consistent and dependable performance, even under demanding conditions or high workloads.</p>
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
                  <h6 className="text-dark">Advanced Personalization</h6>
                  <p className="text-muted">Utilize a wide range of options to personalize the product, from appearance to functionality.</p>
                </div>
              </div>
              <div className="d-flex my-3 gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-5" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">Adaptable Functionality</h6>
                  <p className="text-muted">Easily add or remove components and integrations to fit your unique requirements.</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-6" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">User-Specific Profiles</h6>
                  <p className="text-muted">Create and manage different profiles to accommodate various user preferences and needs.</p>
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
