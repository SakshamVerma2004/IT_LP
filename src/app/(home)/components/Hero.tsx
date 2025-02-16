import Image from 'next/image'
import React from 'react'
import webImg from '@/assets/images/web-3.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-home" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="home-title text-white">
                  <h5 className="mb-3 text-white text-opacity-50">Digital Presence</h5>
                  <h1>Prove & Enhance Your Online Existence.</h1>
                  <p className="mt-4 text-white text-opacity-50 f-16">
                    Building Trust and Patience in Your Digital Journey. In today&apos;s digital landscape, establishing a strong online presence is
                    essential.{' '}
                  </p>

                  <p className="mt-4 text-white text-opacity-50 f-16">
                  Our mission is to guide you through this process with unwavering support, helping you navigate challenges, develop authentic connections, and achieve lasting success in your online endeavors.{' '}
                  </p>
                </div>
              </Col>
              <Col lg={5}>
                <Image src={webImg} alt="web3" className="img-fluid mx-auto d-block" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Hero
