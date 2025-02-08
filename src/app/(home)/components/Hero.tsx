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
                  <h5 className="mb-3 text-white text-opacity-50">Discover Today</h5>
                  <h1>A digital studio designing captivating experiences.</h1>
                  <p className="mt-4 text-white text-opacity-50 f-16">
                    A premier web design company specializing in creating visually stunning and highly engaging online experiences.{' '}
                  </p>
                  <div className="watch-video mt-5">
                    <a href="#" className="video-play-icon text-white" data-bs-toggle="modal" data-bs-target="#watchvideomodal">
                      <IconifyIcon width={16} height={16} icon="tabler:player-play-filled" className="play-icon-circle me-2" />{' '}
                      <span>Watch The Video!</span>
                    </a>
                    <div className="modal fade bd-example-modal-lg" id="watchvideomodal" data-keyboard="false" tabIndex={-1} aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
                        <div className="modal-content video-modal">
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                          <video id="VisaChipCardVideo" className="w-100" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
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
