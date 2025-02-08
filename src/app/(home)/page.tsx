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
import logoLight from '@/assets/images/logo-light.png'
import logoDark from '@/assets/images/logo-dark.png'
import Loader from '@/components/Loader'

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
                    <Image width={168} height={30} src={logoLight} alt="logoLight" className="logo-light" style={{ height: 30 }} />
                    <Image width={168} height={30} src={logoDark} alt="logoDark" className="logo-dark" style={{ height: 30 }} />
                  </Link>
                </div>
                <p className="text-white mb-4">Comprehensive report, data visualization , and insights to analyze your business.</p>
              </div>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Solution</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">Enterprise</Link>
                </li>
                <li>
                  <Link href="">By Workflow</Link>
                </li>
                <li>
                  <Link href="">By Team</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Company</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="">News &amp; Press</Link>
                </li>
                <li>
                  <Link href="">Our Customer</Link>
                </li>
                <li>
                  <Link href="">Leadership</Link>
                </li>
                <li>
                  <Link href="">Careers</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Resources</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">Blog </Link>
                </li>
                <li>
                  <Link href="">Webinar &amp; Events </Link>
                </li>
                <li>
                  <Link href="">Podcast</Link>
                </li>
                <li>
                  <Link href="">E-book &amp; Guides</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Contact Us</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">Contact Sales </Link>
                </li>
                <li>
                  <Link href="">Become Partner</Link>
                </li>
                <li>
                  <Link href="">Affliate Program</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="border-primary" />
          <Row className="align-items-center justify-content-center">
            <Col>
              <p className="m-0 fs-6 text-white-50 text-center">{currentYear} © Company Name - All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default HomePage
