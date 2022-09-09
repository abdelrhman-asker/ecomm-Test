import React from 'react'
import {Col, Container, Row} from "reactstrap"
import { Link } from 'react-router-dom'
import Product from './Product'

const Shop = ({ products }) => {
  return (
    <div>
        <div className='divteam'>
            <div>
                <h3>Shop</h3>
                <Link to="/" >Home</Link><span>/Shop</span>
            </div>
        </div>

        <Container>
            <Row>
                {products.map((product) => {
                    <Col key={product.id}>
                        <Product product={product} />
                    </Col>

                })}



            </Row>
        </Container>




    </div>
  )
}

export default Shop