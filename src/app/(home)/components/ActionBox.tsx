import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="section cta-bg">
      <div className="bg-overlay" />
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="cta-content text-center text-white">
              <h3 className="mb-4">Join millions of creative people with Skywave </h3>
              <p className="text-light f-16">
                Connect with a vibrant community of innovators and creators who are transforming their ideas into reality with Skywave. Whether
                you&apos;re looking to streamline your projects, personalize your tools
              </p>
              <div className="pt-3">
                <Button variant="white">
                  Free Trial <IconifyIcon icon="" className="mdi mdi-arrow-right" />{' '}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
