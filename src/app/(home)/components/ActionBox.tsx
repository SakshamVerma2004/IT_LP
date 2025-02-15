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
              <h3 className="mb-4">Connect with millions of creative individuals at SpeedScript.</h3>
              <p className="text-light f-16">
              At SpeedScript, we foster a vibrant community of creative minds. Join us to collaborate, share ideas, and gain inspiration from fellow innovators. Together, we can elevate your creative journey and turn visions into reality.
              </p>
              {/* <div className="pt-3">
                <Button variant="white">
                  Free Trial <IconifyIcon icon="" className="mdi mdi-arrow-right" />{' '}
                </Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
