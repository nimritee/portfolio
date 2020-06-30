import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';

const Hobbies = () => (
  <div>
    <br />
    <h2 className="titleSeparate">My Interests</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="coffee.png"
          alt="coffee image"
          textH4="Love Coffee"
          textH3="Coffee + Me = Happiness"
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="swimming.jpeg"
          alt="swimming image"
          textH4="Love Swimming"
          textH3="Swimming + Me = Relaxation"
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="car.png"
          alt="car image"
          textH4="Love Driving"
          textH3="Driving + Me = Fun"
        />
      </Col>
    </Row>
  </div>
);
export default Hobbies;
