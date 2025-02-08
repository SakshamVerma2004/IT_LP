import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Team = () => {
  return (
    <section className="section bg-light bg-team" id="team">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <p className="d-flex align-items-center justify-content-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:users-group" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-dark fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Team</span>
            </p>
            <h3 className="text-dark">Our Exceptional Team</h3>
            <p className="text-muted">
              At the heart of our success is our exceptional team of dedicated professionals. Each member brings a wealth of expertise, creativity,
              and passion to the table
            </p>
          </Col>
        </Row>
        <Row className="mt-4 g-3">
          {teamData.map((item, idx) => {
            return (
              <Col lg={4} key={idx}>
                <Card className="border-0 shadow-sm">
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        <Image src={item.image} alt="avatar" className="rounded" height={80} width={80} />
                      </div>
                      <div className="d-flex gap-2">
                        <Link href="">
                          <IconifyIcon icon="tabler:brand-twitter" className="text-muted fs-5" />
                        </Link>
                        <Link href="">
                          <IconifyIcon icon="tabler:brand-facebook" className="text-muted fs-5" />
                        </Link>
                        <Link href="">
                          <IconifyIcon icon="tabler:brand-linkedin" className="text-muted fs-5" />
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 d-flex gap-4">
                      <Link href="" className="text-dark fw-semibold">
                        {item.name}
                      </Link>
                      <span className="text-muted">|</span>
                      <span className="text-muted">{item.role}</span>
                    </div>
                    <p className="text-muted mb-0 mt-2">{item.description}</p>
                    <div className="mt-3">
                      <Link href="" className="text-primary fw-medium">
                        View More <IconifyIcon icon="tabler:arrow-right" className="align-middle" />
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Team
