import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Col, Container, Row } from 'react-bootstrap'
import { dataportfolio, meta } from '../../content_option'
import AnimatedLetters from '../AnimatedLetters'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <div className="text-zone">
              <h1 className="display-4 mb-4">
               
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                  idx={15}
                />
              </h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </div>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </HelmetProvider>
  )
}

export default Portfolio
