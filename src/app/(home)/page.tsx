import NavTopBar from '@/components/navTopbar/NavTopBar'
import AboutUs from './components/AboutUs'
import ActionBox from './components/ActionBox'
import CreativeUs from './components/CreativeUs'
import Features from './components/Features'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import ContactUs from '@/components/ContactUs'
import { Col, Container, Row } from 'react-bootstrap'
import { currentYear } from '@/context/constants'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '@/components/Loader'
import black from "./black2.png";
import white from "./white.png";

const HomePage = () => {
  return (
    <>
      <Loader />
      <NavTopBar />
      <Hero />
      <AboutUs />
      <CreativeUs />
      <Features />
      <Services />
      <ActionBox />
      <Testimonial />
      <ContactUs />
      <footer className="footer-part bg-dark py-5 pb-4">
        <Container>
          <Row className="mt-5 pb-5 justify-content-between g-3">
            <Col lg={3}>
              <div className="footer-about">
                <div className="logo mb-4">
                  <Link className="logo text-uppercase" href="/">
                    <Image width={168} height={30} src={white} alt="logoLight" className="logo-light" style={{ height: 40 }} />
                    <Image width={168} height={30} src={black} alt="logoDark" className="logo-dark" style={{ height: 40 }} />
                  </Link>
                </div>
                <p className="text-white mb-4">Comprehensive report, data visualization , and insights to analyze your business.</p>
              </div>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">About Us</h5>
              <ul className="mt-4">
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#achievements">Our Achievements</Link>
                </li>
                <li>
                  <Link href="#services">Our Services</Link>
                </li>
                <li>
                  <Link href="#expertise">Our Expertise</Link>
                </li>
                <li>
                  <Link href="#testimonial">Reviews</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Contact Us</h5>
              <ul className="mt-4">
                <li>
                  <Link href="#contact">Contact </Link>
                </li>
                <li>
                  <Link href="mailto:support.speedscript@gmail.com">Mail Us</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="border-primary" />
          <Row className="align-items-center justify-content-center">
            <Col>
              <p className="m-0 fs-6 text-white-50 text-center">{currentYear} © Speedscript - All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default HomePage
