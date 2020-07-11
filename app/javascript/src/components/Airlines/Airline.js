import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Rating from '../Rating/Rating'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`

const AirlineLogo = styled.div`
  height: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  img {
    height: 50px;
    width: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  a {
    color: #fff;
    background: #000;   
    border-radius: 4px;
    padding: 10px 50px;
    border-radius: 3px;
    border: 1px solid #71b406;
    width: 100%;
    margin: 7px;
    text-decoration: none;
    
  }
`

const Airline = (props) => {
  const average_score = parseFloat(props.average_score / 100)

  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} width="50"/>
      </AirlineLogo>
      <AirlineName>
        {props.attributes.name}
      </AirlineName>
      <Rating score={props.attributes.avg_score} />
      <LinkWrapper>
        <Link to={"/airlines/" + props.slug}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline;