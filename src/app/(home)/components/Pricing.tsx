import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { pricingData, PricingType } from '../data'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'

const PricingCard = ({ description, discount, packs, price, title, isPopular }: PricingType) => {
  return (
    <Card className={`border bg-light-subtle  ${isPopular && 'border-0 bg-primary rounded p-1 bg-shape'}`}>
      {isPopular && (
        <CardHeader className="border-0 text-center">
          <h6 className="text-white mb-0">Top Picks</h6>
        </CardHeader>
      )}
      <CardBody className={`${isPopular && 'bg-light-subtle rounded'}`}>
        <div>
          <h5 className="mb-2 text-primary">{title}</h5>
        </div>
        <div className="price-number my-4">
          <h2 className="fw-bold m-0 text-dark">
            ${price} <span className="text-muted fs-6 fw-medium">/ Month</span>
          </h2>
          <div className="mt-2">
            <span className="badge bg-light text-success border">{discount}% Off</span>
          </div>
        </div>
        <span className="text-muted">{description}</span>
        <hr className="border-primary" />
        <h6 className="fw-semibold">Start Up Starter Packs</h6>
        <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
          {packs.map((item, idx) => (
            <li key={idx}>
              <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> {item}{' '}
            </li>
          ))}
        </ul>
        <div className="price-btn mt-4">
          <Button variant="primary" className="w-100">
            Get Started
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <p className="d-flex align-items-center justify-content-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:receipt-2" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-dark fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Pricing</span>
            </p>
            <h3 className="text-dark">Save Your Time And Get Your Best Price Of Our Services</h3>
            <p className="text-muted">
              Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather
              soul.
            </p>
          </Col>
        </Row>
        <Row className="mt-4 g-4 align-items-end">
          {pricingData.map((item, idx) => {
            return (
              <Col lg={4} key={idx}>
                <PricingCard {...item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
